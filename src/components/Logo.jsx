import React, { useState } from "react";
import FurryFriend from "../Furry-Friend.png";

const Logo = () => {
  const [played, setPlayed] = useState(false);

  const handleGifLoad = () => {
    if (!played) {
      setPlayed(true);
    }
  };

  return (
    <div>
      {/* {!played && ( */}
      <img
        src={FurryFriend}
        className="w-64"
        alt="Logo"
        onLoad={handleGifLoad}
      />
      {/* )} */}
    </div>
  );
};

export default Logo;
