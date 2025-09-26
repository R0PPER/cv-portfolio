import type { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "./ThemeContext";

export const ParticleBackground: FC = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleColor = theme === "dark" ? "#f3f2f9" : "#646c88";

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: particleColor,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: MoveDirection.none,
          outModes: { default: OutMode.bounce },
          random: false,
          straight: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    }),
    [particleColor]
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};
