import { useState } from "react";
import headerImg from "../images/header.png";
import "./styles/style.css";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { Home, FitnessCenter } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";

import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import InfoIcon from "@material-ui/icons/Info";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginTop: "0px",
  },
  burgerColor: {
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
  },
  iconColor: {
    color: "white",
  },
  drawerBackground: {
    "& .MuiPaper-root": {
      backgroundColor: "rgb(63,81,181)",
    },
    "& .MuiButtonBase-root": {
      color: "white",
    },
  },
  menuColor: {
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  menuIcon: ({ matches }) => ({
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }),
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAnchor(open ? event.currentTarget : null);
  };
  const { history } = props;

  const itemList = [
    {
      icon: <ChevronRightIcon />,
      onClick: toggleDrawer(anchor, false),
    },
    {
      text: "Home",
      icon: <Home className={classes.iconColor} />,
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      icon: <InfoIcon className={classes.iconColor} />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Exercises",
      icon: <FitnessCenter className={classes.iconColor} />,
      onClick: () => history.push("/exercise"),
    },
    {
      text: "Contact",
      icon: <ContactPhoneIcon className={classes.iconColor} />,
      onClick: () => history.push("/contactus"),
    },
  ];
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.iconColor}>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={index} onClick={onClick}>
              {icon && (
                <ListItemIcon className={classes.menuColor}>
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.burgerColor}>
        <Toolbar>
          <div>
            <Link to="/">
              <img
                src={headerImg}
                alt="Gym Maniac Logo"
                width="180"
                height="60"
              />
            </Link>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {itemList.slice(1).map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={index} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </div>
          <IconButton
            className={classes.menuIcon}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={Boolean(anchor)}
            onClose={toggleDrawer(anchor, false)}
            anchor="right"
            className={classes.drawerBackground}
          >
            {list(anchor)}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
