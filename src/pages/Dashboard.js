import React from "react";

import ImgMediaCard from "../comoponents/Card";
// import ImgMediaCard from "../comoponents/slot-cards/Slotcard";

import Join from "../comoponents/Special";
import Contact from "../Global comoponents/ContactForm";
import BookImage from "../../assets/card/book-library-with-open-textbook.jpg";
import LightImage from "../../assets/card/light.jpg";
import Nature from "../../assets/card/environment.jpg";
import { Button } from "react-bootstrap";
import KnowMoreModel from "../Model/KnowMoreModel";
import "./pageStyle.css";

function Dashboard() {
  return (
    <div className="gap-y-[30px]">
      <div className="background-style">
        <div className="content ">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              height: "100vh",
              flexDirection: "column",
              marginTop: "85px",
              marginLeft: "300px",
            }}
          >
            <h3 style={{ fontFamily: "cursive", fontSize: "32px" }}>
              The Best Learning Place
            </h3>
            <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
              Come Learn and Grow With As!
            </h1>
          </div>
        </div>
      </div>
      <div className="services bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 mt-[30px] p-[10px]">
        <h1 className="text-center p-[15px]">Our Services</h1>
        <div className="flex flex-row justify-around">
          <span>
            <ImgMediaCard
              image={BookImage}
              title="All Books are available"
              description="Books play a quintessential role in every student's life by introducing them to a world of imagination, providing knowledge of the outside world, improving their reading, writing and speaking skills as well and boosting memory and intelligence."
              ButtonText="Learn More"
            />
          </span>
          <span>
            <ImgMediaCard
              image={LightImage}
              title="Power Supply"
              description="Light allows us to see the surrounding world by distinguishing details, individual colours, movement, brightness. It has a very big impact on a human in terms of the physiology and psyche. But light also has extremely important functions in relation."
              ButtonText="Learn More"
            />
          </span>
          <span>
            <ImgMediaCard
              image={Nature}
              title="Peacefull Environment"
              description="EE increases the ability of students to focus and improves their cognitive abilities. Children with attention-deficit disorder also benefit from more exposure to nature–the greener a child's everyday environment, the more manageable are their symptoms."
              ButtonText="Learn More"
            />
          </span>
        </div>
      </div>
      <div className="courses bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 mt-[30px] p-[10px]">
        <h1 className="text-center p-[15px]">Slot Availabale</h1>
        <div className="flex flex-row justify-around">
          <span>
            <ImgMediaCard
              title="Morning Shift"
              image={Nature}
              description="Ther are some slot divided based on the on the every day , and Morning slot start from early 7 AM and end on 12 PM, student can increse thier time based on the availabiltiy of the time "
              ButtonText="Book Slot"
            />
          </span>
          <span>
            <ImgMediaCard
              title="After Noon Shift"
              image={Nature}
              description="Ther are some slot divided based on the on the every day , and AfterNoon slot start from afternoon 12 PM and end on 4 PM, student can increse thier time "
              ButtonText="Book Slot"
            />
          </span>
          <span>
            <ImgMediaCard
              title="Evening Shift"
              image={Nature}
              description="Ther are some slot divided based on the on the every day , and Evening slot start from afternoon 4 PM and end on 7 PM, student can increse thier time based on the availabiltiy of the time "
              ButtonText="Book Slot"
            />
          </span>
        </div>
      </div>
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 mt-[30px] p-[10px]">
        <h1 className="text-center p-[20px]">Why choose US!</h1>
        <div className="message">
          <h4>
            We’re committed to Educational and Activity based learning and to
            serve you with quality and value Education.
          </h4>
          <ul>
            <li>light availbale</li>
            <li>light availbale</li>
            <li>light availbale</li>
            <li>light availbale</li>
            <KnowMoreModel title="Know More" />
          </ul>
        </div>
      </div>
      {/* <div className="bg-contact mt-[30px] p-[10px]">
        <h1 className="text-center p-[15px]">Contact US!</h1>

        <div className="">
          <Contact />
        </div>
      </div> */}
      <div className="bg-[#a16dd0] mt-[30px] p-[10px] flex flex-col items-center">
        <h1 className="text-center p-[15px]">Contact Us!</h1>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
