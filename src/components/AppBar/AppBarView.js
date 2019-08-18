import React, { useState } from "react";
import PropTypes from "prop-types";
import { globalStyles } from "../../utils/styles";
import { createUseStyles } from "react-jss";
import IconButton from "../IconButton";
import MenuIcon from "mdi-react/MenuIcon";

const useStyles = createUseStyles({
  grow: {
    flexGrow: 1
  },
  appBar: {
    display: "flex",
    position: "realtive",
    alignItems: "center",
    boxSizing: "inherit",
    minHeight: "64px",
    paddingRight: "24px",
    paddingLeft: "24px",
    direction: "column"
  },
  button: {
    marginRight: "24px",
    color: "white"
  },
  justifyRight: {
    display: "flex",
    flex: 1,
    alignItems: "center"
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const AppBarView = props => {
  const { title, className, isOpen, isShow } = props;
  const classes = useGlobalStyles();
  const styles = useStyles();
  const [state, setState] = useState({
    isOpen,
    isShow
  });

  const defaultStyles = [
    classes.gradAsh,
    classes.clWhite,
    styles.appBar,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={styles.grow}>
      <div className={defaultStyles}>
        <div className={styles.justifyRight}>
          {state.isShow ? (
            <IconButton
              className={styles.button}
              onClick={() => setState({ ...state, isOpen: !isOpen })}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <p>{title}</p>
        </div>
        <div>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

AppBarView.defaultProps = {
  isShow: false,
  isOpen: false
};

AppBarView.propTypes = {
  /**
   * AppBar title
   */
  title: PropTypes.string
};

export default AppBarView;
