import { useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import { useInfo } from "../hooks";
import ZingTouch from "zingtouch";
import { useEffect } from "react";

function TouchPad() {
  const info = useInfo();
  const location = useLocation();
  const history = useHistory();
  const navigate = useNavigate();

  const rotate = () => {
    var target = document.getElementById("rotate");
    var region = new ZingTouch.Region(target);
    var innerCircle = document.getElementById("innerCircle");
    info.setInitialValue(0);

    region.bind(target, "rotate", function (e) {
      var rotatedByValue = Math.floor(e.detail.distanceFromOrigin);
      info.setRotatedByValue(rotatedByValue);
    });
  };
  const toggleMenu = () => {
    if (location.pathname.length > 1) {
      info.handleMenu(true);
      if (location.pathname.includes("music/")) {
        history.push("/music");
        return;
      }
      if (location.pathname.includes("/music")) {
        info.handleHighlightedItem(1);
      }
      history.push("/");
      return;
    }
    info.handleMenu(!info.menuDisplayMode);
  };

  info.handleListItem(info.menuListItem);
  if (location.pathname.includes("music")) {
    info.handleListItem(info.musicListItem);
  }

  const navigateToPage = () => {
    let value = info.listItem.at(info.highlightedItem);
    let lowerValue = value.toLowerCase();
    console.log(lowerValue);
    info.handleMenu(false);
    if (!location.pathname.endsWith("/")) {
      lowerValue = "/" + lowerValue;
    }
    // to remove button to adding page name to pathname again and again
    if (location.pathname.includes(lowerValue)) {
      return;
    }
    navigate(location.pathname + lowerValue);
  };

  return (
    <div className="touchPad">
      <div
        className="outerCircle"
        id="rotate"
        draggable="false"
        onClick={rotate}
      >
        <div className="menu">
          <button onClick={toggleMenu}>MENU</button>
        </div>
        <div className="middle">
          <div
            className="verticalAlign left"
            onClick={info.decreaseHighlighted}
          >
            left
          </div>
          <div
            className="innerCircle"
            id="innerCircle"
            onClick={navigateToPage}
          ></div>
          <div
            className="verticalAlign right"
            onClick={info.increaseHighlighted}
          >
            right
          </div>
        </div>
        <div className="play">play</div>
      </div>
    </div>
  );
}

export default TouchPad;
