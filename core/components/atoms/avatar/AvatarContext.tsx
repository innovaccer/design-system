import * as React from 'react';

type ContextProps = {
  size?: string;
  appearance?: string;
  firstName?: string;
  lastName?: string;
};

const context = React.createContext<ContextProps>({
  size: 'regular',
  appearance: 'secondary',
  firstName: '',
  lastName: '',
});

export const AvatarProvider = context.Provider;
export default context;
