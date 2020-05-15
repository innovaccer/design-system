// @ts-nocheck
import classNames from "classnames";
import * as React from "react";

import {
  AbstractPureComponent2,
  IconName,
  IProps,
  Position,
  Utils as CoreUtils,
} from "@blueprintjs/core";

import { Icon, Popover } from '@/index';

import * as Classes from "@blueprintjs/table/src/common/classes";
import { LoadableContent } from "@blueprintjs/table/src/common/loadableContent";
import { CLASSNAME_EXCLUDED_FROM_TEXT_MEASUREMENT } from "@blueprintjs/table/src/common/utils";
import { HeaderCell, IHeaderCellProps } from "@blueprintjs/table/src/headers/headerCell";

export interface IColumnNameProps {
  /**
   * The name displayed in the header of the column.
   */
  name?: string;

  /**
   * A callback to override the default name rendering behavior. The default
   * behavior is to simply use the `ColumnHeaderCell`s name prop.
   *
   * This render callback can be used, for example, to provide a
   * `EditableName` component for editing column names.
   *
   * If you define this callback, we recommend you also set
   * `<Table enableColumnInteractionBar={true}>` to avoid issues with menus or selection.
   *
   * The callback will also receive the column index if an `index` was originally
   * provided via props.
   */
  nameRenderer?: (name: string, index?: number) => React.ReactElement<IProps>;
}

export interface IColumnHeaderCellProps extends IHeaderCellProps, IColumnNameProps {
  /**
   * Specifies if the column is reorderable.
   */
  enableColumnReordering?: boolean;

  /**
   * Specifies if the full column is part of a selection.
   */
  isColumnSelected?: boolean;

  /**
   * The icon name or element for the header's menu button.
   * @default "more_vert"
   */
  menuIcon?: string;
}

export interface IColumnHeaderCellState {
  isActive?: boolean;
}

export function HorizontalCellDivider(): JSX.Element {
  return <div className={Classes.TABLE_HORIZONTAL_CELL_DIVIDER} />;
}

export class ColumnHeaderCell extends AbstractPureComponent2<IColumnHeaderCellProps, IColumnHeaderCellState> {
  public static defaultProps: IColumnHeaderCellProps = {
    isActive: false,
    menuIcon: "more_vert",
  };

  /**
   * This method determines if a `MouseEvent` was triggered on a target that
   * should be used as the header click/drag target. This enables users of
   * this component to render fully interactive components in their header
   * cells without worry of selection or resize operations from capturing
   * their mouse events.
   */
  public static isHeaderMouseTarget(target: HTMLElement) {
    return (
      target.classList.contains(Classes.TABLE_HEADER) ||
      target.classList.contains(Classes.TABLE_COLUMN_NAME) ||
      target.classList.contains(Classes.TABLE_INTERACTION_BAR) ||
      target.classList.contains(Classes.TABLE_HEADER_CONTENT)
    );
  }

  public state = {
    isActive: false,
  };

  public render() {
    const {
      // from IColumnHeaderCellProps
      enableColumnReordering,
      isColumnSelected,
      menuIcon,

      // from IColumnNameProps
      name,
      nameRenderer,

      // from IHeaderProps
      ...spreadableProps
    } = this.props;

    const classes = classNames(spreadableProps.className, Classes.TABLE_COLUMN_HEADER_CELL, {
      [Classes.TABLE_HAS_INTERACTION_BAR]: this.context.enableColumnInteractionBar,
      [Classes.TABLE_HAS_REORDER_HANDLE]: this.props.reorderHandle != null,
    });

    return (
      <HeaderCell
        isReorderable={this.props.enableColumnReordering}
        isSelected={this.props.isColumnSelected}
        {...spreadableProps}
        className={classes}
      >
        {this.renderName()}
        {/* {this.maybeRenderContent()} */}
        {this.props.loading ? undefined : this.props.resizeHandle}
      </HeaderCell>
    );
  }

  private filterMenu() {
    const { _this } = this.props;

    return (
      <Popover
        trigger={<Icon name="filter_list" size={18} />}
        position="bottom-end"
        open={this.state.isActive}
        onToggle={(open: boolean, _type?: string) => {
          this.setState({ isActive: open });
        }}
      // className={Classes.TABLE_TH_MENU}
      // modifiers={{ preventOverflow: { boundariesElement: "window" } }}
      // onOpened={this.handlePopoverOpened}
      // onClosing={this.handlePopoverClosing}
      >
      </Popover>
    )
  }

  private renderName() {
    const { index, loading, name = '', nameRenderer, reorderHandle } = this.props;

    const dropdownMenu = this.maybeRenderDropdownMenu();
    const defaultName = <div className={Classes.TABLE_TRUNCATED_TEXT}>{name}</div>;

    const nameComponent = (
      <LoadableContent loading={loading || false} variableLength={true}>
        {nameRenderer == null ? defaultName : nameRenderer(name, index)}
      </LoadableContent>
    );

    if (this.context.enableColumnInteractionBar) {
      return (
        <div className={Classes.TABLE_COLUMN_NAME} title={name}>
          <div className={Classes.TABLE_INTERACTION_BAR}>
            {reorderHandle}
            {dropdownMenu}
          </div>
          <HorizontalCellDivider />
          <div className={Classes.TABLE_COLUMN_NAME_TEXT}>{nameComponent}</div>
        </div>
      );
    } else {
      return (
        <div className={Classes.TABLE_COLUMN_NAME} title={name}>
          {reorderHandle}
          {dropdownMenu}
          <div className={Classes.TABLE_COLUMN_NAME_TEXT}>{nameComponent}</div>
          {/* {this.filterMenu()} */}
        </div>
      );
    }
  }

  private maybeRenderContent() {
    if (this.props.children === null) {
      return undefined;
    }

    return <div className={Classes.TABLE_HEADER_CONTENT}>{this.props.children}</div>;
  }

  private maybeRenderDropdownMenu() {
    const {
      index,
      menuIcon,
      menuRenderer
    } = this.props;

    if (!CoreUtils.isFunction(menuRenderer)) {
      return undefined;
    }

    const classes = classNames(Classes.TABLE_TH_MENU_CONTAINER, CLASSNAME_EXCLUDED_FROM_TEXT_MEASUREMENT, 'Table-menuWrapper', {
      [Classes.TABLE_TH_MENU_OPEN]: this.state.isActive,
    });

    return (
      <div className={classes}>
        {/* <div className={Classes.TABLE_TH_MENU_CONTAINER_BACKGROUND} /> */}
        <Popover
          trigger={<Icon name={menuIcon} size={18} />}
          position="bottom-end"
          open={this.state.isActive}
          onToggle={(open: boolean, _type?: string) => {
            this.setState({ isActive: open });
          }}
        // className={Classes.TABLE_TH_MENU}
        // modifiers={{ preventOverflow: { boundariesElement: "window" } }}
        // onOpened={this.handlePopoverOpened}
        // onClosing={this.handlePopoverClosing}
        >
          {menuRenderer(index)}
        </Popover>
      </div>
    );
  }

  // private handlePopoverOpened = () => this.setState({ isActive: true });
  // private handlePopoverClosing = () => this.setState({ isActive: false });
}
