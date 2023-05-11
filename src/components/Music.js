import { Routes, Route, Link } from "react-router-dom";
import { useInfo } from "../hooks";
import { Albums, AllSongs, Artists } from "./";
function Music() {
  const info = useInfo();
  return (
    <div className="main-container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            info.musicListItem && (
              <div className="screenMenu">
                <div className="header">
                  <h3>iPod.js</h3>
                </div>
                <div className="menuList">
                  {info.musicListItem.map((item, index) => (
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
        <Route exact path="/allsongs" element={<AllSongs />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default Music;
