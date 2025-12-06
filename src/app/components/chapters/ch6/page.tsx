"use client";

import React from "react";

export default function Chapter6() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 6: Learning and Manipulation
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              This chapter explores how humanoids learn skills and interact with
              objects.
              <strong className="text-indigo-600">
                Reinforcement Learning (RL)
              </strong>{" "}
              in robotics enables robots to learn optimal policies through trial
              and error within a Markov Decision Process (MDP). We introduce{" "}
              <strong className="text-purple-600">
                Policy Gradient methods
              </strong>{" "}
              such as PPO and A2C for locomotion and manipulation tasks.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-indigo-600">Deep Q-Networks (DQN)</strong>{" "}
              are used to learn discrete actions for robot tasks, providing
              value-based reinforcement learning. Simulation environments allow
              safe and fast experimentation. Transfer to physical robots
              requires bridging the{" "}
              <strong className="text-purple-600">Sim2Real gap</strong> using
              domain randomization and calibration.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              For physical interaction,{" "}
              <strong className="text-purple-600">
                grasping and dexterity
              </strong>{" "}
              are essential. Topics include Grasp Quality Metrics, Antipodal
              Grasping, and non-prehensile manipulation.
              <strong className="text-indigo-600">Tactile sensing</strong>{" "}
              allows the robot to adjust grip based on object texture and force
              feedback, enabling precise and safe manipulation.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-purple-600">
                Learning from Demonstration (LfD)
              </strong>{" "}
              allows robots to imitate human movements by mapping demonstrations
              to joint commands. Advanced methods may use Generative Adversarial
              Networks (GANs) to create robust policies and adapt learned
              behaviors to variations in objects, tasks, or environments.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Integration of learning and manipulation enables humanoids to
              perform autonomous, complex tasks in real-world environments.
              Combining perception, planning, RL, and LfD ensures robots can
              adapt to new situations, manipulate objects efficiently, and
              improve their skills over time. Mastery of these concepts is
              crucial for building intelligent, physically capable humanoid
              robots.
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
