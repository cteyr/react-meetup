import { useScroll } from "./../../util-hooks/useScroll";
import classes from "./MainNavigation.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useMeetupsContext } from "../../context/MeetupsProvider";

export default function MainNavigation({ setPage }) {
  const { isScrollingUp, isScrollingDown } = useScroll();
  const { favoritesCount } = useMeetupsContext();

  return (
    <header
      className={classNames(classes.header, {
        [classes["scroll-up"]]: isScrollingUp,
        [classes["scroll-down"]]: isScrollingDown,
      })}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
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
