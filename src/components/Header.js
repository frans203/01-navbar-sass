import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size?.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const ctaClickHandler = () => {
    history.push("/page-cta");
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Navbar
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/page-one">
                Page One
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/page-two">
                Page Two
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/page-three">
                Page Three
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>CTA Page</button>
        </nav>
        <div
          onClick={menuToggleHandler}
          className={classes.header__content__toggle}
        >
          {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>
      </div>
    </header>
  );
}

export default Header;
