/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Sidebar from "./components/sideBar/Sidebar";
import Banner from "./components/Banner/Banner";

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
          `}
        >
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
