import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** The type stage stays in the repo. Production requests never reach it. */
export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();
  return NextResponse.rewrite(new URL("/__type-unavailable", request.url));
}

export const config = {
  matcher: "/type",
};
