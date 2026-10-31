export interface AccessibilityPropDef {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
}
export type HtmlElementType = 'button' | 'checkbox' | 'radio' | 'textbox' | 'link' | 'range' | 'listbox' | 'generic' | 'custom';
export interface A11yPropTableConfig {
    htmlElement: HtmlElementType;
    customProps?: AccessibilityPropDef[];
    nestedComponents?: {
        name: string;
        config: A11yPropTableConfig;
    }[];
}
export declare const componentA11yRegistry: Record<string, A11yPropTableConfig>;
export declare function resolveA11yConfig(storyConfig?: A11yPropTableConfig, componentDisplayName?: string): A11yPropTableConfig | undefined;
export declare function getAccessibilityProps(config: A11yPropTableConfig): AccessibilityPropDef[];
