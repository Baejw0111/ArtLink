// import React from "react";
import { Link } from "react-router-dom";
import BigButton from "../../commponents/Base/BigButton";
import MainLogo from "../../commponents/Base/MainLogo";

import LinkStyle from "./Link.module.css";

function HomeUser() {
  return (
    <>
      <MainLogo />
      <div className="BigBtnBox2">
        {/* 메뉴 버튼 */}
        <Link to="/art-memory" className={LinkStyle.LinkNone}>
          <BigButton tabName={"Menu 1"} />
        </Link>
        <Link to="/mypage" className={LinkStyle.LinkNone}>
          <BigButton tabName={"My Page"} />
        </Link>
      </div>
    </>
  );
}
export default HomeUser;
