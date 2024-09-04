/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/sideBar/Sidebar";
import { Outlet, Navigate } from "react-router-dom";

function App() {
  const user = "h";

  if (user) {
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
  } else {
    <Navigate to="/auth" />;
  }
}

export default App;
