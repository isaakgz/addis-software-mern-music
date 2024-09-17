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
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          padding-right: 0.5rem;
          height:100vh;
        `}
      >
        <Sidebar />

        <div
          css={css`
            flex: 1;
            position: relative;
            overflow: hidden;
            height: 100vh;
            
          `}
        >
          <Banner />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
