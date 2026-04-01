import { createContext, useContext } from 'react';

export const LightModeContext = createContext(true);
export const useLightMode = () => useContext(LightModeContext);