"use client";

import React from "react";

export default function Chapter1() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 1: Defining the Disciplines
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              This chapter establishes the core terminology and historical
              context for both Artificial Intelligence and Robotics. In the
              realm of Artificial Intelligence (AI), we differentiate between{" "}
              <strong className="text-indigo-600">Strong AI</strong>{" "}
              (human-level cognition capable of reasoning, learning, and
              decision-making across domains) and{" "}
              <strong className="text-purple-600">Weak AI</strong> (specialized
              systems performing a single task like virtual assistants or
              recommendation engines). Understanding these distinctions is
              crucial, as it shapes the expectations, applications, and
              limitations of modern AI technologies.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              We also examine the spectrum from{" "}
              <strong className="text-indigo-600">Narrow AI</strong>, which
              excels in one domain, to the elusive{" "}
              <strong className="text-purple-600">General AI (AGI)</strong>,
              which aspires to perform any intellectual task a human can.
              Furthermore, the historical debate between{" "}
              <strong className="text-indigo-600">Symbolic AI</strong>{" "}
              (rule-based, logic-driven) and{" "}
              <strong className="text-purple-600">Connectionist AI</strong>{" "}
              (neural networks that learn patterns from data) provides insight
              into the evolution of machine intelligence. These foundational
              concepts allow students to critically evaluate modern AI systems.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              Concurrently, Robotics is introduced as the study of machines that
              can interact with the physical world. Mechanics, control theory,
              and kinematics form the backbone of this discipline. Students
              explore{" "}
              <strong className="text-purple-600">
                Forward and Inverse Kinematics
              </strong>{" "}
              to understand how joints and limbs move, while{" "}
              <strong className="text-indigo-600">Dynamics</strong> analyzes
              forces and torques acting on a system. Actuators, sensors, and
              controllers are examined in detail, highlighting the importance of
              hardware-software integration in autonomous systems.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Control systems are further classified into{" "}
              <strong className="text-purple-600">Open-loop</strong> (predefined
              commands) and{" "}
              <strong className="text-indigo-600">Closed-loop</strong>{" "}
              (feedback-based) architectures. Closed-loop systems, for instance,
              allow robots to adapt their actions in real-time, ensuring
              stability and accuracy. This knowledge is critical when designing
              humanoid robots that must balance, walk, and manipulate objects
              precisely while responding to dynamic environments.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we explore the{" "}
              <strong className="text-indigo-600">Humanoid Form Factor</strong>.
              Designing robots to resemble humans involves considerations of{" "}
              <strong className="text-purple-600">Anthropomorphism</strong>,{" "}
              <strong className="text-indigo-600">
                Degrees of Freedom (DoF)
              </strong>
              , and balance. Landmark robots such as ASIMO and Atlas demonstrate
              solutions to bipedal locomotion, manipulation, and sensory
              integration. Understanding these mechanical and cognitive
              principles sets the stage for integrating AI into physically
              capable, human-like machines, forming the foundation for the
              chapters ahead.
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
