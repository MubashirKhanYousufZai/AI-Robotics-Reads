"use client";

import React from "react";

export default function Chapter4() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 4: Human-Robot Interaction (HRI)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              Humanoids require specialized capabilities for{" "}
              <strong className="text-indigo-600">
                Human-Robot Interaction (HRI)
              </strong>
              . Effective interaction starts with understanding human language
              and commands.
              <strong className="text-purple-600">
                Natural Language Processing (NLP)
              </strong>{" "}
              techniques, including command parsing, intent recognition, and
              transformer-based models, allow robots to interpret instructions
              and generate context-aware responses.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              Beyond words, robots must perceive human emotions and intentions.{" "}
              <strong className="text-indigo-600">
                Emotion and Intent Recognition
              </strong>{" "}
              uses facial expression analysis, voice tone evaluation, and
              gesture tracking. These skills enable robots to respond
              empathetically and adapt behavior dynamically, creating natural
              and safe interactions in shared environments.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              Social Robotics principles play a crucial role in HRI. Robots
              learn{" "}
              <strong className="text-purple-600">Theory of Mind (ToM)</strong>{" "}
              to predict human intentions, apply proxemics for personal space
              management, and ensure behaviors build trust. Explainable AI (XAI)
              approaches allow humans to understand robot decisions, improving
              acceptance and cooperation.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Practical HRI scenarios include collaborative workspaces,
              assistive robots, and public service applications. Robots must
              balance autonomy with human oversight, maintaining safety while
              performing tasks efficiently. Multi-modal perception, combining
              vision, audio, and touch sensors, ensures accurate context
              understanding for robust interaction.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we integrate perception, cognition, and social
              intelligence. Effective HRI enables humanoids to anticipate human
              needs, adapt dynamically, and provide assistance seamlessly. By
              the end of this chapter, students understand the principles and
              technologies needed to design robots that interact naturally,
              safely, and intelligently in human-centered environments.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-600 {
          animation-delay: 0.6s;
        }
        .animate-fadeIn.delay-800 {
          animation-delay: 0.8s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
