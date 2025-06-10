import { createContext } from 'react';

type ContextProps = {
  size?: string;
  appearance?: string;
  firstName?: string;
  lastName?: string;
  darkAppearance: string[];
};

export const AvatarContext = createContext<ContextProps>({
  size: 'regular',
  appearance: 'secondary',
  firstName: '',
  lastName: '',
  darkAppearance: [],
});

export default AvatarContext.Provider;
