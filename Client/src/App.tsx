/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/sideBar/Sidebar";
import Songs from "./components/Songs/Songs";

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

          <Songs />
        </div>
      </div>
    </>
  );
}

export default App;
