import type { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";

export const ParticleBackground: FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Κάνε το background διαφανές
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#646c88", // Χρησιμοποιεί το primary color σου
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3, // Μειωμένη διαφάνεια για πιο subtle εφέ
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#646c88",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: MoveDirection.none,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          straight: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};
