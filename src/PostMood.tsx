import React, { useState } from "react";
import "./PostMood.css";
import { useNavigate } from "react-router-dom";

const PostMood: React.FC = () => {
  const [moods, setMoods] = useState<string>();
  const [notes, setNotes] = useState<string>();
  const [isPending, setIsPending] = useState<boolean>(false);
  const navigate = useNavigate();
  let date_time = new Date();

  const body = { date_time, moods, notes };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setIsPending(true);

    fetch("/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => {
        setMoods("");
        setNotes("");
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-wrapper">
      <h1>Add your current Mood 🗒 </h1>
      <form onSubmit={submitHandler} className="form-container">
        <div className="input">
          <label className="post-label">Current moods 👀 </label>
          <textarea
            placeholder="16文字以内"
            id="textarea-mood"
            required
            onChange={(e) => {
              e.target.value.length <= 16
                ? setMoods(e.target.value)
                : window.alert("文字数は16文字以内でお願いします🐱");
            }}
          />
        </div>
        <div className="input">
          <label className="post-label">Notes 🗒 </label>
          <textarea
            placeholder="144文字以内"
            id="textarea-notes"
            required
            onChange={(e) => {
              e.target.value.length <= 144
                ? setNotes(e.target.value)
                : window.alert("文字数は144文字以内でお願いします🐶");
            }}
          />
        </div>
        <div className="input">
          {!isPending && <button className="submit-btn">POST</button>}
          {isPending && (
            <button disabled className="disable">
              Adding your current moods...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostMood;
