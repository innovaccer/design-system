import * as React from 'react';
declare type ContextProps = {
    size?: string;
    appearance?: string;
    firstName?: string;
    lastName?: string;
    darkAppearance: string[];
};
export declare const AvatarContext: React.Context<ContextProps>;
declare const _default: React.Provider<ContextProps>;
export default _default;
