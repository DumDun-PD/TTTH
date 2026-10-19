import { useState } from "react";

function FeedBack() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please comment ex");
      return;
    }

    console.log("Form submitted!");
    setComment("");
    setScore("10");
  }

  return (
    <div className="FeedBack">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label>Score: {score}*</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>comment:</label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default FeedBack;