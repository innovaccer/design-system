import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './Test.tsx';
import '@innovaccer/design-system/css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
