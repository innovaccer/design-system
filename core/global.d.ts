declare module '@' {
  const x: any;
  export = x;
}

declare module '*.json';
declare module 'react-dynamic-virtual-scroll';
declare module '*svg';

declare const __STORYBOOK_STORY_STORE__: any;

declare class ResizeObserver {
  constructor(callback: ResizeObserverCallback);
  disconnect(): void;
  observe(target: Element, options?: ResizeObserverOptions): void;
  unobserve(target: Element): void;
}

type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

interface ResizeObserverOptions {
  box?: 'content-box' | 'border-box';
}
