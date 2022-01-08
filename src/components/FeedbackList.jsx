import { AnimatePresence, motion } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback yet.</p>
  }

  return (
    <>
      <AnimatePresence>
        {feedbacks.map(feedback => (
          <motion.div key={feedback.id} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }}>
            <FeedbackItem
              feedbackText={feedback.text}
              rating={feedback.rating}
              handleDelete={handleDelete}
              id={feedback.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}