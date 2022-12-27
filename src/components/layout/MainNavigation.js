import { useScroll } from "./../../util-hooks/useScroll";
import classes from "./MainNavigation.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useMeetupsContext } from "../../context/MeetupsProvider";
import { useState } from "react";

export default function MainNavigation({ setPage }) {
  const { isScrollingUp, isScrollingDown } = useScroll();
  const { favoritesCount } = useMeetupsContext();
  const [isActivate, setActivate] = useState(true);

  window.addEventListener("resize", function(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth<=468){
      document.getElementById("listNav").style.display = "none";
    }else{
      document.getElementById("listNav").style.display = "flex";
    }
  });

  const onClickHamburguer =() =>   {
    if(isActivate===false){
      setActivate(true);
      document.getElementById("listNav").style.display = "none";
    }else{
      setActivate(false);
      document.getElementById("listNav").style.display = "flex";
    }
  };

  return (
    <header
      className={classNames(classes.header, {
        [classes["scroll-up"]]: isScrollingUp,
        [classes["scroll-down"]]: isScrollingDown,
      })}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <div className={classes.hamburguer} onClick={onClickHamburguer}></div>
      <nav>
        <ul id="listNav">
          <li>
            <NavLink to="meetups">All Meetups</NavLink>
          </li>

          <li>
            <NavLink to="meetups/add">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
