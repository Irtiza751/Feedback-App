import Card from "./shared/Card";
import { FiX } from 'react-icons/fi';
export default function FeedbackItem({ feedbackText, rating, handleDelete, id }) {

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FiX />
      </button>
      <div className="text-display">
        {feedbackText}
      </div>
    </Card>
  );
}