import React, { useEffect, useState } from "react";

const Activities = () => {
  const [activities, setActivities] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cerulean-marlin-wig.cyclic.app/activities"
        );
        const data = await res.json();
        setActivities(data);
      } catch (error) {
        console.log("Error fetching activities:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {activities &&
        activities.map((activity) => {
          const {
            direction,
            from,
            to,
            via,
            duration,
            is_archived,
            call_type,
            id,
            created_at,
          } = activity;
          return (
            <div key={activity.id}>
              {call_type == "missed" ? "🔴" : null}
              {call_type == "answered" ? "🟢" : null}
              {call_type == "" ? "❌" : null}
              {direction}<br/>
              {from}<br/>
              {to}<br/>
              {via}<br/>
              {duration/60}<br/>
              <br></br>
            </div>
          );
        })}
    </div>
  );
};

export default Activities;
