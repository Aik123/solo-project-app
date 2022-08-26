import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const PostMood = () => {
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
    <div className="form-container">
      <h1>Add your current Mood 🗒 </h1>
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Current moods 👀 </label>
          <input
            type="text"
            placeholder="current mood"
            required
            onChange={(e) => setMoods(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Notes 🗒 </label>
          <input
            type="text"
            placeholder="notes"
            required
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="buttons">
          {!isPending && <button className="add-btn">Save my moods</button>}
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
