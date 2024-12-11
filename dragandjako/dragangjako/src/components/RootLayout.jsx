import Navbar from "./Navbar";
import { useState } from "react";
import Contact from "./Contact";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [subtitleState, setSubtitleState] = useState(true);
  return (
    <>
      <Navbar
        subtitleState={subtitleState}
        setSubtitleState={setSubtitleState}
      />
      <Outlet context={[subtitleState]} />
      <Contact subtitleState={subtitleState} />
    </>
  );
};

export default RootLayout;
