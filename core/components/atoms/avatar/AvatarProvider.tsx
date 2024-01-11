import * as React from 'react';

type ContextProps = {
  size?: string;
  appearance?: string;
  firstName?: string;
  lastName?: string;
};

export const AvatarContext = React.createContext<ContextProps>({
  size: 'regular',
  appearance: 'secondary',
  firstName: '',
  lastName: '',
});

export default AvatarContext.Provider;
