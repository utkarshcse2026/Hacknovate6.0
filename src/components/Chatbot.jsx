import React, { useState, useEffect, useRef } from "react";

// Function to calculate Levenshtein distance (fuzzy matching)
const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

// Predefined questions and answers
const questionsAndAnswers = [
  {
    question: "What is Hacknovate 6.0?",
    answer:
      " Hacknovate 6.0 is a 24-hour hybrid hackathon, flagship event of ABES Institute of Technology, designed to bring together innovative minds to build groundbreaking solutions. Participants will collaborate, code, and compete for exciting prizes while gaining hands-on experience. It is happening on 4th-5th April, 2025.",
  },
  {
    question: "How can I register for the hackathon?",
    answer:
      "You can register for Hacknovate 6.0 by visiting our official website and filling out the registration form.",
  },
  {
    question: "Is there an age limit for participation?",
    answer:
      " There is no specific age limit; however, participants must be at least 16 years old. Minors must provide parental consent.",
  },
  {
    question: "Can I participate if I am from a different country?",
    answer:
      " Yes, Hacknovate 6.0 welcomes international participants. However, ensure you meet the event’s participation requirements.",
  },
  {
    question: "What are the eligibility criteria for participation?",
    answer:
      " Participants must be college students with an interest in technology and innovation. They must also have a valid student ID",
  },
  {
    question: "Can I participate individually, or do I need a team?",
    answer:
      " You can participate in a team of 3-4 members. Team formation can be done during registration.",
  },
  {
    question: "Can I participate even if I am a beginner?",
    answer:
      "  Yes, beginners are encouraged to participate. Mentors will be available to guide and support you throughout the event.",
  },
  {
    question: "Will there be certificates for participation?",
    answer:
      " Yes, all participants will receive an official certificate of participation.",
  },
  {
    question: "What happens if I miss a deadline?",
    answer:
      "  Missing a deadline may result in disqualification. Ensure you adhere to all submission timelines provided in the hackathon schedule.",
  },
  {
    question: "What is the schedule for the hackathon?",
    answer:
      "  The complete schedule will be available on our official website and communication channels. Stay updated for detailed timelines.",
  },
  {
    question: "Where can I find the list of rules and guidelines?",
    answer:
      "  Rules and guidelines will be available on our official website and sent via email upon successful registration.",
  },
  {
    question: " Are there any predefined themes or open innovation categories?",
    answer:
      " Yes, Hacknovate 6.0 features multiple tracks, including Web3, AI/ML, Cybersecurity, AR/VR, and Open Innovation. Participants can choose to work on any of these themes.",
  },
  {
    question: "What happens if my project is incomplete at the deadline?",
    answer:
      "  Partially completed projects can still be submitted; however, they may not be scored as highly as completed projects. Ensure you submit your work before the deadline.",
  },
  {
    question: "How do I find teammates for the hackathon?",
    answer:
      "You can find teammates through our Discord community, networking events, or dedicated team formation sessions.",
  },
  {
    question: "Is there a Discord channel for team discussions?",
    answer:
      " Yes, a Discord server will be provided for discussions, networking, and announcements. All registered participants will receive an invite link.",
  },
  {
    question: "Can I change my team after registration?",
    answer:
      " Teams can be modified before the hackathon starts. Post-event commencement, team changes will not be allowed.",
  },
  {
    question: "What tools do you recommend for remote collaboration?",
    answer:
      "  Recommended tools include GitHub, Google Drive, Slack, Discord, and Zoom for effective collaboration.",
  },
  {
    question: " How do I submit my project?",
    answer:
      "  Projects must be submitted via the designated submission portal before the deadline. Details will be shared in advance.",
  },
  {
    question: "Where can I check the status of my project submission?",
    answer:
      " Submission status can be tracked through the official hackathon portal or by contacting the organizing team.",
  },
  {
    question: "Can I submit multiple projects?",
    answer:
      "No, each team or individual can submit only one project. Ensure you submit your best work.",
  },
  {
    question: "Do I need to provide a GitHub repository link?",
    answer:
      " Yes, a GitHub repository link is required for code submission and evaluation.",
  },
  {
    question: "Do I need to submit a presentation along with my project?",
    answer:
      " Yes, teams must submit a short presentation summarizing their project, approach, and innovation.",
  },
  {
    question: "Which programming languages can I use?",
    answer:
      " Participants are free to use any programming language suitable for their project.",
  },
  {
    question: "Are there any suggested problem statements for Hacknovate 6.0?",
    answer:
      "Yes, suggested problem statements will be shared before the hackathon. Open innovation is also encouraged.",
  },
  {
    question: "Can you suggest a project idea based on my interests?",
    answer:
      " Yes, mentors and organizers can help you brainstorm ideas based on your interests and skills.",
  },
  {
    question: "What are the judging criteria for the hackathon?",
    answer:
      "Projects will be judged on innovation, feasibility, impact, technical complexity, and presentation quality.",
  },
  {
    question: " How is innovation measured in the evaluation process?",
    answer:
      "Innovation is assessed based on originality, creativity, and potential real-world application.",
  },
  {
    question: "How will my project be scored?",
    answer:
      "Projects are scored based on predefined judging criteria, with weightage given to creativity, execution, and impact.",
  },
  {
    question: "What makes a winning project stand out?",
    answer:
      "Winning projects demonstrate innovation, technical excellence, feasibility, and a well-articulated presentation.",
  },
  {
    question: "Will there be live pitching or just project submission?",
    answer:
      "Finalists may be required to present their projects to the judges during a live pitching session.",
  },
  {
    question: "Who are the judges for Hacknovate 6.0?",
    answer:
      "Judges include industry experts, professors, and professionals from relevant fields.",
  },
  {
    question: " Will feedback be provided for my submission?",
    answer:
      "Yes, teams will receive feedback on their projects from the judges.",
  },
  {
    question: "What are the prize categories in Hacknovate 6.0?",
    answer:
      "Hacknovate 6.0 offers multiple prizes, including Best Overall Project, Best Beginner Project, and sponsor specific awards.",
  },
  {
    question: "Are there any special awards for beginners or student teams?",
    answer:
      "Yes, there are awards recognizing beginner teams and student-led innovations.",
  },
  {
    question: " When will the winners be announced?",
    answer:
      " Winners will be announced at the closing ceremony, and details will be shared on our official platforms.",
  },
  {
    question: "How will the prize money be distributed?",
    answer:
      "Prize money will be distributed as per the terms and conditions outlined during registration.",
  },
  {
    question: " How can I contact the support team?",
    answer:
      "You can reach out via our official email, website, or Discord channel for any queries.",
  },
  {
    question: "What is the theme for Hacknovate 6.0?",
    answer:
      "The theme for Hacknovate 6.0 is inspired by the magical world of Harry Potter, with challenges that blend creativity and technology.",
  },
  {
    question: "Are there any restrictions on the tech stack I can use?",
    answer:
      "No, participants can use any technology stack suitable for their projects.",
  },
  {
    question: "Will there be mentor support during the event?",
    answer:
      " Yes, experienced mentors will be available to guide participants throughout the hackathon.",
  },
  {
    question: "Can I work on an idea I have already started before the hackathon?",
    answer:
      " Yes, old projects are welcomed as long as they bring innovative improvements or new features developed during the hackathon.",
  },
  {
    question: "Do I need to submit a business model along with my technical project?",
    answer:
      "While not mandatory, a business model can enhance the impact and feasibility of your project.",
  },
  {
    question: "Can my team work on multiple problem statements?",
    answer:
      "No, each team must focus on one problem statement for their submission.",
  },
  {
    question: "Is there a participation fee for the hackathon?",
    answer:
      " No, Hacknovate 6.0 is free for all participants.",
  },
   {
    question: "How can I stay updated with hackathon announcements?",
    answer:
      "Follow our official website, social media pages, and join our Discord for the latest updates.",
  },
  {
    question: "Is there a parking facility available at the venue?",
    answer:
      "Yes, a dedicated parking slot is available, but the responsibility for the vehicle remains with the owner.",
  },
  {
    question: "If a participant is coming from a distant location, will they receive reimbursement for travel?",
    answer:
      "No, travel expenses will not be reimbursed.",
  },
  {
    question: " Will food and sleeping arrangements be provided?",
    answer:
      "Yes, food will be available, and proper sleeping arrangements will be made for participants.",
  },
  {
    question: "What is the last date of registration?",
    answer:
      "The last date of registration is 25th March 2025.",
  },
  
  
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage chatbot visibility
  const messagesEndRef = useRef(null); // Ref for auto-scrolling to the latest message

  const handleQuestion = (question) => {
    if (!question.trim()) return;
    
    // Find the closest matching question using Levenshtein distance
    let closestMatch = questionsAndAnswers.reduce(
      (prev, curr) => {
        const distance = levenshteinDistance(question.toLowerCase(), curr.question.toLowerCase());
        if (distance < prev.distance) {
          return { question: curr.question, answer: curr.answer, distance };
        }
        return prev;
      },
      { question: "", answer: "", distance: Infinity }
    );

    // If the closest match is within a reasonable threshold, use it
    const answer =
      closestMatch.distance <= 80 // Adjust threshold as needed
        ? closestMatch.answer
        : "I'm sorry, I don't have an answer to that question.";

    // Add new messages instead of replacing all messages
    setMessages([
      ...messages,
      { type: "user", text: question, id: Date.now() },
      { type: "bot", text: answer, id: Date.now() + 1, isNew: true }
    ]);
    setInput("");
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Remove the isNew flag after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(messages.map(msg => ({ ...msg, isNew: false })));
    }, 3000); // Match animation duration
    
    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-20 fixed w-20 h-20 bottom-4 flex justify-center align-center items-center  text-2xl right-12  md:right-4 p-4 bg-black text-white rounded-full  hover:bg-black transition-all"
      >
              <span
                style={{
                  color: "#FFD700", // Gold color
                  textShadow: "0 0 5px #FFD700, 0 0 15px #FFA500, 0 0 20px #FF8C00", // Initial glow
                  fontWeight: "bold",
                  fontSize : "2rem",
                  
                  animation: "glow 1.5s infinite alternate", // Apply animation
                }}
              >
                {isOpen ? "✕" : "📜"}

                {/* Adding animation inside a <style> tag */}
                <style>
                  {`
                    @keyframes glow {
                      0% {
                        text-shadow: 0 0 5px #FFD700, 0 0 10px #FFA500, 0 0 15px #FF8C00;
                      }
                      50% {
                        text-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00;
                      }
                      100% {
                        text-shadow: 0 0 5px #FFD700, 0 0 10px #FFA500, 0 0 15px #FF8C00;
                      }
                    }
                  `}
                </style>
              </span>


      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div
          className="z-20 fixed bottom-24 right-4 w-[18rem] h-[30rem] bg-cover bg-center rounded-lg shadow-2xl flex flex-col"
          style={{ backgroundImage: "url('https://youve-reached-the-apex.weebly.com/uploads/7/1/8/8/71880077/2620393_orig.jpg')" }}
        >

          <style>
            {`
              @keyframes blurInUp {
                0% {
                  opacity: 0;
                  filter: blur(10px);
                  transform: translateX(0px);
                }
                100% {
                  opacity: 1;
                  filter: blur(0);
                  transform: translateX(0);
                }
              }
              
              .message-animation {
                animation: blurInUp 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              
              /* Custom Scrollbar Styles */
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                transition: all 0.3s ease;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.5);
              }
              
              /* For Firefox */
              .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 0, 0, 0.3) rgba(255, 255, 255, 0.1);
              }
            `}
          </style>
          
          <div className="flex-1 italic mt-4 ml-2 p-4 overflow-y-auto text-left custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`text-left p-2 rounded-lg w-full ${
                  msg.type === "user" ? "bg-transparent text-black ml-auto" : "bg-transparent text-gray-800"
                } ${msg.type === "bot" && msg.isNew ? "message-animation" : ""}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>
          <div className="p-4 text-black">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleQuestion(input)}
              placeholder="Type your question..."
              className="w-[90%] italic placeholder-black  mx-4 p-4 bg-transparent text-black outline-none border-t-4 border-gray-500"
            />
            
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;