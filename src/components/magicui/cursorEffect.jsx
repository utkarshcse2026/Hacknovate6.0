// import { useEffect, useRef, useState } from "react";
// import feather from "../../assets/feather.png";

// const CursorEffect = () => {
//     const canvasRef = useRef(null);
//     const wandRef = useRef(null);
//     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const particles = [];

//         class Particle {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//                 this.size = Math.random() * 5 + 3; 
//                 this.speedX = (Math.random() - 0.5) * 1.5;
//                 this.speedY = (Math.random() - 0.5) * 1.5;
//                 this.opacity = 1;
//             }

//             update() {
//                 this.x += this.speedX;
//                 this.y += this.speedY;
//                 this.opacity -= 0.02;
//             }

//             draw() {
//                 ctx.save();
//                 ctx.globalAlpha = this.opacity;
//                 ctx.fillStyle = `rgba(168, 127, 59, ${this.opacity})`;
//                 ctx.shadowBlur = 8;
//                 ctx.shadowColor = "gold";
//                 ctx.translate(this.x, this.y);
//                 ctx.rotate(Math.random() * Math.PI * 2);

                
//                 ctx.beginPath();
//                 for (let i = 0; i < 5; i++) {
//                     ctx.lineTo(
//                         Math.cos((18 + i * 72) * (Math.PI / 180)) * this.size,
//                         -Math.sin((18 + i * 72) * (Math.PI / 180)) * this.size
//                     );
//                     ctx.lineTo(
//                         Math.cos((54 + i * 72) * (Math.PI / 180)) * (this.size / 2),
//                         -Math.sin((54 + i * 72) * (Math.PI / 180)) * (this.size / 2)
//                     );
//                 }
//                 ctx.closePath();
//                 ctx.fill();
//                 ctx.restore();
//             }
//         }

//         const addParticles = (e) => {
//             const wand = wandRef.current;
//             if (wand) {
//                 const wandRect = wand.getBoundingClientRect();
//                 const wandCenterX = wandRect.left + wandRect.width / 2;
//                 const wandCenterY = wandRect.top + wandRect.height / 2;

//                 const angle = (-30 * Math.PI) / 180;
//                 const tipOffsetX = (wandRect.width / 2) * Math.cos(angle);
//                 const tipOffsetY = (wandRect.height / 2) * Math.sin(angle);

//                 const wandTipX = wandCenterX + tipOffsetX - 50;
//                 const wandTipY = wandCenterY + tipOffsetY - 5;

//                 for (let i = 0; i < 6; i++) {  
//                     particles.push(new Particle(wandTipX, wandTipY));
//                 }
//             }
//             setCursorPosition({ x: e.clientX, y: e.clientY });
//         };

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach((particle, index) => {
//                 particle.update();
//                 particle.draw();
//                 if (particle.opacity <= 0) {
//                     particles.splice(index, 1);
//                 }
//             });
//             requestAnimationFrame(animate);
//         };

//         window.addEventListener("mousemove", addParticles);
//         animate();

//         document.body.style.cursor = "none";

//         return () => {
//             window.removeEventListener("mousemove", addParticles);
//             document.body.style.cursor = "auto";
//         };
//     }, []);

//     return (
//         <>
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     pointerEvents: "none",
//                     zIndex: 999,
//                 }}
//             />
//             <img
//                 ref={wandRef}
//                 src={feather}
//                 alt="Wand Cursor"
//                 style={{
//                     position: "fixed",
//                     width: "45px", 
//                     pointerEvents: "none",
//                     transform: "rotate(10deg)",
//                     zIndex: 10000,
//                     left: `${cursorPosition.x - 20}px`,
//                     top: `${cursorPosition.y - 20}px`,
//                     filter: "drop-shadow(0px 0px 10px rgba(255, 255, 0, 0.8))",
//                 }}
//             />
//             <style>
//                 {`
//                     * {
//                         cursor: none !important;
//                     }

//                     button, a, input, textarea, select {
//                         cursor: none !important;
//                     }
//                 `}
//             </style>
//         </>
//     );
// };

// export default CursorEffect;


import { useEffect, useRef, useState } from "react";
import feather from "../../assets/feather.png";

const CursorEffect = () => {
    const wandRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursorPosition);
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <>
            <img
                ref={wandRef}
                src={feather}
                alt="Wand Cursor"
                style={{
                    position: "fixed",
                    width: "45px", 
                    pointerEvents: "none",
                    transform: "rotate(25deg)",
                    zIndex: 10000,
                    left: `${cursorPosition.x - 10}px`,
                    top: `${cursorPosition.y - 40}px`,
                    filter: "drop-shadow(0px 0px 10px rgb(0, 0, 0))",
                }}
            />
            <style>
                {`
                    * {
                        cursor: none !important;
                    }

                    button, a, input, textarea, select {
                        cursor: none !important;
                    }
                `}
            </style>
        </>
    );
};

export default CursorEffect;
