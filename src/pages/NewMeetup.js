import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom'

function NewMeetupPage() {

  const navigate = useNavigate();
  //navigate("/", { replace: true });

  function submitNewMeetupHandler(meetupData) {
    fetch(
      process.env.REACT_APP_DATABASE_ENDPOINT,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/', { replace: true })
    });
  }

  return (
    <section>
      <h1>ADD NEW MEETUP</h1>
      <NewMeetupForm onSubmitNewMeetup={submitNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
