import { Validators } from "./types";
export declare const isValid: (validators: Validators, ...value: any[]) => boolean;
export declare const date: (val: string, format: string) => boolean;
export declare const time: (val: string, format: string) => boolean;
export declare const isNaturalNumber: (val: number | string) => boolean;
