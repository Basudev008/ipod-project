import { createContext } from "react";
import { useScenarioStore } from "../hooks";

const initialState = {
  menuDisplayMode: false,
  menuListItem: [],
  handleMenu: () => {},
  highlightedItem: 0,
  handleHighlightedItem: () => {},
  musicListItem: [],
  listItem: [],
  handleListItem: () => {},
  increaseHighlighted: () => {},
  decreaseHighlighted: () => {},
  setInitialValue: () => {},
  rotatedByValue: 0,
  setRotatedByValue: () => {},
};

export const ScenarioContext = createContext(initialState);

export const ScenarioProvider = ({ children }) => {
  const auth = useScenarioStore();

  return (
    <ScenarioContext.Provider value={auth}>{children}</ScenarioContext.Provider>
  );
};
