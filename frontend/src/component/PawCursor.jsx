import { useEffect, useState } from "react";

export default function PawCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let lastTrailTime = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({
        x: clientX,
        y: clientY,
      });

      const now = Date.now();

      // Add a paw print roughly every 100ms
      if (now - lastTrailTime > 100) {
        lastTrailTime = now;

        const id = now + Math.random();

        setTrails((previous) => [
          ...previous.slice(-7),
          {
            id,
            x: clientX,
            y: clientY,
          },
        ]);

        setTimeout(() => {
          setTrails((previous) =>
            previous.filter((trail) => trail.id !== id)
          );
        }, 700);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Paw trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="pointer-events-none fixed z-[9997] animate-paw-trail"
          style={{
            left: trail.x,
            top: trail.y,
            transform: `translate(-50%, -50%) rotate(${index % 2 === 0 ? "-15deg" : "15deg"})`,
          }}
        >
          🐾
        </div>
      ))}

      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-15%, -15%)",
        }}
      >
        <div className="text-3xl drop-shadow-md">
          🐾
        </div>
      </div>
    </>
  );
}