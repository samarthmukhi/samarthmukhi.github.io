import { createContext, useContext } from "react";

// Shares whether the entrance reveal has finished, so the hero can hold its
// animation until the curtain lifts.
export const IntroContext = createContext({ done: true });
export const useIntro = () => useContext(IntroContext);
