/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/sideBar/Sidebar";

function App() {
  return (
    <>
      <div
        css={css`
          display: flex;
          gap: 1rem;
          /* position: fixed; */
        `}
      >
        <Sidebar />

        <div
          css={css`
            flex: 1;
            position: relative;
          `}
        >
          <Banner />
          <Outlet />
          {/* <Tabs /> */}
          {/* <MusicForm /> */}
        </div>
      </div>
    </>
  );
}

export default App;
