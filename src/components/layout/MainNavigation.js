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

  document.addEventListener('mouseup', function(e) { // Al hacer click fuera de un elemento se ejecuta lo que esta dentro de esta funcion 
    var listNavBar = document.getElementById('listNav');
    var iconHamburguer = document.getElementById('icon-hamburguer');
    if ((!listNavBar.contains(e.target) && !iconHamburguer.contains(e.target)) && document.getElementById("listNav").style.flexDirection === "column") {
        document.getElementById("listNav").style.display = "none";
        setActivate(true);
    }

    var tag_li1 = document.getElementById('tag_li1');
    var tag_li2 = document.getElementById('tag_li2');
    var tag_li3 = document.getElementById('tag_li3');
    if ( (tag_li1.contains(e.target) || tag_li2.contains(e.target) || tag_li3.contains(e.target) ) && document.getElementById("listNav").style.flexDirection === "column") {
      document.getElementById("listNav").style.display = "none";
      setActivate(true);
  }
  });

  window.addEventListener("resize", function(){
    const pageWidth = document.documentElement.scrollWidth;
    if(pageWidth<=468){
      document.getElementById("listNav").style.display = "none";
      setActivate(true);
    }else{
      document.getElementById("listNav").style.display = "flex";
      document.getElementById("listNav").style.flexDirection = "row" ;
    }
  });

  const onClickHamburguer =() =>   {
    if(isActivate===false){
      document.getElementById("listNav").style.display = "none";
      document.getElementById("listNav").style.flexDirection = "row";
      setActivate(true);
    }else if(isActivate===true){     
      document.getElementById("listNav").style.display = "flex";
      document.getElementById("listNav").style.flexDirection = "column";
      document.getElementById("listNav").style.padding = "1rem";
      document.getElementById("listNav").style.gap = "0.2rem";
      setActivate(false);
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
      <div id="icon-hamburguer" className={classes.hamburguer} onClick={onClickHamburguer}></div>
      <nav className={classes.navBar}>
        <ul id="listNav">
          <li id="tag_li1">
            <NavLink to="meetups">All Meetups</NavLink>
          </li>

          <li id="tag_li2">
            <NavLink to="meetups/add">Add New Meetup</NavLink>
          </li>
          <li id="tag_li3">
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
