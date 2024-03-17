import React from "react";

import PrimaryButton from "../../atoms/Button/PrimaryButton";
import SecondaryButton from "../../atoms/Button/SecoundaryButton";

const NaviBeforeLogin: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-5 md:ml-6">
        <PrimaryButton text="新規登録" />
        <SecondaryButton text="ログイン" />
      </div>
    </div>
  );
};

export default NaviBeforeLogin;

