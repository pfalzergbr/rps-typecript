import { render } from '@testing-library/react';

import { RulesProvider } from '../contexts/rulesContext';

export interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return <RulesProvider>{children}</RulesProvider>;
};

export const renderWithContext = (component: React.ReactElement, options?: any) =>
  render(component, { wrapper: ContextProvider, ...options });

export * from '@testing-library/react';
