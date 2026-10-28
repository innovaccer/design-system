import * as React from 'react';
import { ErrorType } from "./Dropdown";
interface ErrorTemplateProps {
    dropdownStyle: React.CSSProperties;
    errorType: ErrorType;
    updateOptions: () => void;
}
export declare const ErrorTemplate: React.FC<ErrorTemplateProps>;
export {};
