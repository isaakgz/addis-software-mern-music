/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  SidebarContainer,
  ControlImage,
  LogoImage,
  Title,
  MenuList,
  MenuItem,
  MenuIcon,
  MenuTitle,
} from "./SidebarStyles.ts";
import rightArrow from "../../assets/icons/control.png";
import smiley from "../../assets/icons/smiley.svg";
import home from "../../assets/icons/home.svg";
import addMuisc from "../../assets/icons/addMuisc.svg";
import playlists from "../../assets/icons/playlists.svg";
import favs from "../../assets/icons/favs.svg";
import stats from "../../assets/icons/stat.svg";
import logout from "../../assets/icons/logout.svg";
import person from "../../assets/icons/person.svg";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const MENUS = [
  { title: "Home", src: home, gap: false, path: "/" },
  { title: "Add Music", src: addMuisc, gap: false, path: "/add-music" },
  { title: "My Favorites", src: favs, gap: true, path: "/favorites" },
  { title: "PlayLists", src: playlists, gap: false, path: "/playlists" },
  { title: "Statistics", src: stats, gap: false, path: "/statistics" },
  { title: "Isaak", src: person, gap: true, path: "/profile" },
  { title: "Logout", src: logout, gap: false, path: "/auth" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div css={{ display: "flex" }}>
      <SidebarContainer open={open}>
        <ControlImage
          src={rightArrow}
          open={open}
          onClick={() => setOpen(!open)}
          alt="Toggle Sidebar"
        />
        <div
          css={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
        >
          <LogoImage src={smiley} alt="Logo" />
          <Title open={open}>Addis Music</Title>
        </div>
        <MenuList>
          {MENUS.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              css={css`
                text-decoration: none;
              `}
            >
              <MenuItem gap={menu.gap} active={menu.title === "Overview"}>
                <MenuIcon src={menu.src} alt={`${menu.title} icon`} />
                <MenuTitle open={open}>{menu.title}</MenuTitle>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
