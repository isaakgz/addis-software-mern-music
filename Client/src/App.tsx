/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/sideBar/Sidebar";
import Tabs from "./components/Tabs/Tabs";

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

          <Tabs />
        </div>
      </div>
    </>
  );
}

export default App;
