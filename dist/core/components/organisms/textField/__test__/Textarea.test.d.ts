import '@testing-library/jest-dom';
declare global {
    interface Window {
        ResizeObserver?: (new (callback: (entries: ResizeObserverEntry[]) => void) => {
            observe(target: Element): void;
            disconnect(): void;
            unobserve(target: Element): void;
        }) | undefined;
    }
}
