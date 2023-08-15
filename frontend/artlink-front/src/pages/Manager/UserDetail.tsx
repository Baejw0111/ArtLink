import { useState } from "react";
import BackBtn from "../../commponents/Base/BackBtn";
import MarginTopInput from "../../commponents/EditCss/MaginTopInput";
import UDApi from "./UDApi";
import { OneUserEach } from "../../api/ManagerApi";
import Styles from "../../commponents/Mypage/Profile.module.css";
import Styles2 from "../../pages/Common/Mypage.module.css";
import EmptyProfile from "../../assets/EmptyProfile2.svg";

// 화면에 보일 라벨링 이름
const labelMapping: Record<string, string> = {
  id: "PK",
  username: "아이디",
  nickname: "닉네임",
  phoneNumber: "핸드폰 번호",
};

function UserDetail() {
  const [image, setImage] = useState<string | null>(null);
  const [userData, setUserData] = useState<OneUserEach | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 유저정보 수신 boolean

  // 자식 컴포넌트에서 받아온 데이터를 상태에 저장하는 콜백 함수
  const handleUserInfoData = (data: OneUserEach) => {
    setUserData(data);
    setLoading(false); // Data has been fetched, set loading to false
    setImage(data.userImageUrl);
  };

  return (
    <>
      {/* 뒤로가기버튼 */}
      <div className={Styles.BackBtn}>
        <BackBtn />
      </div>
      {/* 프로필 컨테이너 */}
      <div className={Styles2.Mypagecontainer}>
        {loading ? ( // Show loading message if data is being fetched
          <>
            <h3>Loading...</h3>
            <p>The server is under maintenance. Please try again later.</p>
          </>
        ) : (
          <div className={Styles.MypageinnerBox}>
            {/* 왼쪽 박스 (프로필 이미지) */}
            <div className={Styles.infoOuterBoxLeft}>
              <div className={Styles.infoInnerBoxLeft}>
                <div style={{ width: "200px" }}>
                  {image ? (
                    <img
                      src={image}
                      alt="Profile"
                      style={{ width: "200px" }}
                      className={Styles.profileImg}
                    />
                  ) : (
                    <img
                      src={EmptyProfile}
                      style={{ width: "100px" }}
                      alt="빈 프로필"
                    />
                  )}
                </div>
              </div>
            </div>
            {/* 오른쪽 박스 (프로필 데이터) */}
            {userData && (
              <div className={Styles.infoOuterBoxRight}>
                <div
                  className={Styles.infoInnerBoxRight}
                  style={{ fontSize: "12px" }}
                >
                  <p
                    style={{
                      fontSize: "21px",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    유저 정보
                  </p>
                  {Object.entries(userData).map(
                    ([key, value]) =>
                      key !== "userImageUrl" && (
                        <p key={key}>
                          {labelMapping[key]}:{" "}
                          <input
                            type="text"
                            name={key}
                            value={value as string}
                            disabled={true}
                            className={Styles.profileInput}
                          />
                        </p>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <MarginTopInput value={40} />
        {/* 데이터조회 및 변경 api : 리턴값없음 */}
        <UDApi onUserDataChange={handleUserInfoData} />
      </div>
    </>
  );
}

export default UserDetail;
