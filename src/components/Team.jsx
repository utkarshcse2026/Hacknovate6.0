import React from 'react';
import { FaLinkedin } from "react-icons/fa";
// Import images from your assets
import gringots from "../assets/team/gringots.png";
import raunak from "../assets/team/raunak.jpg";
import nikita from "../assets/team/nikita.jpg";
import ragini from "../assets/team/ragini.jpeg";
import social from "../assets/team/social.jpeg";
import reven from "../assets/team/raven.jpeg";
import design from "../assets/team/design.jpeg";
import me from "../assets/team/me2.jpeg";
import mathur from "../assets/team/mathur.jpeg";
import abhinav from "../assets/team/image.png";
import vidhi from "../assets/team/image2.png";
import techteam from "../assets/team/image3.png";
import vani from "../assets/team/vani.png";
// Import other images as needed

const TeamSection = ({ title, image, members, description }) => {
  return (
    <div className="newspaper-section border-b-2 border-black pb-6 mb-6">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="md:w-1/2 relative group">
          <img src={image} alt={title} className="w-full h-full object-cover max-h-100" />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
  {/* Names in one line */}
  <div className="flex flex-wrap justify-center space-x-4 mb-2">
    {members.map((member, index) => (
      <span key={index} className="text-lg font-semibold">{member.name}</span>
    ))}
  </div>
  
  {/* LinkedIn icons in one line below */}
          <div className="flex flex-wrap justify-center space-x-4">
            {members.map((member, index) =>
              member.linkedin ? (
                <a
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              ) : null
            )}
          </div>
        </div>

          
        </div>
        <div className="md:w-1/2">
          <p className="text-sm text-justify leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamData = [
    {
      title: "Tech Lead",
      image: nikita,
      members: [
        { name: "Nikita", role: "Tech Lead", linkedin: "https://www.linkedin.com/in/nikita-kumari2004/" }
      ],
      description: (
        <>
          Meet our <span className="font-bold">Hermione</span>—the Tech & Design Sorceress of{" "}
          <span className="font-bold">Hacknovate 6.0</span>! With her exceptional skills and boundless creativity,
          she works her magic as the Tech Lead, Social Media Lead, and UI of the official website of{" "}
          <span className="font-bold">Hacknovate 6.0</span>, weaving together an experience as seamless as casting{" "}
          <span className="font-bold">Wingardium Leviosa</span>.
        </>
      )
    },
    {
      title: "Tech Lead",
      image: me,
      members: [
        { name: "Prince", role: "Tech Lead", linkedin: "https://www.linkedin.com/in/prince-sharma-047973253/" }
      ],
      description: (
        <>
          Every great hackathon needs a sharp mind with an edge, and <span className="font-bold">Malfoy</span> brings
          his signature mastery to the technical team of <span className="font-bold">Hacknovate 6.0</span>. With the cunning
          of a true strategist and the precision of a perfectly brewed potion, he ensures the tech runs flawlessly—because in his world,
          excellence isn’t a choice, it’s a legacy.
        </>
      )  
    },
    {
      title: "Discord Admin",
      image: mathur,
      members: [
        { name: "Pratyush", role: "Discord Admin", linkedin: "https://www.linkedin.com/in/pratyush-mathur-35a1a2251/" },
      
      ],
      description: (
        <>
          Like <span className="font-bold">James Potter</span> guiding young wizards, he built the{" "}
          <span className="font-bold">Hacknovate 6.0 Discord Realm</span>, the backbone of our online hackathon. As the Master of the{" "}
          <span className="font-bold">Floo Network</span>, he ensures smooth communication, seamless collaboration.
        </>
      )  
    },
    {
      title: "Creative Lead",
      image: ragini,
      members: [
        { name: "Ragini", role: "Creative Lead", linkedin: "https://www.linkedin.com/in/ragini-pathak/" }
      ],
      description: (
        <>
          The <span className="font-bold">Luna Lovegood</span> brings the whimsical creativity, dreaming up ideas as unique as a{" "}
          <span className="font-bold">Crumple-Horned Snorkack</span>, magical as a{" "}
          <span className="font-bold">Care of Magical Creatures</span> lesson.
        </>
      )  
    },
    {
      title: "Social Lead",
      image: raunak,
      members: [
        { name: "Raunak", role: "Social lead", linkedin: "https://www.linkedin.com/in/raunak-singh-2b747518a/" },
      
      ],
      description: (
        <>
          Meet <span className="font-bold">Skeeter</span>—our Social Media Lead and the (way more ethical){" "}
          <span className="font-bold">Rita Skeeter</span> of <span className="font-bold">Hacknovate 6.0</span>! With a{" "}
          <span className="font-bold">Quick-Quotes Quill</span> and a sharp strategy, he spreads the magic far and wide!
        </>
      )  
    }
  ];

  const managementTeams = [
    {
      title: "COORDINATORS",
      image: abhinav,
      members: [
        { name: "Abhinav", linkedin: "https://www.linkedin.com/in/abhinav-gupta-cs/" },
        { name: "Keshav", linkedin: "https://www.linkedin.com/in/keshav-bajaj-15b4181a8/" },
        { name: "Sushant", linkedin: "https://www.linkedin.com/in/sushant2021cs101/" }
      ],
      description: (
        <>
          The <span className="font-bold">"Harry Potter, Neville Longbottom, and Ron Weasley"</span> trio—each bringing their unique strengths to the table.{" "}
          <span className="font-bold">Harry</span>, the fearless leader, charges ahead with determination and courage, inspiring the team to face challenges head-on.{" "}
          <span className="font-bold">Neville</span>, the unexpected hero, rises to the occasion when it matters most, proving that resilience and growth lead to greatness.{" "}
          <span className="font-bold">Ron</span>, the loyal strategist, keeps the team grounded with his sharp thinking, quick wit, and unwavering support.{" "}
          Together, they navigate every challenge like a <span className="font-bold">Triwizard Tournament</span>, ensuring no stone (or golden egg) is left unturned.
        </>
      )
    },
    {
      title: "TECH TEAM",
      image: techteam,
      members: [
        { name: "Vishal", linkedin: "https://www.linkedin.com/in/vishal-yadav-1a7604257" },
        { name: "Utkarsh", linkedin: "https://www.linkedin.com/in/utkarshcse26" },
        { name: "Pratham", linkedin: "https://www.linkedin.com/in/prathamr85650" },
        { name: "Amit", linkedin: "https://www.linkedin.com/in/amit-verma-883150109/" },
        { name: "Aayush", linkedin: "https://www.linkedin.com/in/aayush-shukla-592467297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
      ],
      description: (
        <>
          Our <span className="font-bold">Technical Team</span>—a squad of five brilliant wizards—ensures every spell (or script) runs flawlessly! 
          Led by the <span className="font-bold">Dumbledore of Development</span>, they craft magic behind the scenes. 
          While <span className="font-bold">Prince & Nikita</span> weave spells of innovation, the rest of our tech sorcerers work as 
          <span className="font-bold"> Marauders of Debugging</span>, vanquishing bugs, 
          <span className="font-bold"> Floo Network Engineers</span>, keeping systems seamlessly connected, and 
          <span className="font-bold"> Keepers of the Forbidden Code</span>, guarding Hacknovate with security stronger than Gringotts! 
          With enchanted code and spellbinding precision, they make <span className="font-bold">Hacknovate</span> truly magical!
        </>
      )  
    }
  ];

  return (
    <div className="bg-transparent py-8">
      <div className="max-w-6xl mx-auto px-6 bg-transparent shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-center border-b-4 border-black mb-8 pb-4 pt-6">OUR TEAM</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - key team members */}
          <div className="md:col-span-2 md:border-r-2   md:border-black pr-0 md:pr-6">
            <div className="mb-8">
              <p className="italic text-lg">Just as Dumbledore's Army stood united against the Dark Arts, our team of skilled wizards and witches—masters of logic, creativity, and innovation—have come together to weave magic with code. Together, we stand as the guardians of Hacknovate 6.0</p>
            </div>
            
            {managementTeams.map((team, index) => (
              <TeamSection 
                key={index}
                title={team.title}
                image={team.image}
                members={team.members}
                description={team.description}
              />
            ))}
            
              <div className="newspaper-section border-b-2 border-black pb-6 mb-6">
              <h2 className="text-3xl font-bold mb-3">OPERATIONS</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 relative group">
                  <img src={vidhi} alt="Operations" className="w-full h-full object-cover max-h-80" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
                    <div className="flex items-center mb-1">
                      <span className="mr-2 text-lg">Vidhi</span>
                      <span className="mr-2 text-lg">Yogita</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <a href="https://www.linkedin.com/in/vidhi-rawat-8a795928b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/yogita-bisht-874464295/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-base text-justify text-sm leading-relaxed">
                  The <strong>"Minerva McGonagall and Molly Weasley"</strong> duo— a powerhouse pair who keep everything running with precision and care. <strong>McGonagall</strong>, with her sharp mind and unwavering discipline, ensures every detail is flawlessly executed, while <strong>Molly</strong>, with her warmth and resourcefulness, holds the team together through even the toughest challenges. They are the backbone of the team, working tirelessly behind the scenes, casting <strong>Impervius</strong> on chaos and making sure everything flows as smoothly as a <strong>Time-Turner's</strong> schedule.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Added DISCORD ADMIN section to fill empty space */}
            <div className="newspaper-section pb-6 mb-6">
  <h2 className="text-3xl font-bold mb-3">Design Team</h2>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="md:w-1/2 relative group">
      <img src={vani} alt="Design Team" className="w-full h-full object-cover max-h-80" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
        <div className="flex space-x-4 mb-2">
          <span className="text-lg">Shivangi</span>
          <span className="text-lg">Parth</span>
          <span className="text-lg">Vani</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shivangi-singh-10a900242/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/parthtyagi-design/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/vani-gupta-952125253/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="md:w-1/2">
    <p className="text-sm text-justify leading-relaxed">
  Bringing wisdom, creativity, and skill to <strong>Hacknovate 6.0</strong>, this trio guarantees a seamless and dynamic tech experience. <strong>Lovegood</strong> fuels innovation with fresh ideas and imaginative problem-solving, turning complex challenges into effortless solutions. <strong>Weasley</strong>, with his quick wit and technical expertise, ensures everything runs smoothly, tackling issues with sharp fixes and a sense of fun. <strong>Tonks</strong>, ever-adaptable and fearless, embraces challenges head-on, finding brilliant solutions with her rebellious ingenuity. Together, they blend creativity, intelligence, and adaptability to make technology feel like magic!
</p>

    </div>
  </div>
</div>

<div className="newspaper-section pb-6 mb-6">
  <div className="flex flex-col md:flex-row gap-4">
  <div className="md:w-1/2">
    <p className="text-sm text-justify leading-relaxed md:pt-12">
      Every legendary event needs master storytellers, and our Social Media Team ensures <strong>Hacknovate 6.0</strong> isn't just an event—it’s an experience that echoes across the wizarding and Muggle worlds! As the <strong>Rita Skeeters</strong> (but way more ethical!), they wield their Quick-Quotes Quills to capture every spellbinding moment, ensuring no magic goes unnoticed. Like <strong>Lee Jordan</strong>, they bring electrifying commentary, making every update feel like the finals of the <strong>Triwizard Tournament</strong>. With the vision of <strong>Xenophilius Lovegood</strong>, they weave narratives that aren’t just informative but immersive, drawing everyone into the enchantment. From captivating posts to dynamic storytelling.
    </p>

    </div>
    <div className="md:w-1/2 relative group">
      <h2 className="text-3xl font-bold mb-3 text-right">Social Media Team</h2>
      <div className=' relative group'>
      <img src={social} alt="Social Media Leads" className="w-full h-full object-cover max-h-80" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
        <div className="flex space-x-4 mb-2">
          <span className="text-lg">Abhishek</span>
          <span className="text-lg">Abhay</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/abhishek-kumar96960?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/abhay-gupta-608a5627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

<div className="newspaper-section pb-6 mb-6">
  <h2 className="text-3xl font-bold mb-3">Creative Team</h2>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="md:w-1/2 relative group">
      <img src={reven} alt="Ravenclaw Creative Team" className="w-full h-full object-cover max-h-80" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
        <div className="flex space-x-4 mb-2">
          <span className="text-lg">Zainab</span>
          <span className="text-lg">Akshay</span>
          <span className="text-lg">Lakshika</span>
          <span className="text-lg">Aditi</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/zainab-asif-14221a253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/akshay-jain-032a6b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/lakshika-bourai-4b409430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/aditi-srivastava-723898281/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="md:w-1/2">
        <p className="text-sm text-justify leading-relaxed">
        Like <strong>Ravenclaw's </strong> brightest minds, this creative team blends wisdom, imagination, and innovation to craft spellbinding content and enchanting designs. With the precision of <strong>McGonagall</strong>, they ensure every detail is flawless, the vision of <strong>Newt Scamander</strong> fuels their curiosity and creativity, and the bold flair of <strong>Tonks</strong> allows them to push boundaries fearlessly. From captivating visuals to compelling narratives, they bring Hacknovate 6.0 to life, weaving magic into every stroke, story, and idea they create—turning imagination into reality with a touch of wizarding brilliance!
        </p>

    </div>
  </div>
</div>
            
          </div>
          
          {/* Right column - team members */}
          <div className="md:col-span-1 ">
            {teamData.map((team, index) => (
              <TeamSection 
                key={index}
                title={team.title}
                image={team.image}
                members={team.members}
                description={team.description}
              />
            ))}
            
   
            <div className="newspaper-section pb-6 mb-6">
  <h2 className="text-3xl font-bold mb-3">Design Leads</h2>
  <div className="flex flex-col gap-4 relative group">
    <div className="relative">
      <img src={design} alt="Design Team" className="w-full h-auto object-cover max-h-80" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
        <div className="flex space-x-4 mb-2">
          <span className="text-lg">Shreya</span>
          <span className="text-lg">Prithvee</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shreya-asthana-b9470a250/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/prithvee-ojha-0290b0267/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div>
        <p className="text-justify text-sm leading-relaxed">
        The <strong>Remus Lupin</strong> and <strong>Ginny Weasley</strong> duo is a perfect balance of intellect and energy. <strong>Remus</strong> brings thoughtful, strategic designs as sharp as a werewolf’s instincts—his meticulous planning and deep insight ensure that every detail is refined to perfection. Meanwhile, <strong>Ginny</strong> infuses creativity and bold execution, adding flair and precision that make everything as vibrant and dynamic as a Quidditch match. Together, they craft ideas that are both powerful and elegant, seamlessly blending wisdom with innovation to create something truly magical.
        </p>

    </div>
  </div>
</div>


          </div>
        </div>
        
        {/* Bottom full-width section */}
        <div className="mt-8 border-t-2 border-black pt-6 pb-8">
        <div className="newspaper-section pb-6 mb-6">
  <h2 className="text-3xl font-bold mb-3">Sponsorship Team</h2>
  <div className="flex flex-col md:flex-row gap-6 relative group">
    <div className="md:w-1/2 relative">
      <img src={gringots} alt="Sponsorship Team" className="w-full h-auto object-cover max-h-96" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2">
        <div className="flex space-x-4 mb-2">
          <span className="text-xs md:text-lg">Suhel</span>
          <span className="text-xs md:text-lg">Himanshu</span>
          <span className="text-xs md:text-lg">Shreesh </span>
          <span className="text-xs md:text-lg">Manas</span>
          <span className="text-xs md:text-lg">Abdul</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/mohd-suhel-khan-42a335202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/hs04?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shreesh-pandey-556109249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/manas-srivastava-520149263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/itsabdul0908?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="md:w-1/2">
          <p className="text-sm text-justify leading-relaxed">
        Like the <strong>Gringotts wizards</strong> guarding the vaults, this powerhouse team ensures <strong>Hacknovate 6.0</strong> is built on the strongest foundations and backed by the most valuable alliances. With the sharp negotiation skills of <strong>Fred & George Weasley</strong>, they craft irresistible deals, turning conversations into golden opportunities. The strategic mindset of <strong>Percy Weasley</strong> keeps every partnership meticulously planned and flawlessly executed, ensuring long-term success. And with the charm of a well-cast <strong>Confundus Charm</strong>, they navigate the complexities of sponsorships with ease, securing the best support for the event. Their expertise, resourcefulness, and unwavering dedication make them the driving force behind every successful collaboration, ensuring <strong>Hacknovate 6.0</strong> thrives like a vault filled with endless possibilities.
      </p>

    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Team;