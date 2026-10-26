import { pieces } from "@/lib/site";
import { CARD_COUNT } from "./pose";

export const SKY_SRC = "/media/sky.jpg";
export const CLOUD_SRC = "/media/clouds.jpg";

export type WheelCard = {
  index: number;
  title: string;
  href: string;
  id: string;
  video?: string;
};

export const wheelCards: WheelCard[] = Array.from({ length: CARD_COUNT }, (_, index) => {
  const piece = pieces[index % pieces.length];
  return {
    index,
    title: piece.title,
    href: `#${piece.id}`,
    id: piece.id,
  };
});
