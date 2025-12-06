"use client";

import React from "react";

export default function Chapter2() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 2: The Fusion of AI and Humanoids
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              Once the foundational disciplines of AI and Robotics are
              understood, this chapter explores why and how these fields
              converge. Humanoids require AI because their high dimensionality —
              multiple joints, sensors, and actuators — makes manual programming
              infeasible. AI enables autonomous adaptation in complex,
              unstructured environments, helping robots interact naturally with
              humans and make context-aware decisions.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              A central concept in humanoid design is{" "}
              <strong className="text-purple-600">
                Cognitive Architecture
              </strong>
              , which allows robots to sense, plan, and act. We explore the
              classic Sense-Plan-Act paradigm, comparing{" "}
              <strong className="text-indigo-600">
                Deliberative architectures
              </strong>{" "}
              (which compute carefully before acting) with{" "}
              <strong className="text-purple-600">
                Reactive architectures
              </strong>{" "}
              (which respond quickly based on current stimuli). Modern
              implementations often use{" "}
              <strong className="text-indigo-600">Behavior Trees</strong> to
              organize complex behaviors in an intuitive and scalable manner.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              Simulation plays a critical role in AI-driven humanoid
              development. Students are introduced to the{" "}
              <strong className="text-purple-600">Sim2Real</strong> problem,
              highlighting the gap between virtual training and real-world
              deployment. Virtual environments such as MuJoCo, Gazebo, and
              Webots allow safe experimentation and development of control
              policies, but transferring learned behaviors to physical robots
              requires careful calibration and adaptation.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Data-driven approaches, including reinforcement learning and
              supervised learning, are emphasized to train humanoid behaviors.
              AI algorithms allow robots to navigate, manipulate objects, and
              recognize human gestures or commands. Emphasis is placed on
              balancing computational efficiency with physical feasibility,
              ensuring robots act safely and reliably in dynamic environments.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we discuss the fusion of perception, cognition, and
              action. Effective integration allows humanoids to anticipate human
              intentions, plan multi-step actions, and execute tasks with
              precision. By the end of this chapter, students understand the
              high-level computational structures and AI techniques necessary to
              build functional humanoids capable of operating autonomously and
              safely in the real world.
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
