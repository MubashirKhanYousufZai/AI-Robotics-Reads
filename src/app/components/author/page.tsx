"use client";

import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="text-gray-700 body-font bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        {/* Author Image */}
        <div className="md:w-1/3 w-full mb-10 md:mb-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/mubashir.webp" // replace with your actual image path
              alt="Mubashir Khan"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Author Text */}
        <div className="md:w-2/3 w-full md:pl-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <a
              href="https://mubashir-khans-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Mubashir Khan
            </a>
          </h1>
          <p className="leading-relaxed text-gray-700 text-lg md:text-xl mb-6">
            I am Mubashir Khan, a web developer and tech enthusiast from
            Karachi, trained under the Governor Sindh IT Initiative Program. I
            wrote this book with the help of AI (Gemini) as part of my hackathon
            project, aiming to simplify the complex fields of Artificial
            Intelligence and Humanoid Robotics. My goal is to make these topics
            accessible to students and beginners, providing a clear
            understanding of how intelligent systems and humanoid machines work
            together, and to inspire readers to explore and create in this
            exciting field.
          </p>
          <a
            href="https://mubashir-khans-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Visit Authors Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
