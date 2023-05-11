import { useContext, useState, useEffect } from "react";
import { ScenarioContext } from "../utils";

export const useInfo = () => {
  return useContext(ScenarioContext);
};

export const useScenarioStore = () => {
  const [menuDisplayMode, setMenuDisplayMode] = useState(false);
  const [menuListItem, setMenuListItem] = useState([
    "Coverflow",
    "Music",
    "Games",
    "Settings",
  ]);
  const [musicListItem, setMusicListItem] = useState([
    "AllSongs",
    "Artists",
    "Albums",
  ]);
  const [highlightedItem, setHighlightedItem] = useState(0);
  const [listItem, setListItem] = useState([]);
  const [rotatedByValue, setRotatedByValue] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    if (rotatedByValue - initialValue > 15) {
      increaseHighlighted();
      setInitialValue(rotatedByValue);
    }

    if (rotatedByValue - initialValue < -15) {
      decreaseHighlighted();
      setInitialValue(rotatedByValue);
    }
  }, [rotatedByValue]);

  const handleListItem = (value) => {
    setListItem(value);
  };

  const handleMenu = (value) => {
    setMenuDisplayMode(value);
  };

  const handleHighlightedItem = (value) => {
    setHighlightedItem(value);
  };

  const increaseHighlighted = () => {
    let value = highlightedItem + 1;
    if (value >= listItem.length) {
      value = 0;
    }
    handleHighlightedItem(value);
  };

  const decreaseHighlighted = () => {
    let value = highlightedItem - 1;
    if (value < 0) {
      value = listItem.length - 1;
    }
    handleHighlightedItem(value);
  };

  return {
    menuDisplayMode,
    menuListItem,
    handleMenu,
    highlightedItem,
    handleHighlightedItem,
    musicListItem,
    handleListItem,
    listItem,
    increaseHighlighted,
    decreaseHighlighted,
    rotatedByValue,
    setRotatedByValue,
    setInitialValue,
  };
};
