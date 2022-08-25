database name "tracking"

table1 "records"
id increments primary
date_time timestamp notNull "2022-08-24 21:05:06",
day_of_week string(16) notNull "水",
moods string(16) notNull "ハッピー、穏やか",
notes text(144) notNull "全ての課題が終わった！嬉しい。",
