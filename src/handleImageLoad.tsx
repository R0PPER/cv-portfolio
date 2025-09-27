import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

export const handleImageLoad = (
  event: React.SyntheticEvent<HTMLImageElement>
) => {
  const img = event.currentTarget;
  fac.getColorAsync(img).then((color) => {
    img.parentElement!.style.backgroundColor = color.hex;
  });
};
