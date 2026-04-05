import React from 'react';
interface RenderHelpTextProps {
    helpText: string;
    error?: boolean;
}
export declare const RenderHelpText: React.FC<RenderHelpTextProps>;
interface RenderCounterProps {
    inputText: string;
    max: number;
}
export declare const RenderCounter: React.FC<RenderCounterProps>;
export {};
