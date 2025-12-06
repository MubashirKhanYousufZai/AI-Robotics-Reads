"use client";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="text-gray-700 body-font bg-gray-50">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-24">
        {/* Text Content */}
        <div className="lg:flex-grow lg:w-1/2 lg:pr-12 lg:mb-0 mb-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-bold text-gray-900">
            About AI & Humanoid Robotics
          </h1>
          <p className="leading-relaxed text-lg text-gray-700 mb-6">
            Artificial Intelligence (AI) and Humanoid Robotics are two closely
            intertwined fields that aim to create machines capable of performing
            tasks with human-like intelligence and physical ability. AI provides
            the cognitive foundation for humanoids, enabling them to perceive
            their environment, make decisions, learn from experience, and
            interact naturally with humans.
          </p>
          <p className="leading-relaxed text-lg text-gray-700 mb-6">
            Core AI techniques such as computer vision, natural language
            processing, reinforcement learning, and path planning allow robots
            to understand their surroundings, recognize objects and human
            emotions, and plan complex movements. Humanoid robotics, on the
            other hand, focuses on the mechanical and control aspects, including
            bipedal locomotion, joint coordination, sensor integration, and
            dexterous manipulation.
          </p>
          <p className="leading-relaxed text-lg text-gray-700">
            By combining AI with advanced robotic design, humanoids can navigate
            unstructured environments, perform social interactions safely, and
            execute physical tasks with precision. Together, these fields are
            driving the development of intelligent, autonomous machines that can
            assist, collaborate with, and enhance human life in diverse domains.
          </p>
        </div>

        {/* Image / Illustration */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <Image
              className="object-cover object-center w-full h-full"
              src="/hero.png"
              alt="AI and Humanoid Robotics Illustration"
              width={384}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
