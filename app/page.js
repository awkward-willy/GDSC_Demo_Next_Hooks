"use client";
import Image from "next/image";
import profilePic from "../public/normal.jpeg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-evenly items-center h-[90vh]">
        <Image
          src={profilePic}
          alt="ProfilePicture"
          className="pt-4 m-4 w-[30vw] min-w-[250px] max-w-[400px]"
        />
        <div className="flex flex-col m-4">
          <p className="text-2xl">Hi there, 👋 </p>
          <div className="text-4xl leading-snug">
            &nbsp;My name is&nbsp;
            <RoughNotationGroup show={true}>
              <RoughNotation
                type="box"
                color="red"
                animationDuration={1200}
                strokeWidth={1}
              >
                Makabaka
                <br />
              </RoughNotation>
              <RoughNotation type="highlight" color="#F59E0B">
                &nbsp;a Student&nbsp;
                <br />
              </RoughNotation>
              <RoughNotation type="highlight" color="#84CC16">
                &nbsp;Programmer&nbsp;
                <br />
              </RoughNotation>
              <RoughNotation type="highlight" color="#10B981">
                &nbsp;Developer&nbsp;
                <br />
              </RoughNotation>
            </RoughNotationGroup>
          </div>
          <br />
          <div className="mt-4 flex flex-col leading-10">
            <a
              href="/about"
              className="text-2xl text-slate-700 before:content-['👉'] hover:after:content-['_-Click_to_GO!_🚀']"
            >
              About Me
            </a>
            <a
              href="/experience"
              className="text-2xl text-slate-700 before:content-['👉'] hover:after:content-['_-Click_to_GO!_🚀']"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
