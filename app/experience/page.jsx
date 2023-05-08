"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLineData } from "../constants";

const experience = () => {
  return (
    <>
      <Navbar />
      <Title content="Experience" />
      <div className="mt-[3%]">
        <VerticalTimeline lineColor="#9DA6B7">
          {timeLineData.map((data, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#C1CADA", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid #C1CADA",
                }}
                date={data.date}
                iconStyle={{
                  background: "#C1CADA",
                  color: "#000",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.subtitle}
                </h4>
                <p>{data.content}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default experience;
