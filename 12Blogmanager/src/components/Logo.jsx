import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://wallpapers.com/images/hd/apple-logo-in-vintage-typography-png-fti-vkjhtsosh4ghznlo.png"
        alt="logo"
        width={width}
      />
    </div>
  );
}

export default Logo;
