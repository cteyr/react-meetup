import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";
import { useScroll } from "./../../util-hooks/useScroll";
import classes from "./MainNavigation.module.css";
import classNames from "classnames";

export default function MainNavigation({ setPage }) {
  const { isScrollingUp, isScrollingDown } = useScroll();

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
            <a
              href="http://localhost:3000/all_meetups"
              onClick={() => setPage(ALL_MEETUP_PAGE)}
            >
              All Meetups
            </a>
          </li>

          <li>
            <a
              href="http://localhost:3000/add_meetups"
              onClick={() => setPage(NEW_MEETUP_PAGE)}
            >
              Add New Meetups
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/meetups_favorites"
              onClick={() => setPage(FAVORITES_PAGE)}
            >
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
