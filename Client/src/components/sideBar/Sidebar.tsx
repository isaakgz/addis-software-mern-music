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

import {
  FaHome,
  FaMusic,
  FaHeart,
  FaListUl,
  FaChartBar,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import { logoutRequest } from "../../features/auth/authSlice.ts";

const MENUS = [
  { title: "Home", icon: FaHome, gap: false, path: "/" },
  { title: "Add Music", icon: FaMusic, gap: false, path: "/add-music" },
  { title: "My Favorites", icon: FaHeart, gap: true, path: "/favorites" },
  { title: "PlayLists", icon: FaListUl, gap: false, path: "/playlists" },
  { title: "Statistics", icon: FaChartBar, gap: false, path: "/statistics" },
  { title: "Isaak", icon: FaUser, gap: true, isProfile: true }, // No path for profile
  { title: "Logout", icon: FaSignOutAlt, gap: false, action: "logout" },
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

            // Handle logout action
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
                  <MenuIcon as={menu.icon} />
                  <MenuTitle open={open}>{menu.title}</MenuTitle>
                </MenuItem>
              );
            }

            // Handle profile item (non-clickable)
            if (menu.isProfile) {
              return (
                <MenuItem
                  key={index}
                  gap={menu.gap}
                  active={false} // Not active, since it's non-clickable
                  css={css`
                    cursor: default; // Disable clicking
                  `}
                >
                  <MenuIcon as={menu.icon} />
                  <MenuTitle open={open}>{user?.username}</MenuTitle>
                </MenuItem>
              );
            }

            // For all other menus (clickable)
            return (
              <Link
                key={index}
                to={menu.path!} // '!' because paths are guaranteed except for profile
                css={css`
                  text-decoration: none;
                `}
              >
                <MenuItem gap={menu.gap} active={isActive}>
                  <MenuIcon as={menu.icon} />
                  <MenuTitle open={open}>{menu.title}</MenuTitle>
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
