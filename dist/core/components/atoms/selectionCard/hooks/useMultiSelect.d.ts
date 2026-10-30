export declare function useMultiSelect(): {
    selectedCardIds: string[];
    selectedCardValues: Map<any, any>;
    isCardSelected: (id: string) => boolean;
    updateCardSelection: (id: string, value?: object) => void;
};
