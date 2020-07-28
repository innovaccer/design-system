declare const getPosition: (position: string, trigger: HTMLElement, target: HTMLElement, offset: {
    vertical: number;
    horizontal: number;
} | undefined, appendToBody: boolean) => {
    left: number;
    top: number;
};
declare const isInViewport: (targetElement: HTMLElement, position: {
    top: number;
    left: number;
}, appendToBody?: boolean | undefined, triggerElement?: HTMLElement | undefined) => boolean;
export { getPosition, isInViewport };
