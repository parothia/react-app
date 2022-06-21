import React from "react";

interface OnboardLayoutProps {
  content: JSX.Element;
  isLogin?: Boolean;
}
const OnboardLayout = ({ content, isLogin }: OnboardLayoutProps) => {
  return (
    <div className="layout-wrapper flex min-h-screen w-full">
      {/* <LandingPage isLogin={isLogin} /> */}
      {/* <div className="main-form-container"> */}
      <div className="form-container flex flex-col w-full">{content}</div>
      {/* </div> */}
    </div>
  );
};

export default OnboardLayout;
