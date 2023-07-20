import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    backgroundColor: "#f5ba13"
  };

  return (
    <div>
      <footer class="py-3 my-4 text-light" style={footerStyle}>
        <ul class="nav justify-content-center border-bottom pb-4"></ul>
        <p class="text-center">© 2022 Keeper, Inc</p>
      </footer>
    </div>
  );
}
