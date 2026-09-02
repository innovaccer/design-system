export declare function useSingleSelect(): {
    selectedCardIds: string[];
    selectedCardValues: object[];
    isCardSelected: (id: string) => boolean;
    updateCardSelection: (id: string, value?: object | undefined) => void;
};
