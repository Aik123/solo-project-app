/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("records").del();
  await knex("records").insert([
    {
      id: 1,
      date_time: "2022-08-24 21:05:06",
      moods: "ハッピー🤗、穏やか🌲",
      notes: "全ての課題が終わった！嬉しい。",
    },
    {
      id: 2,
      date_time: "2022-08-24 15:33:10",
      moods: "緊張、ストレス💦",
      notes: "課題が終わるか不安。今日は運動ができなかった。",
    },
    {
      id: 3,
      date_time: "2022-08-24 07:10:55",
      moods: "不安😥、ストレス💦",
      notes:
        "昨日は5時間しか寝られなかった。変な夢も見た。今日中に課題を終わらせたい。",
    },
    {
      id: 4,
      date_time: "2022-08-23 23:12:40",
      moods: "ちょっと心配😥",
      notes:
        "今日は急にアパートを探しに行ったので、課題にあまり取り組めなかった。",
    },
    {
      id: 5,
      date_time: "2022-08-23 16:04:00",
      moods: "楽しい🤗 、興奮💥",
      notes:
        "さっき良いアパートを見つけた。契約が順調に行けば、来月には引っ越せそう！",
    },
  ]);
};
