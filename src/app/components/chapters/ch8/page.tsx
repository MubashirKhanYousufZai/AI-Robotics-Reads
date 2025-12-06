"use client";

import React from "react";

export default function Chapter8() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 8: The Road Ahead
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              Our final chapter explores the future of AI and humanoid design.
              We examine{" "}
              <strong className="text-indigo-600">
                General AI and Embodiment
              </strong>
              , discussing the hypothesis that high-level intelligence requires
              a physical body (embodied cognition). Students are introduced to
              architectural requirements for AGI in humanoids and the
              integration of perception, action, and reasoning.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              We analyze{" "}
              <strong className="text-purple-600">
                Swarm and Collaborative Humanoids
              </strong>
              , focusing on multi-robot communication, coordination, and
              decentralized control architectures. Applications include
              cooperative search and rescue, distributed assembly lines, and
              collaborative research labs.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-indigo-600">
                Cognitive and Ethical Challenges
              </strong>{" "}
              are addressed, including decision-making under uncertainty, moral
              reasoning, and risk assessment in dynamic environments. We discuss
              frameworks to align humanoid behavior with human values and
              societal norms.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Power management, actuator resilience, and robust long-term
              operation are examined as{" "}
              <strong className="text-purple-600">
                Engineering Challenges
              </strong>
              . Students learn about redundancy, fault-tolerant design, and
              predictive maintenance for sustained humanoid performance.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we guide students toward{" "}
              <strong className="text-indigo-600">Next Steps</strong> in
              research, specialized journals, and experimental projects. The aim
              is to inspire learners to define their own path in this rapidly
              evolving field, contributing to innovation and the future of
              AI-driven humanoid robotics.
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
