import React from "react";
import "./Destination.css";
import Voxy1 from "../../../assets/images/Voxy(s)/Voxy(s)1.jpg";
import Van1 from "../../../assets/images/Vans/Van4.jpg";
import Van3 from "../../../assets/images/Vans/Van3.jpg";
import Voxy3 from "../../../assets/images/Voxy(s)/Voxy(s)3.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>
          Tours give you the opportunity to see a lot, within a pre-determined
          time frame
        </p>

        <DestinationData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iure
            possimus earum! Eaque earum molestias harum officia, deleniti animi
            voluptatem enim in pariatur amet velit est aliquid. Qui, sumenda
            totam, a exercitationem, ad laborum corporis aut tempora non labore
            culpa maiores tenetur iste velit? Ullam id eveniet rerum voluptate
            asperiores? Laboriosam recusandae quos harum suscipit itaque ipsa
            commodi fugit ullam perspiciatis necessitatibus in debitis, illum
            quas asperiores consequuntur facilis blanditiis quo, ad sint autem,
            repudiandae assumenda provident. Laboriosam fugit, asperiores atque
            esse sequi at ab voluptatibus est, illum, id minus libero eos
            facilis. Tenetur quas quis dicta cumque pariatur deserunt?"
          img2={Voxy1}
          img1={Van1}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Nairobi, Kenya"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iure
            possimus earum! Eaque earum molestias harum officia, deleniti animi
            voluptatem enim in pariatur amet velit est aliquid. Qui, sumenda
            totam, a exercitationem, ad laborum corporis aut tempora non labore
            culpa maiores tenetur iste velit? Ullam id eveniet rerum voluptate
            asperiores?"
          img2={Van3}
          img1={Voxy3}
        />
      </div>
    </>
  );
};

export default Destination;
