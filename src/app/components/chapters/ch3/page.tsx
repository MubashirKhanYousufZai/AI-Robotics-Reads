"use client";

import React from "react";

export default function Chapter3() {
  return (
    <section className="bg-gray-50 text-gray-800 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Chapter 3: Advanced Perception
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mt-4 animate-fadeIn delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <p className="leading-relaxed text-gray-700 text-justify">
              For a humanoid to operate effectively, it must understand its
              surroundings, which requires{" "}
              <strong className="text-indigo-600">Advanced Perception</strong>.
              This chapter begins with{" "}
              <strong className="text-purple-600">
                Computer Vision for 3D Worlds
              </strong>
              , covering Monocular, Stereo, and Depth (LiDAR/RGB-D) sensing
              technologies. Robots use these methods to perceive spatial
              structures, identify objects, and recognize obstacles in dynamic
              environments.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
            <p className="leading-relaxed text-gray-700 text-justify">
              We explore Image Processing techniques such as{" "}
              <strong className="text-indigo-600">Feature Extraction</strong>{" "}
              and{" "}
              <strong className="text-purple-600">Image Segmentation</strong>,
              which allow robots to detect and classify objects. Convolutional
              Neural Networks (CNNs) and modern vision transformers enable
              robust perception under varying lighting, occlusions, and
              environmental conditions.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-400">
            <p className="leading-relaxed text-gray-700 text-justify">
              Accurate localization is another key challenge, addressed by{" "}
              <strong className="text-indigo-600">
                Simultaneous Localization and Mapping (SLAM)
              </strong>
              . Algorithms include Iterative Closest Point (ICP), Extended
              Kalman Filter (EKF-SLAM), Graph-SLAM, and Visual Odometry,
              enabling robots to build maps while tracking their position in
              real time.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-600">
            <p className="leading-relaxed text-gray-700 text-justify">
              Because no single sensor is perfect,{" "}
              <strong className="text-purple-600">Sensor Fusion</strong>{" "}
              techniques combine data from visual, inertial (IMU), and tactile
              sensors. Kalman Filters, Extended Kalman Filters, and
              complementary fusion methods help produce accurate and robust
              state estimates for navigation, manipulation, and balance in
              complex environments.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl animate-fadeIn delay-800">
            <p className="leading-relaxed text-gray-700 text-justify">
              Finally, we explore how perception integrates with decision-making
              and control. Advanced perception systems allow humanoids to
              anticipate human actions, adapt to dynamic obstacles, and execute
              tasks with precision. Mastering these techniques prepares students
              to design autonomous robots that can navigate, interact, and
              perform complex tasks reliably in real-world scenarios.
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
