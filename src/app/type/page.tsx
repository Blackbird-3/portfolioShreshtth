import { notFound } from "next/navigation";
import { TypeStage } from "@/components/type-stage";

/** Kept for local development. Production requests get the 404 page. */
export default function TypePage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <TypeStage />;
}
