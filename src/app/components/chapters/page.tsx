import Image from "next/image";

export default function CardsSection() {
  const chapters = [
    {
      id: 1,
      title: "Defining The Principles",
      subtitle: "Chapter 1",
      description:
        "This chapter covers the basics of AI, Robotics, and humanoid design.",
      img: "/ch1.png",
      link: "/components/chapters/ch1",
    },
    {
      id: 2,
      title: "The Fusion of AI and Humanoids",
      subtitle: "Chapter 2",
      description:
        "This chapter explains AIs role in enabling humanoid autonomy.",
      img: "/ch2.png",
      link: "/components/chapters/ch2",
    },
    {
      id: 3,
      title: "Advanced Perception",
      subtitle: "Chapter 3",
      description:
        "This chapter covers how humanoids perceive and understand their environment.",
      img: "/ch3.png",
      link: "/components/chapters/ch3",
    },
    {
      id: 4,
      title: "Human-Robot Interaction (HRI)",
      subtitle: "Chapter 4",
      description:
        "This chapter covers how humanoids communicate and interact socially with humans.",
      img: "/ch4.png",
      link: "/components/chapters/ch4",
    },
    {
      id: 5,
      title: "Motion and Locomotion",
      subtitle: "Chapter 5",
      description:
        "This chapter covers how AI enables humanoid movement and balance.",
      img: "/ch5.png",
      link: "/components/chapters/ch5",
    },
    {
      id: 6,
      title: "Learning and Manipulation",
      subtitle: "Chapter 6",
      description:
        "This chapter covers humanoids learning and manipulating objects with AI.",
      img: "/ch6.png",
      link: "/components/chapters/ch6",
    },
    {
      id: 7,
      title: "Safety, Trust, and Regulation",
      subtitle: "Chapter 7",
      description:
        "This chapter covers safety, ethics, and societal impacts of humanoid robots and AI.",
      img: "/ch7.png",
      link: "/components/chapters/ch7",
    },
    {
      id: 8,
      title: "The Road Ahead",
      subtitle: "Chapter 8",
      description:
        "This chapter explores the future of AI and humanoids, including AGI and collaborative robots.",
      img: "/ch8.png",
      link: "/components/chapters/ch8",
    },
  ];

  return (
    <section className="body-font bg-gray-50 text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}
        <div className="flex flex-wrap w-full mb-12 items-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              AI & Robotics Reads
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Explore chapters covering the fusion of Artificial Intelligence and
            Humanoid Robotics, from fundamentals to future insights.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="xl:w-1/4 md:w-1/2 p-4">
              <a href={chapter.link} className="block h-full">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer h-full flex flex-col">
                  {/* Image with overlay */}
                  <div className="relative h-48 w-full flex-shrink-0">
                    <Image
                      src={chapter.img}
                      alt={chapter.title}
                      className="object-cover w-full h-full"
                      width={720}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs text-indigo-600 font-semibold tracking-widest mb-1">
                        {chapter.subtitle}
                      </h3>
                      <h2 className="text-lg font-bold text-gray-900 mb-3">
                        {chapter.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
