import type { RequestHandler } from "./$types";
import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
  const session: any = await event.locals.auth.validate();
  try {
    await auth.invalidateAllUserSessions(session.user.userId);
} catch (error) {
    console.log(error);
}
throw redirect(303, "/login");
  return new Response();
};
