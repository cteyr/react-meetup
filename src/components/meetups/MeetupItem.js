import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useState } from "react";

export default function MeetupItem() {
  const [Item, setItem] = useState([]);
  const { data } = useFetch({
    url: "/data.json",
  });
  const data_stringify = JSON.stringify(data);
  var data_parse = JSON.parse(data_stringify);

  console.log(data);

  const getItem = () => {
    // setItem(data);
    // console.log("hola ");
    // console.log("longitud" + Item.length);
  };

  if (!data) return <p>Loading...</p>;
  let [item] = data;

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={getItem}>
            Add to favorites
          </button>
        </div>
      </Card>
    </li>
  );
}
