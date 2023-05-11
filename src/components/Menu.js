import { Link } from "react-router-dom";
import { useInfo } from "../hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Settings, Games, Coverflow, Music } from "./";

function Menu() {
  const info = useInfo();

  // useEffect(() => {
  //   console.log(info);
  // }, []);

  return (
    <div className="main-container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            info.menuDisplayMode && (
              <div className="screenMenu">
                <div className="header">
                  <h3>iPod.js</h3>
                </div>
                <div className="menuList">
                  {info.menuListItem.map((item, index) => (
                    <div
                      className={
                        index == info.highlightedItem
                          ? "menuListItem highlightedItem"
                          : "menuListItem"
                      }
                      key={index}
                    >
                      <h5>{item}</h5>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        />
        <Route exact path="/coverflow" element={<Coverflow />} />
        <Route exact path="/music/*" element={<Music />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Menu;
