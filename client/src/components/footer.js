import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="Footer text-center">
      All rights reserved{" "}
      <NavLink to="https://johnmogi.com" target="blank">
        Johnmogi.com
      </NavLink>
      &copy; {date}
    </div>
  );
}

export default Footer;
