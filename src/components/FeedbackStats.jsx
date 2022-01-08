export default function FeedbackStats({ feedback }) {
  // calcuate avg rating (sum of all rating / total no of rating)
  const totalRating = feedback.reduce((acc, curr) => acc + curr.rating, 0);
  let avgRating = totalRating / feedback.length;
  avgRating = avgRating.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
}