database name "tracking"

table1 "records"
id increments primary
date_time timestamp notNull
day_of_week string(16) notNull
moods string(16) notNull
notes text(144) notNull
