"use client";

import React from "react";

export default function Chapter5() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 5: Motion and Locomotion
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              This chapter focuses on AI-driven humanoid movement. Motion begins
              with{" "}
              <strong className="text-indigo-600">
                Classical Path Planning
              </strong>
              , navigating the robots Configuration Space (C-space).
              <strong className="text-purple-600">
                Sampling-based planners
              </strong>{" "}
              (RRT, PRM) and{" "}
              <strong className="text-indigo-600">search-based planners</strong>{" "}
              (A*) ensure safe movement around obstacles for arms, legs, or
              torso.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              Bipedal locomotion is the biggest challenge.{" "}
              <strong className="text-purple-600">
                Zero Moment Point (ZMP)
              </strong>{" "}
              defines the center of pressure to maintain balance. Robots
              contrast dynamic walking with quasi-static walking.{" "}
              <strong className="text-indigo-600">
                Central Pattern Generators (CPGs)
              </strong>{" "}
              generate rhythmic motion patterns for legs and arms.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-purple-600">
                Whole-Body Control (WBC)
              </strong>{" "}
              allows simultaneous management of all joints, prioritizing tasks
              such as balance over end-effector accuracy. This involves
              optimization strategies and trade-offs between{" "}
              <strong className="text-indigo-600">torque control</strong> and{" "}
              <strong className="text-purple-600">position control</strong>.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Locomotion planning is enhanced with{" "}
              <strong className="text-indigo-600">terrain perception</strong>{" "}
              using sensors such as LiDAR and depth cameras. Humanoids predict
              foot placement and adapt step length and velocity for rough or
              dynamic surfaces. Integration with balance control ensures robust
              performance even during unexpected perturbations.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, motion and locomotion integrate perception, planning, and
              control into cohesive behavior. AI algorithms allow humanoids to
              walk, run, climb stairs, and manipulate objects in complex
              environments. Mastery of these techniques equips students to build
              autonomous robots capable of safe, adaptive, and goal-directed
              movement in real-world scenarios.
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
