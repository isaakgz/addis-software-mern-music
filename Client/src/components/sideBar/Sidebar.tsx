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
import logoutIcon from "../../assets/icons/logout.svg"; // renamed to avoid conflict
import person from "../../assets/icons/person.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import { logoutRequest } from "../../features/auth/authSlice.ts";

const MENUS = [
  { title: "Home", src: home, gap: false, path: "/" },
  { title: "Add Music", src: addMuisc, gap: false, path: "/add-music" },
  { title: "My Favorites", src: favs, gap: true, path: "/favorites" },
  { title: "PlayLists", src: playlists, gap: false, path: "/playlists" },
  { title: "Statistics", src: stats, gap: false, path: "/statistics" },
  { title: "Isaak", src: person, gap: true, path: "/profile" },
  { title: "Logout", src: logoutIcon, gap: false, action: "logout" }, // no path, it will trigger action
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutRequest()); // Trigger logout action
    navigate("/auth"); // Redirect to auth page after logging out
  };

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
          {MENUS.map((menu, index) => {
            const isActive = location.pathname === menu.path;

            if (menu.action === "logout") {
              return (
                <MenuItem
                  key={index}
                  gap={menu.gap}
                  active={isActive}
                  onClick={handleLogout}
                  css={css`
                    cursor: pointer;
                  `}
                >
                  <MenuIcon src={menu.src} alt={`${menu.title} icon`} />
                  <MenuTitle open={open}>{menu.title}</MenuTitle>
                </MenuItem>
              );
            }

            return (
              <Link
                key={index}
                to={menu.path!} // '!' because paths are guaranteed except for logout
                css={css`
                  text-decoration: none;
                `}
              >
                <MenuItem gap={menu.gap} active={isActive}>
                  <MenuIcon src={menu.src} alt={`${menu.title} icon`} />
                  <MenuTitle open={open}>
                    {menu.path === "/profile" ? user?.username : menu.title}
                  </MenuTitle>
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
