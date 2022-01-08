import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import feedbackData from './data/feedbackData';

export default function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  useEffect(() => {
    const feeds = JSON.stringify(feedback);
    console.log(feeds);
  }, []);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want delete this feedback?")) {
      const newFeedbacks = feedback.filter(item => item.id !== id);
      setFeedback(newFeedbacks);
    }
  }

  const addNewFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header title="Feedback UI" />
      <div className="container">
        <FeedbackForm addNewFeedback={(newFeedback) => addNewFeedback(newFeedback)} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedbacks={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}
