import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetupsContext } from "../context/MeetupsProvider";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { favorites } = useMeetupsContext();

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favorites?.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
