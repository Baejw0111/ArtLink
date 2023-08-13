// import React from 'react';
import LoginForm from "../../commponents/Entrance/Form/LoginForm";
import MainLogo from "../../commponents/Base/MainLogo";
import MarginTop100 from "../../commponents/EditCss/MarginTop100";
import MarginTopInput from "../../commponents/EditCss/MaginTopInput";

function LoginGallery() {
  return (
    <>
      <MarginTop100 />
      <MainLogo />
      <MarginTopInput value={86}/>
      <LoginForm />
    </>
  );
}
export default LoginGallery;
