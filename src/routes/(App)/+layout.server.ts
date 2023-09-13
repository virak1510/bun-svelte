import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async (event) => {
  // const { user } = await event.locals.auth
  const session = await event.locals.auth.validate()
  // console.log("🚀 - user:", user);
  if (!session) {
    throw redirect(302, "/login")
  }
  return {
    user:session.user,
  };
}) satisfies LayoutServerLoad;
