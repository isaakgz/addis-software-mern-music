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

const MENUS = [
  { title: "Home", src: home, gap: false },
  { title: "Add Music", src: addMuisc, gap: false },
  { title: "My Favorites", src: favs, gap: true },
  { title: "PlayLists", src: playlists, gap: false },
  { title: "Statistics", src: stats, gap: false },
  { title: "Isaak", src: person, gap: true },
  { title: "Logout", src: logout, gap: false },
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
            <MenuItem
              key={index}
              gap={menu.gap}
              active={menu.title === "Overview"}
            >
              <MenuIcon src={menu.src} alt={`${menu.title} icon`} />
              <MenuTitle open={open}>{menu.title}</MenuTitle>
            </MenuItem>
          ))}
        </MenuList>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
