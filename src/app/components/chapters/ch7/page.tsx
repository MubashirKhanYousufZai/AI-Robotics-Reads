"use client";

import React from "react";

export default function Chapter7() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 7: Safety, Trust, and Regulation
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              As humanoids become more capable,{" "}
              <strong className="text-indigo-600">safety and ethics</strong>{" "}
              become critical. We explore{" "}
              <strong className="text-purple-600">
                Robot Safety Standards
              </strong>
              , including ISO 10218, Emergency Stop (E-Stop) implementation, and
              robust fail-safe designs to protect humans.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-indigo-600">
                Ethical Frameworks for AI
              </strong>{" "}
              are covered, focusing on Transparency, Accountability, Fairness,
              and Explainability (TAFE). We also discuss bias in training data
              and its impact on robot behavior, ensuring that decision-making
              remains human-aligned and trustworthy.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              <strong className="text-purple-600">
                Legal and Societal Impacts
              </strong>{" "}
              include data privacy, liability in autonomous decisions, and the
              effects of automation on workforce displacement. Developers must
              consider regulatory frameworks and public safety to prevent misuse
              of humanoids in sensitive applications.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Building{" "}
              <strong className="text-indigo-600">
                Trust and Human-Robot Collaboration
              </strong>{" "}
              is key for acceptance. Strategies include transparent behavior,
              consistent reliability, and explainable decision-making. Proper
              communication of robot capabilities and limitations strengthens
              user confidence.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we look to the future of regulation, governance, and
              continuous monitoring of humanoid deployment. Establishing robust
              standards, ethical guidelines, and safety protocols ensures that
              humanoids evolve responsibly and remain aligned with societal
              values.
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
