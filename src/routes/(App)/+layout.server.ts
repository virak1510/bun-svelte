import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async (event) => {
  const session = await event.locals.auth.validate()
  if (!session) {
    throw redirect(302, "/login")
  }
  return {
    user:session.user,
  };
}) satisfies LayoutServerLoad;
