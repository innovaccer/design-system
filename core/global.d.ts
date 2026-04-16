declare module '@' {
  const x: any;
  export = x;
}

declare module '*.json';
declare module '*svg';

declare const __STORYBOOK_STORY_STORE__: any;

declare module '*.module.css';

interface Window {
  ResizeObserver?: new (callback: (entries: ResizeObserverEntry[]) => void) => {
    observe(target: Element): void;
    disconnect(): void;
    unobserve(target: Element): void;
  };
}

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}
