import { useState } from "react/cjs/react.development";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

export default function FeedbackForm(props) {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handelTextChange = (e) => {
    setText(e.target.value);
    if (text === '') {
      setDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 charachtera');
    } else {
      setMessage(null);
      setDisabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { id: new Date().getTime(), text, rating };
    props.addNewFeedback(newFeedback);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Would you help us in making our service better.</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your feedback"
            onChange={handelTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={disabled}>Submit</Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}