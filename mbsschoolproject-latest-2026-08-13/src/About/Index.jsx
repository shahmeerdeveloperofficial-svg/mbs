import React, { useState, useEffect } from "react";
import "./About.css";
// NOTE: We rely on messages[activeMessage].image now, 
// so the individual 'Owner' import is often no longer needed 
// if the image is imported in Data/pro.js.
// We keep Owner_bg and Owner_ellipse as they are likely generic assets.
// import Owner from "../../../assets/images/owner.png"; 
import Owner_bg from "../../../assets/images/owner_bg.png";
import Owner_ellipse from "../../../assets/images/owner_ellipse.png";
import About_line from "../../../assets/images/about_line.png";
import About_rocket from "../../../assets/images/about_rocket.png";
import About_ellipse from "../../../assets/images/about_ellipse.png";
import About_ellipse_one from "../../../assets/images/about_ellipse_one.png";
import Homework from "../../../assets/images/homework.png";
import Graduation from "../../../assets/images/graduation.png";
import Message_yellow from "../../../assets/images/message_yellow.png";
import Red from "../../../assets/images/red.png";
import Red_one from "../../../assets/images/red_one.png";
import Yellow from "../../../assets/images/yellow.png";
import History_line from "../../../assets/images/history_line.png";
import History_Ellipse from "../../../assets/images/history_ellipse.png";
import History_Water from "../../../assets/images/history_water.png";
import History_rocket from "../../../assets/images/history_rocket.png";
import History_book from "../../../assets/images/history-book.png";
import Cur_line from "../../../assets/images/cur_line.png";
import Cur_video from "../../../assets/images/cur_video.png";
import Cur_brain from "../../../assets/images/cur_brain.png";
import Cur_book from "../../../assets/images/cur_book.png";
import Cur_world from "../../../assets/images/cur_world.png";
import { messages, Curdata } from "../../../Data/pro";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  const [activeMessage, setActiveMessage] = useState("Chairman");

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); 

return (
  <div className="container-fluid p-0 about_div" id="about">
    <div className="position-relative">
      <img src={About_ellipse} alt="" className="about_ellipse_img" />
      <img src={About_ellipse_one} alt="" className="about_ellipse_img_one" />
    </div>
    <div className="container position-relative pt-lg-5 pt-xl-0">
      <img
        src={About_line}
        alt=""
        className="about_line_img"
        data-aos="fade-up"
      />
      <img
        src={About_rocket}
        alt=""
        className="about_rocket_img"
        data-aos="fade-up"
      />
      <img
        src={Homework}
        alt=""
        className="homework_img"
        data-aos="fade-up"
      />
      <p className="about_title" data-aos="fade-up">
        Message
      </p>
      <p className="about_desp" data-aos="fade-up">
        Our Leadership Messages
      </p>
      <div
        className="d-flex justify-content-center gap-3 mt-2 mb-5"
        data-aos="fade-up"
      >
        {Object.keys(messages).map((key) => (
          <button
            key={key}
            className={`about_btn ${
              activeMessage === key ? "about_btn_active" : ""
            }`}
            onClick={() => setActiveMessage(key)}
          >
            {`${key}'s Message`}
          </button>
        ))}
      </div>
      <div className="row about_message_div" data-aos="fade-up">
        <div className="col-lg-8 col-xl-9" data-aos="fade-left">
          <p className="about_message_title">
            {messages[activeMessage].title}
          </p>
          <p className="about_message_desp">
            {messages[activeMessage].description}
          </p>
          <p className="about_owner_name">{messages[activeMessage].owner}</p>
          <p className="about_designation">
            {messages[activeMessage].designation}
          </p>
        </div>
        <div
          className="col-lg-4 col-xl-3 mt-4 mt-sm-4 mt-lg-0 d-flex justify-content-center justify-content-sm-center justify-content-lg-start position-relative"
          data-aos="fade-right"
        >
          {/* 🎯 MODIFIED: Use the dynamic image source from the messages object */}
          <img 
              src={messages[activeMessage].image} 
              alt={`${activeMessage} image`} 
              className="owner_img"
              style={{ width: "278px", height: "277px" }}
          />
          
          <img src={Owner_bg} alt="" className="owner_bg_img" />
          <img src={Owner_ellipse} alt="" className="owner_ellipse_img" />
          <img src={Message_yellow} alt="" className="message_yellow_img" />
        </div>
      </div>
      <img
        src={Graduation}
        alt=""
        className="graduation_img"
        data-aos="fade-up"
      />
      <div className="position-relative" data-aos="fade-up">
        <img src={Owner_ellipse} alt="" className="about_ellipse_img_two" />
        <img src={Red} alt="" className="red_img" />
        <img src={Yellow} alt="" className="yellow_img" />
        <img src={Red_one} alt="" className="red_img_one" />
      </div>
    </div>
    <div className="position-relative" data-aos="fade-up">
      <img src={History_line} alt="" className="history_line" />
      <img src={History_rocket} alt="" className="history_rocket_img" />
    </div>
    <div className="container-fluid p-0 position-relative overflow-hidden">
      <div className="container history_div">
        <div className="row align-items-center">
          <div
            className="col-md-3 d-flex justify-content-center justify-content-sm-center justify-content-lg-start"
            data-aos="fade-left"
          >
            <img src={History_book} alt="" className="history_img" />
          </div>
          <div
            className="col-md-9 mt-3 mt-sm-3 mt-md-0"
            data-aos="fade-right"
          >
            <p className="history_title">History of our School</p>
            <p className="history_desp">
              We aim to inspire critical thinkers and look at the world
              differently and about challenging them to be fascinated by
              lessons and subjects. A key factor in your child's learning
              journey is the mentors they interact with, and we have a highly
              experienced skillful, dedicated teaching and support staff. They
              work together to provide flexibility in meeting the needs of all
              pupils.
            </p>
          </div>
        </div>
      </div>
      <img
        src={History_Ellipse}
        alt=""
        className="History_Ellipse_img"
        data-aos="fade-up"
      />
      <img
        src={History_Water}
        alt=""
        className="History_Water_img"
        data-aos="fade-bottom"
      />
    </div>
    <div className="container-fluid currculum_bg p-0 position-relative overflow-hidden">
      <img
        src={About_line}
        alt=""
        className="history_line_img"
        data-aos="fade-up"
      />
      <img
        src={About_rocket}
        alt=""
        className="cur_rocket_img"
        data-aos="fade-up"
      />
      <div className="container cur_div">
        <p className="about_desp" data-aos="fade-up">
          Our Curriculum
        </p>
        <p className="history_desp_one text-center" data-aos="fade-up">
          We aim to inspire critical thinkers and look at the world
          differently and about challenging them to be fascinated by lessons
          and subjects. A key factor in your child's learning journey is the
          mentors they interact with, and we have a highly experienced,
          skillful, dedicated teaching and support staff. They work together
          to provide flexibility in meeting the needs of all pupils.
        </p>
        <div className="row cur_row_div pt-1">
          {Curdata.map((item) => (
            <div key={item.id} className="mt-3 col-lg-6" data-aos="fade-up">
              <div className="cur_body_data">
                <div className="position-relative d-none d-sm-block">
                  <img src={item.image} alt="" className="cur_img" />
                  <img src={item.imageone} alt="" className="cur_imageone" />
                  <img src={item.imagecir} alt="" className="cur_imagecir" />
                </div>
                <div>
                  <p className="cur_item">{item.name}</p>
                  <p className="cur_desp">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={Homework}
        alt=""
        className="cur_homwork"
        data-aos="fade-left"
      />
      <img
        src={Cur_video}
        alt=""
        className="cur_video"
        data-aos="fade-right"
      />
      <img src={Cur_book} alt="" className="cur_book" data-aos="fade-left" />
      <img
        src={Cur_brain}
        alt=""
        className="cur_brain"
        data-aos="fade-right"
      />
      <img
        src={Cur_world}
        alt=""
        className="cur_world"
        data-aos="fade-left"
      />
      <img src={Cur_line} alt="" className="cur_line" />
    </div>
  </div>
);
};