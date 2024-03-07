import React from "react";
import RecentTripsData from "./RecentTripsData";
import Trip1 from "../../../assets/images/Vans/Van2.jpg";
import Trip2 from "../../../assets/images/Vans/Van3.jpg";
import Trip3 from "../../../assets/images/buses.jpg";
import Trip4 from "../../../assets/images/Voxy(s)/Voxy(s)3.jpg";

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Here are the most recent trips that we have been on.</p>
      <div className="tripcard-container">
        <RecentTripsData
          image={Trip1}
          heading="Namanga Trip"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos modi rem laboriosam reprehenderit cumque dolorum aliquam molestias error iure mollitia!"
        />

        <RecentTripsData
          image={Trip2}
          heading="Trip to Nakuru"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos modi rem laboriosam reprehenderit cumque dolorum aliquam molestias error iure mollitia!"
        />

        <RecentTripsData
          image={Trip3}
          heading="Kigale Trip"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos modi rem laboriosam reprehenderit cumque dolorum aliquam molestias error iure mollitia!"
        />

        <RecentTripsData
          image={Trip4}
          heading="Kigali Trip"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos modi rem laboriosam reprehenderit cumque dolorum aliquam molestias error iure mollitia!"
        />
      </div>
    </div>
  );
};

export default RecentTrips;
