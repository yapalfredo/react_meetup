import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setHasBeenLoaded(false);
    fetch(process.env.REACT_APP_DATABASE_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //Transform data
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }

        setHasBeenLoaded(true);
        setLoadedMeetups(meetups);
      });
  }, []);

  //if not yet done loading
  if (!hasBeenLoaded) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>ALL MEETUPS PAGE</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }
}

export default AllMeetupsPage;
