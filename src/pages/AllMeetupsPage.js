import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetupsContext } from "../context/MeetupsProvider";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { meetups } = useMeetupsContext();

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups?.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
