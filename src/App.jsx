import styles from "./style";
import React, { useState } from "react";
import {
  CTA,
  Navbar,
  Billing,
  Business,
  Testimonials,
  CardDeal,
  Client,
  Hero,
  Stats,
  Footer,
  Events,
  Modal,
  Registration,
} from "./components";
import { Route, Routes } from "react-router-dom";
import EventSession from "./components/EventSession";

const Apps = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden `}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="xl:max-w-[1280px] w-full  z-30 fixed top-0 bg-primary sm:px-16 px-6">
          <Navbar />
          <Modal />
        </div>
      </div>
      <div className="flex justify-center items-start bg-primary">
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className="flex justify-center items-start bg-primary sm:px-16 p-6">
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <div className="w-[100%] h-[500px] mt-[5rem] mb-[10rem]  ">
            <Events />
          </div>{" "}
          <Client />
          <Registration />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};
const App = () => (
  <Routes>
    <Route path="/" element={<Apps />} />
    <Route path="/events/:id" element={<EventSession />} />
  </Routes>
);

export default App;
