import { useEffect, useState } from "react";
import sybill from "../assets/person/sybill.gif";
import McGonagall from "../assets/person/McGonagall.gif";
import dumbelldor from "../assets/person/dumbelldor.gif";
import Snape from "../assets/person/Snape.gif";
import Hagrid from "../assets/person/Hagrid.gif";
import nurse from "../assets/person/nurse.gif";

import "../styles/theme.css";

const Theme = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    let observer = null;

    const handleObserver = (entries) => {
      requestAnimationFrame(() => {
        setVisibleSections((prev) => {
          const updatedSections = { ...prev };
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updatedSections[entry.target.id] = true;
            }
          });
          return updatedSections;
        });
      });
    };

    observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% is visible
    });

    document.querySelectorAll(".theme-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const sections = [
    {
      title: "WEB3 AND BLOCKCHAIN",
      description:
        "Step into a world where Blockchain is the Elder Wand, empowering users to own their data and reshape digital realms. At Hacknovate 6.0, visionary wizards and tech sorcerers will unite to craft decentralized spells—disrupting industries, revolutionizing systems, and forging the future with groundbreaking innovations.",
      image: McGonagall,
      isRight: false,
    },
    {
      title: "OPEN INNOVATION",
      description:
        "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
      image: dumbelldor,
      isRight: true,
    },
    {
      title: "CYBERSECURITY",
      description:
        "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
      image: Hagrid,
      isRight: false,
    },
    {
      title: "AI/ MACHINE LEARNING",
      description:
        "Enter the Forbidden Section of knowledge, where Artificial Intelligence and Machine Learning wield the power to transform industries. From predictive magic to self-learning enchantments, this track is for those who dare to create intelligent, self-evolving spells—reshaping the future of automation, analytics, and decision-making!",
      image: Snape,
      isRight: true,
    },
    {
      title: "HEALTHCARE AND WELLNESS",
      description:
        "Join us in promoting healthcare innovation and wellness! Gain brand visibility, network with industry leaders, and showcase cutting-edge solutions. Sponsorship benefits include speaking opportunities, exhibition space, branding, and community engagement. Partner with us to make a lasting impact on healthcare.",
      image: nurse,
      isRight: false,
    },
    {
      title: "AR / VR",
      description:
        "Why just read about the Wizarding World when you can step right into it? With Augmented and Virtual Reality, create immersive experiences that blur the lines between fantasy and reality. From holographic spellcasting to interactive magical realms, let your imagination soar beyond the limits of the ordinary world!",
      image: sybill,
      isRight: true,
    },
  ];

  return (
    <div className="border-t-4 border-slate-800 border-t-0 pb-8">
      <div className="min-h-screen text-white font-serif px-4 md:px-12 ">
        <div className="w-full px-4 py-12 max-lg:relative max-lg:-top-6">
          <div className="max-w-6xl mx-auto flex justify-center text-center">
            <h1 className="themetitle text-black text-xl md:text-5xl font-bold mb-6 text-center mt-4 border-b-8 border-black inline-block ">
              Hacknovate 6.0: Unveils Its Magical Theme!
            </h1>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slide {
            animation: slideIn 0.8s ease-out forwards;
          }

          .hidden-section {
            opacity: 0;
          }
        `}</style>

        {sections.map((section, index) => (
          <section
            id={`theme-section-${index}`}
            key={index}
            className={`theme-section relative w-full bg-black mb-4 border border-black  max-lg:relative max-lg:-top-12  
              ${
                section.isRight
                  ? "rounded-r-full rounded-t-full"
                  : "rounded-l-full rounded-t-full"
              } 
              overflow-hidden 
              ${
                visibleSections[`theme-section-${index}`]
                  ? "animate-slide"
                  : "hidden-section"
              }`}
          >
            <div className="hidden md:block">
              <div
                className={`flex items-center ${
                  section.isRight ? "pl-8" : "pr-16"
                }`}
              >
                {!section.isRight && (
                  <div className="w-[12rem] h-[12rem] relative right-[1.9rem] flex-shrink-0">
                    <div className="absolute inset-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      <div className="w-full h-full relative">
                        <div
                          className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                          style={{
                            clipPath:
                              "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                            boxShadow:
                              "0 0 0 4px white, 0 0 15px 5px rgba(255,255,255,0.3)",
                          }}
                        >
                          <img
                            src={section.image}
                            alt="Pentagon Logo"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  className={`theme-text-dev flex-1 ${
                    section.isRight ? "text-left" : "text-right"
                  }`}
                >
                  <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
                    <div className="text-yel"> {section.title} </div>
                  </h2>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {section.description}
                  </p>
                </div>

                {section.isRight && (
                  <div className="w-[12rem] h-[12rem] relative right-[-1.9rem] flex-shrink-0">
                    <div className="absolute inset-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      <div className="w-full h-full relative">
                        <div
                          className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                          style={{
                            clipPath:
                              "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                            boxShadow:
                              "0 0 0 4px white, 0 0 15px 5px rgba(255,255,255,0.3)",
                          }}
                        >
                          <img
                            src={section.image}
                            alt="Pentagon Logo"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden relative h-48">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${section.image})`,
                  filter: "grayscale(100%)",
                }}
              ></div>

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h2 className="text-2xl font-bold text-center px-4">
                  <div
                    className="text-yellow-500"
                    style={{ textShadow: "2px 2px 4px rgb(0, 0, 0)" }}
                  >
                    {section.title}
                  </div>
                </h2>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Theme;
