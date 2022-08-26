import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

interface dataObj {
  id: number;
  date_time: any;
  day_of_week: string;
  moods: string;
  notes: string;
}

// type JSONValue = | string | number
// interface JSONObject {}

const Home = () => {
  const [contents, setContents] = useState<[dataObj]>();
  useEffect(() => {
    fetch("/records")
      .then((res) => res.json())
      .then((data) => setContents(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>My mood tracker 🍎 </h1>

      <table className="contents" border={1}>
        <thead>
          <tr>
            <th>日付</th>
            <th>曜日</th>
            <th>時間</th>
            <th>気分</th>
            <th>ノート</th>
          </tr>
        </thead>
        <tbody>
          {contents &&
            contents.map((content, index) => {
              const year = dayjs(content.date_time).format("YYYY");
              const month = dayjs(content.date_time).format("MMM");
              const date = dayjs(content.date_time).format("D");
              const dayOfWeek = dayjs(content.date_time).format("ddd");
              const time = dayjs(content.date_time).format("LT");

              return (
                <tr key={content.id} className="content">
                  <td> {`${year} / ${month} / ${date}`} </td>
                  <td>{dayOfWeek}</td>
                  <td>{time}</td>
                  <td>{content.moods}</td>
                  <td>{content.notes}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/PostMood" className="create-list-link btn">
        + Post current mood 🤗
      </Link>
    </div>
  );
};

export default Home;
