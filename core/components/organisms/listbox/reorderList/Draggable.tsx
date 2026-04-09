import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getTranslateOffset, transformItem, setItemTransition, binarySearch, schd, isTouchEvent } from './utils';
import type { IItemProps, IProps, TEvent } from './types';
import styles from '@css/components/listbox.module.css';

const AUTOSCROLL_ACTIVE_OFFSET = 200;
const AUTOSCROLL_SPEED_RATIO = 10;
/** Min gap between list edge and picked / drop slot while keyboard reordering (px). */
const KEYBOARD_REORDER_SCROLL_PADDING = 8;

const TAB_FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

class Draggable<Value = string> extends React.Component<IProps<Value>> {
  listRef = React.createRef<HTMLElement>();
  ghostRef = React.createRef<HTMLElement>();
  topOffsets: number[] = [];
  itemTranslateOffsets: number[] = [];
  initialYOffset = 0;
  lastScroll = 0;
  lastYOffset = 0;
  lastListYOffset = 0;
  mouseDownX = 0;
  mouseDownY = 0;
  hasDragStarted = false;
  dropTimeout?: number;
  needle = -1;
  afterIndex = -2;
  state = {
    itemDragged: -1,
    itemDraggedOutOfBounds: -1,
    selectedItem: -1,
    focusedIndex: 0,
    initialX: 0,
    initialY: 0,
    targetX: 0,
    targetY: 0,
    targetHeight: 0,
    targetWidth: 0,
    scrollingSpeed: 0,
    scrollWindow: false,
    isClickAndFollow: false,
    ariaMessage: '',
  };
  schdOnMouseMove: { (e: MouseEvent): void; cancel(): void };
  schdOnTouchMove: { (e: TouchEvent): void; cancel(): void };
  schdOnEnd: { (e: Event): void; cancel(): void };

  constructor(props: IProps<Value>) {
    super(props);
    this.schdOnMouseMove = schd(this.onMouseMove);
    this.schdOnTouchMove = schd(this.onTouchMove);
    this.schdOnEnd = schd(this.onEnd);
  }

  componentDidMount() {
    this.calculateOffsets();
    document.addEventListener('touchstart', this.onMouseOrTouchStart as any, {
      passive: false,
      capture: false,
    });
    document.addEventListener('mousedown', this.onMouseOrTouchStart as any);
  }

  componentDidUpdate(_prevProps: any, prevState: { scrollingSpeed: number }) {
    if (prevState.scrollingSpeed !== this.state.scrollingSpeed && prevState.scrollingSpeed === 0) {
      this.doScrolling();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.onMouseOrTouchStart as any);
    document.removeEventListener('mousedown', this.onMouseOrTouchStart as any);
    document.removeEventListener('mousemove', this.schdOnMouseMove);
    document.removeEventListener('touchmove', this.schdOnTouchMove);
    document.removeEventListener('mouseup', this.schdOnEnd);
    document.removeEventListener('touchend', this.schdOnEnd);
    document.removeEventListener('touchcancel', this.schdOnEnd);
    if (this.dropTimeout) {
      window.clearTimeout(this.dropTimeout);
      this.dropTimeout = undefined;
    }
    this.schdOnMouseMove.cancel();
    this.schdOnTouchMove.cancel();
    this.schdOnEnd.cancel();
  }

  /**
   * Keeps the keyboard-reordered row (CSS transform) and the needle slot in view.
   * Uses bounding rects (transform-aware); only adjusts listRef scroll, not ancestors.
   */
  ensureKeyboardReorderVisible = (pickedIndex: number, needleIndex: number) => {
    const listEl = this.listRef.current;
    if (!listEl) return;
    const children = this.getChildren();
    const picked = children[pickedIndex] as HTMLElement | undefined;
    if (!picked) return;

    const apply = () => {
      const pad = KEYBOARD_REORDER_SCROLL_PADDING;
      for (let pass = 0; pass < 2; pass++) {
        const listRect = listEl.getBoundingClientRect();
        const pr = picked.getBoundingClientRect();
        let top = pr.top;
        let bottom = pr.bottom;
        const slot = children[needleIndex] as HTMLElement | undefined;
        if (slot && needleIndex !== pickedIndex) {
          const sr = slot.getBoundingClientRect();
          top = Math.min(top, sr.top);
          bottom = Math.max(bottom, sr.bottom);
        }

        let delta = 0;
        if (top < listRect.top + pad) {
          delta = top - listRect.top - pad;
        } else if (bottom > listRect.bottom - pad) {
          delta = bottom - listRect.bottom + pad;
        }
        if (delta === 0) break;
        listEl.scrollTop += delta;
      }
    };

    apply();
    window.requestAnimationFrame(apply);
  };

  doScrolling = () => {
    const { scrollingSpeed, scrollWindow } = this.state;
    const listEl = this.listRef.current!;
    window.requestAnimationFrame(() => {
      if (scrollWindow) {
        window.scrollTo(window.pageXOffset, window.pageYOffset + scrollingSpeed * 1.5);
      } else {
        listEl.scrollTop += scrollingSpeed;
      }
      if (scrollingSpeed !== 0) {
        this.doScrolling();
      }
    });
  };

  getChildren = () => {
    if (this.listRef && this.listRef.current) {
      return Array.from(this.listRef.current.children);
    }

    return [];
  };

  static defaultProps = {
    transitionDuration: 240,
    lockVertically: false,
    removableByMove: false,
  };

  calculateOffsets = () => {
    this.topOffsets = this.getChildren().map((item) => item.getBoundingClientRect().top);
    this.itemTranslateOffsets = this.getChildren().map((item) => getTranslateOffset(item));
  };

  getTargetIndex = (e: TEvent) => {
    return this.getChildren().findIndex((child) => child === e.target || child.contains(e.target as Node));
  };

  onMouseOrTouchStart = (e: MouseEvent & TouchEvent) => {
    if (this.dropTimeout && this.state.itemDragged > -1) {
      window.clearTimeout(this.dropTimeout);
      this.dropTimeout = undefined;
      this.finishDrop();
    }
    const isTouch = isTouchEvent(e);
    if (!isTouch && e.button !== 0) return;

    if (this.state.isClickAndFollow) {
      e.preventDefault();
      // Second click in Click-and-Follow mode commits the drop via onEnd
      const clickedIndex = this.getTargetIndex(e as any);
      if (clickedIndex > -1) {
        this.afterIndex = clickedIndex;
      }
      return;
    }

    const targetNode = (isTouch ? (e as TouchEvent).touches[0]?.target : (e as MouseEvent).target) as Node | null;
    const listEl = this.listRef.current;

    if (this.state.selectedItem > -1) {
      if (!listEl || !targetNode) {
        return;
      }
      if (!listEl.contains(targetNode)) {
        this.cancelKeyboardPick();
        return;
      }
      const pickedIndex = this.getTargetIndex(e as any);
      const rowInvalid =
        pickedIndex < 0 || !!(this.props.values[pickedIndex] && this.props.values[pickedIndex].props.disabled);
      if (rowInvalid) {
        this.cancelKeyboardPick();
        return;
      }
      e.cancelable && e.preventDefault();
      this.needle = pickedIndex;
      this.commitKeyboardReorder();
      return;
    }

    const index = this.getTargetIndex(e as any);

    const listItemTouched = this.getChildren()[index] as HTMLElement;
    const isValidDragHandle = (e.target as Element)?.classList.contains(styles['Listbox-item--drag-icon']);
    if (!isValidDragHandle) return;
    e.preventDefault();

    this.mouseDownX = isTouch ? e.touches[0].clientX : e.clientX;
    this.mouseDownY = isTouch ? e.touches[0].clientY : e.clientY;
    this.hasDragStarted = false;

    if (isTouch) {
      const opts = { passive: false };
      listItemTouched.style.touchAction = 'none';
      document.addEventListener('touchend', this.schdOnEnd, opts);
      document.addEventListener('touchmove', this.schdOnTouchMove, opts);
      document.addEventListener('touchcancel', this.schdOnEnd, opts);
    } else {
      document.addEventListener('mousemove', this.schdOnMouseMove);
      document.addEventListener('mouseup', this.schdOnEnd);

      const listItemDragged = this.getChildren()[this.state.itemDragged] as HTMLElement;
      if (listItemDragged && listItemDragged.style) {
        listItemDragged.style.touchAction = '';
      }
    }
    this.onStart(
      listItemTouched,
      isTouch ? e.touches[0].clientX : e.clientX,
      isTouch ? e.touches[0].clientY : e.clientY,
      index
    );
  };

  getYOffset = () => {
    const listScroll = this.listRef.current ? this.listRef.current.scrollTop : 0;
    return window.pageYOffset + listScroll;
  };

  onStart = (target: HTMLElement, clientX: number, clientY: number, index: number) => {
    if (this.state.selectedItem > -1) {
      this.setState({ selectedItem: -1 });
      this.needle = -1;
    }
    const targetRect = target.getBoundingClientRect() as DOMRect;
    const targetStyles = window.getComputedStyle(target);
    this.calculateOffsets();
    this.initialYOffset = this.getYOffset();
    this.lastYOffset = window.pageYOffset;
    this.lastListYOffset = this.listRef.current!.scrollTop;
    this.setState({
      itemDragged: index,
      targetX: targetRect.left - parseInt(targetStyles['margin-left' as any], 10),
      targetY: targetRect.top - parseInt(targetStyles['margin-top' as any], 10),
      targetHeight: targetRect.height,
      targetWidth: targetRect.width,
      initialX: clientX,
      initialY: clientY,
    });
  };

  onMouseMove = (e: MouseEvent) => {
    e.cancelable && e.preventDefault();
    if (!this.hasDragStarted) {
      const dx = Math.abs(e.clientX - this.mouseDownX);
      const dy = Math.abs(e.clientY - this.mouseDownY);
      if (dy + dx * 0.5 >= 5) {
        this.hasDragStarted = true;
      } else {
        return;
      }
    }
    this.onMove(e.clientX, e.clientY);
  };

  onTouchMove = (e: TouchEvent) => {
    e.cancelable && e.preventDefault();
    if (!this.hasDragStarted) {
      const dx = Math.abs(e.touches[0].clientX - this.mouseDownX);
      const dy = Math.abs(e.touches[0].clientY - this.mouseDownY);
      if (dy + dx * 0.5 >= 5) {
        this.hasDragStarted = true;
      } else {
        return;
      }
    }
    this.onMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  onWheel = (e: React.WheelEvent) => {
    if (this.state.itemDragged < 0) return;
    this.lastScroll = this.listRef.current!.scrollTop += e.deltaY;
    this.moveOtherItems();
  };

  onMove = (clientX: number, clientY: number) => {
    if (this.state.itemDragged === -1) return null;
    transformItem(
      this.ghostRef.current!,
      clientY - this.state.initialY,
      this.props.lockVertically ? 0 : clientX - this.state.initialX
    );
    this.autoScrolling(clientY);
    this.moveOtherItems();

    return;
  };

  moveOtherItems = () => {
    const targetRect = this.ghostRef.current!.getBoundingClientRect();
    const itemVerticalCenter = targetRect.top + targetRect.height / 2;
    const offset = getTranslateOffset(this.getChildren()[this.state.itemDragged]);
    const currentYOffset = this.getYOffset();
    // adjust offsets if scrolling happens during the item movement
    if (this.initialYOffset !== currentYOffset) {
      this.topOffsets = this.topOffsets.map((offset) => offset - (currentYOffset - this.initialYOffset));
      this.initialYOffset = currentYOffset;
    }
    if (this.isDraggedItemOutOfBounds() && this.props.removableByMove) {
      this.afterIndex = this.topOffsets.length + 1;
    } else {
      this.afterIndex = binarySearch(this.topOffsets, itemVerticalCenter);
    }
    this.animateItems(this.afterIndex === -1 ? 0 : this.afterIndex, this.state.itemDragged, offset);
  };

  autoScrolling = (clientY: number) => {
    const { top, bottom, height } = this.listRef.current!.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // auto scrolling for the window (down)
    if (bottom > viewportHeight && viewportHeight - clientY < AUTOSCROLL_ACTIVE_OFFSET) {
      this.setState({
        scrollingSpeed: Math.round((AUTOSCROLL_ACTIVE_OFFSET - (viewportHeight - clientY)) / AUTOSCROLL_SPEED_RATIO),
        scrollWindow: true,
      });
      // auto scrolling for the window (up)
    } else if (top < 0 && clientY < AUTOSCROLL_ACTIVE_OFFSET) {
      this.setState({
        scrollingSpeed: Math.round((AUTOSCROLL_ACTIVE_OFFSET - clientY) / -AUTOSCROLL_SPEED_RATIO),
        scrollWindow: true,
      });
    } else {
      if (this.state.scrollWindow && this.state.scrollingSpeed !== 0) {
        this.setState({ scrollingSpeed: 0, scrollWindow: false });
      }
      // auto scrolling for containers with overflow
      if (height + 20 < this.listRef.current!.scrollHeight) {
        let scrollingSpeed = 0;
        if (clientY - top < AUTOSCROLL_ACTIVE_OFFSET) {
          scrollingSpeed = Math.round((AUTOSCROLL_ACTIVE_OFFSET - (clientY - top)) / -AUTOSCROLL_SPEED_RATIO);
        } else if (bottom - clientY < AUTOSCROLL_ACTIVE_OFFSET) {
          scrollingSpeed = Math.round((AUTOSCROLL_ACTIVE_OFFSET - (bottom - clientY)) / AUTOSCROLL_SPEED_RATIO);
        }
        if (this.state.scrollingSpeed !== scrollingSpeed) {
          this.setState({ scrollingSpeed });
        }
      }
    }
  };

  animateItems = (needle: number, movedItem: number, offset: number, animateMovedItem = false) => {
    this.getChildren().forEach((item, i) => {
      setItemTransition(item, this.props.transitionDuration);
      if (movedItem === i && animateMovedItem) {
        if (movedItem === needle) {
          return transformItem(item, null);
        }
        transformItem(
          item,
          movedItem < needle
            ? this.itemTranslateOffsets.slice(movedItem + 1, needle + 1).reduce((a, b) => a + b, 0)
            : this.itemTranslateOffsets.slice(needle, movedItem).reduce((a, b) => a + b, 0) * -1
        );
      } else if (movedItem < needle && i > movedItem && i <= needle) {
        transformItem(item, -offset);
      } else if (i < movedItem && movedItem > needle && i >= needle) {
        transformItem(item, offset);
      } else {
        transformItem(item, null);
      }
    });
  };

  isDraggedItemOutOfBounds = () => {
    const initialRect = this.getChildren()[this.state.itemDragged].getBoundingClientRect();
    const targetRect = this.ghostRef.current!.getBoundingClientRect();
    if (Math.abs(initialRect.left - targetRect.left) > targetRect.width) {
      if (this.state.itemDraggedOutOfBounds === -1) {
        this.setState({ itemDraggedOutOfBounds: this.state.itemDragged });
      }
      return true;
    }
    if (this.state.itemDraggedOutOfBounds > -1) {
      this.setState({ itemDraggedOutOfBounds: -1 });
    }
    return false;
  };

  onEnd = (e: TouchEvent & MouseEvent) => {
    e.cancelable && e.preventDefault();

    if (!this.hasDragStarted) {
      if (!this.state.isClickAndFollow) {
        // First click -> start Click-and-Follow
        this.setState({
          isClickAndFollow: true,
          ariaMessage: 'Item grabbed. Move focus to choose a destination, then click or press Space to drop.',
        });
        return; // Keep listeners alive
      } else {
        // Second click -> end Click-and-Follow
        this.setState({ isClickAndFollow: false });
      }
    }

    document.removeEventListener('mousemove', this.schdOnMouseMove);
    document.removeEventListener('touchmove', this.schdOnTouchMove);
    document.removeEventListener('mouseup', this.schdOnEnd);
    document.removeEventListener('touchend', this.schdOnEnd);
    document.removeEventListener('touchcancel', this.schdOnEnd);

    const removeItem = this.props.removableByMove && this.isDraggedItemOutOfBounds();
    if (!removeItem && this.props.transitionDuration > 0 && this.afterIndex !== -2) {
      // animate drop
      schd(() => {
        setItemTransition(this.ghostRef.current!, this.props.transitionDuration, 'cubic-bezier(0.2, 0, 0.38, 0.9)');
        if (this.afterIndex < 1 && this.state.itemDragged === 0) {
          transformItem(this.ghostRef.current!, 0, 0);
        } else {
          transformItem(
            this.ghostRef.current!,
            // compensate window scroll
            -(window.pageYOffset - this.lastYOffset) +
              // compensate container scroll
              -(this.listRef.current!.scrollTop - this.lastListYOffset) +
              (this.state.itemDragged < this.afterIndex
                ? this.itemTranslateOffsets
                    .slice(this.state.itemDragged + 1, this.afterIndex + 1)
                    .reduce((a, b) => a + b, 0)
                : this.itemTranslateOffsets
                    .slice(this.afterIndex < 0 ? 0 : this.afterIndex, this.state.itemDragged)
                    .reduce((a, b) => a + b, 0) * -1),
            0
          );
        }
      })();
    }
    this.dropTimeout = window.setTimeout(
      this.finishDrop,
      removeItem || this.afterIndex === -2 ? 0 : this.props.transitionDuration
    );
  };

  finishDrop = () => {
    this.dropTimeout = undefined;
    const removeItem = this.props.removableByMove && this.isDraggedItemOutOfBounds();
    if (removeItem || (this.afterIndex > -2 && this.state.itemDragged !== this.afterIndex)) {
      this.props.onChange({
        oldIndex: this.state.itemDragged,
        newIndex: removeItem ? -1 : Math.max(this.afterIndex, 0),
        targetRect: this.ghostRef.current!.getBoundingClientRect(),
      });
    }
    this.getChildren().forEach((item) => {
      setItemTransition(item, 0);
      transformItem(item, null);
      (item as HTMLElement).style.touchAction = '';
    });
    this.hasDragStarted = false;
    this.setState({
      itemDragged: -1,
      scrollingSpeed: 0,
      isClickAndFollow: false,
      ariaMessage: `Item dropped at position ${Math.max(this.afterIndex, 0) + 1}.`,
    });
    this.afterIndex = -2;
    // sometimes the scroll gets messed up after the drop, fix:
    if (this.lastScroll > 0) {
      this.listRef.current!.scrollTop = this.lastScroll;
      this.lastScroll = 0;
    }
  };

  /** Cancel keyboard pick without applying reorder (Escape, pointer outside list, or non-row hit inside list). */
  cancelKeyboardPick = () => {
    this.getChildren().forEach((item) => {
      setItemTransition(item, 0);
      transformItem(item, null);
    });
    this.setState({
      selectedItem: -1,
      ariaMessage: 'Reorder cancelled. Item returned to its original position.',
    });
    this.needle = -1;
  };

  /** Commit keyboard reorder (Space / Enter / Tab): apply move if needle differs, then clear pick state. */
  commitKeyboardReorder = () => {
    const selectedItem = this.state.selectedItem;
    if (selectedItem < 0) return;

    if (selectedItem !== this.needle) {
      this.getChildren().forEach((item) => {
        setItemTransition(item, 0);
        transformItem(item, null);
      });
      this.props.onChange({
        oldIndex: selectedItem,
        newIndex: this.needle,
        targetRect: this.getChildren()[this.needle].getBoundingClientRect(),
      });

      const rowEl = this.getChildren()[this.needle] as HTMLElement;
      rowEl.focus();
    }
    this.setState({
      selectedItem: -1,
    });
    this.needle = -1;
  };

  /** After Tab commits keyboard reorder, move focus like native Tab (document order). */
  advanceTabFocusFromActiveElement = (shiftKey: boolean) => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement) || !document.body) return;

    const nodes = Array.from(document.body.querySelectorAll<HTMLElement>(TAB_FOCUSABLE_SELECTOR)).filter((el) => {
      if (el.getAttribute('aria-hidden') === 'true') return false;
      const style = window.getComputedStyle(el);
      if (style.visibility === 'hidden' || style.display === 'none') return false;
      return !(el as HTMLInputElement).disabled;
    });

    const idx = nodes.indexOf(active);
    if (idx === -1) return;
    const next = shiftKey ? nodes[idx - 1] : nodes[idx + 1];
    next?.focus();
  };

  onKeyDown = (e: React.KeyboardEvent) => {
    const selectedItem = this.state.selectedItem;
    const index = this.getTargetIndex(e);

    if (e.key === 'Escape' && this.state.itemDragged > -1) {
      this.getChildren().forEach((item) => {
        setItemTransition(item, 0);
        transformItem(item, null);
        (item as HTMLElement).style.touchAction = '';
      });
      this.hasDragStarted = false;
      this.setState({
        itemDragged: -1,
        scrollingSpeed: 0,
        isClickAndFollow: false,
        ariaMessage: 'Reorder cancelled. Item returned to its original position.',
      });
      this.afterIndex = -2;
      if (this.dropTimeout) {
        window.clearTimeout(this.dropTimeout);
        this.dropTimeout = undefined;
      }
      document.removeEventListener('mousemove', this.schdOnMouseMove);
      document.removeEventListener('touchmove', this.schdOnTouchMove);
      document.removeEventListener('mouseup', this.schdOnEnd);
      document.removeEventListener('touchend', this.schdOnEnd);
      document.removeEventListener('touchcancel', this.schdOnEnd);
      return;
    }

    if (index === -1 || (this.props.values[index] && this.props.values[index].props.disabled)) {
      return;
    }

    if (e.key === ' ') {
      e.preventDefault();
      if (selectedItem === index) {
        this.commitKeyboardReorder();
      } else {
        this.setState({
          selectedItem: index,
        });
        this.needle = index;
        this.calculateOffsets();
      }
    }

    if (e.key === 'Enter' && selectedItem > -1 && selectedItem === index) {
      e.preventDefault();
      this.commitKeyboardReorder();
    }

    if (e.key === 'Tab' && selectedItem > -1 && selectedItem === index) {
      e.preventDefault();
      const shiftKey = e.shiftKey;
      this.commitKeyboardReorder();
      queueMicrotask(() => this.advanceTabFocusFromActiveElement(shiftKey));
    }
    if ((e.key === 'ArrowDown' || e.key === 'j') && selectedItem > -1 && this.needle < this.props.values.length - 1) {
      e.preventDefault();
      const offset = getTranslateOffset(this.getChildren()[selectedItem]);
      this.needle++;
      this.animateItems(this.needle, selectedItem, offset, true);
      this.ensureKeyboardReorderVisible(selectedItem, this.needle);
    } else if ((e.key === 'ArrowDown' || e.key === 'j') && selectedItem === -1) {
      e.preventDefault();
      let nextIndex = this.state.focusedIndex + 1;
      while (
        nextIndex < this.props.values.length &&
        this.props.values[nextIndex] &&
        this.props.values[nextIndex].props.disabled
      ) {
        nextIndex++;
      }
      if (nextIndex < this.props.values.length) {
        this.setState({ focusedIndex: nextIndex });
        (this.getChildren()[nextIndex] as HTMLElement).focus();
      }
    }
    if ((e.key === 'ArrowUp' || e.key === 'k') && selectedItem > -1 && this.needle > 0) {
      e.preventDefault();
      const offset = getTranslateOffset(this.getChildren()[selectedItem]);
      this.needle--;
      this.animateItems(this.needle, selectedItem, offset, true);
      this.ensureKeyboardReorderVisible(selectedItem, this.needle);
    } else if ((e.key === 'ArrowUp' || e.key === 'k') && selectedItem === -1) {
      e.preventDefault();
      let nextIndex = this.state.focusedIndex - 1;
      while (nextIndex >= 0 && this.props.values[nextIndex] && this.props.values[nextIndex].props.disabled) {
        nextIndex--;
      }
      if (nextIndex >= 0) {
        this.setState({ focusedIndex: nextIndex });
        (this.getChildren()[nextIndex] as HTMLElement).focus();
      }
    }
    if (e.key === 'Escape' && selectedItem > -1) {
      e.preventDefault();
      this.cancelKeyboardPick();
    }
  };

  render() {
    const firstEnabledIndex = this.props.values.findIndex((value: any) => !(value && value.props.disabled));
    const isOutOfBounds = this.state.focusedIndex < 0 || this.state.focusedIndex >= this.props.values.length;
    const currentItemIsDisabled =
      !isOutOfBounds &&
      this.props.values[this.state.focusedIndex] &&
      this.props.values[this.state.focusedIndex].props.disabled;
    const effectiveFocusedIndex = isOutOfBounds || currentItemIsDisabled ? firstEnabledIndex : this.state.focusedIndex;

    const baseStyle = {
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      boxSizing: 'border-box',
      position: 'relative',
    } as React.CSSProperties;
    const ghostStyle = {
      ...baseStyle,
      top: this.state.targetY,
      left: this.state.targetX,
      width: this.state.targetWidth,
      height: this.state.targetHeight,
      backgroundColor: 'var(--text-white)',
      listStyleType: 'none',
      margin: 0,
      position: 'fixed',
      boxShadow: 'var(--shadow-l)',
    } as React.CSSProperties;
    return (
      <React.Fragment>
        {this.props.renderList({
          children: this.props.values.map((value: any, index: number) => {
            const isHidden = index === this.state.itemDragged;
            const isSelected = index === this.state.selectedItem;

            const isDisabled = this.props.values[index] && this.props.values[index].props.disabled;
            const props: IItemProps = {
              key: index,
              tabIndex: isDisabled ? -1 : index === effectiveFocusedIndex ? 0 : -1,
              onFocus: () => this.setState({ focusedIndex: index }),
              onKeyDown: this.onKeyDown,
              'aria-grabbed': isSelected,
              style: {
                ...baseStyle,
                visibility: isHidden ? 'hidden' : undefined,
                zIndex: isSelected ? 5000 : 0,
              } as React.CSSProperties,
            };

            return this.props.renderItem({
              value,
              props,
              index,
              isDragged: false,
              isSelected,
              isOutOfBounds: false,
            });
          }),
          isDragged: this.state.itemDragged > -1,
          props: {
            ref: this.listRef,
          },
        })}
        {this.state.itemDragged > -1 &&
          ReactDOM.createPortal(
            this.props.renderItem({
              value: this.props.values[this.state.itemDragged],
              props: {
                ref: this.ghostRef,
                style: ghostStyle,
                onWheel: this.onWheel,
              },
              index: this.state.itemDragged,
              isDragged: !this.state.isClickAndFollow,
              isSelected: this.state.isClickAndFollow,
              isOutOfBounds: this.state.itemDraggedOutOfBounds > -1,
            }),
            document.body
          )}
        <div
          aria-live="assertive"
          aria-atomic="true"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {this.state.ariaMessage}
        </div>
      </React.Fragment>
    );
  }
}

export default Draggable;
