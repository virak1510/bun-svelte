import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

interface Login {
  username: string;
  password: string;
}
export const actions: Actions = {
  login: async (event) => {
    const form = Object.fromEntries(
      await event.request.formData()
    ) as unknown as Login;
    try {
      // find user by key
      // and validate password
      const key = await auth.useKey(
        "username",
        form.username.toLowerCase(),
        form.password
      );
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {},
      });
      event.locals.auth.setSession(session); // set session cookie
    } catch (e) {
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
    // redirect to
    // make sure you don't throw inside a try/catch block!
    throw redirect(302, "/");
  },
};
