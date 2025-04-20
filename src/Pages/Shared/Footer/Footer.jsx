import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="fixed-bottom flex justify-center p-2  text-center">
      <small className="w-full">
        All Rights Reserved &copy; {year} Copyrights{" "}
        <span style={{ fontFamily: "Abril Fatface, serif" }}>CreaqTech</span> .
      </small>
    </div>
  );
}

export default Footer;