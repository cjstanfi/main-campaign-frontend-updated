import React from "react";
import Logo from "../assets/images/svg/Logo.svg";
const Sidebar = () => {
  return (
    <>
      <section>
        <aside className="mt-5 pt-5">
          <a href="#">
            <img src={Logo} alt="Main champaign" />
          </a>
        </aside>
      </section>
    </>
  );
};

export default Sidebar;
