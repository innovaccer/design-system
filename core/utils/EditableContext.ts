import * as React from 'react';

type EditableContext = {
  editable: boolean;
};

const editableContext = React.createContext<EditableContext>({
  editable: false,
});

export const EditableProvider = editableContext.Provider;
export default editableContext;
