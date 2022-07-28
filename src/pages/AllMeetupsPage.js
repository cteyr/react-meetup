import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "./../../src/util-hooks/useFetch";

export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: "/data.json",
  });

  const data_stringify = JSON.stringify(data);
  const data_parse = JSON.parse(data_stringify);
  console.log(data_parse);

  return (
    <section className={classes.item}>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data_parse?.map((element) => (
          <MeetupItem key={element.id} />
        ))}
      </ul>
    </section>
  );
}
