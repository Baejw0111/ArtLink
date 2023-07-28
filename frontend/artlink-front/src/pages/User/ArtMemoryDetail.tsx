import { useState } from "react";

import Styles from "./ArtMemoryDetail.module.css";
import MarginTopInput from "../../commponents/EditCss/MaginTopInput";
import AMDExhibition from "../../commponents/ViewExhibition/AMDExhibition";
import AMDMyrecord from "../../commponents/ViewExhibition/AMDMyrecord";

function ArtMemoryDetail() {
  const [isLeftVisible, setIsLeftVisible] = useState(true); // State variable for left div visibility
  const [isRightVisible, setIsRightVisible] = useState(false); // State variable for right div visibility

  const toggleVisibility = () => {
    setIsRightVisible(!isRightVisible);
  };

  const toggleVisibilityR = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  return (
    <>
      <MarginTopInput value={50} />
      <div className={Styles["artmemory-container"]}>
        {/* Left div with the button */}
        <div
          className={`${Styles.artdetailLeft} ${Styles.swingL}`}
          style={{
            width: isLeftVisible ? "100%" : "100%",
            display: isLeftVisible ? "block" : "none",
          }}
        >
          <div>
            {/* <button onClick={toggleVisibility}>좌버튼</button> */}
            <AMDExhibition onButtonClick={toggleVisibility} />
          </div>
        </div>

        {/* Right div */}
        <div
          className={`${Styles.artdetailRight} ${Styles.swingR}`}
          style={{
            display: isRightVisible ? "block" : "none",
            width: isLeftVisible ? "100%" : "100%",
          }}
        >
          <button onClick={toggleVisibilityR}>우버튼</button>
          <AMDMyrecord />
        </div>
      </div>
    </>
  );
}

export default ArtMemoryDetail;
