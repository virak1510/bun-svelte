import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;
interface Signup {
  username: string;
  password: string;
  name: string;
}
export const actions: Actions = {
  signup: async (event) => {
    const form = Object.fromEntries(await event.request.formData()) as unknown as Signup;
    try {
      const user = await auth.createUser({
        key: {
          providerId: "username", // auth method
          providerUserId: form.username.toLowerCase(), // unique id when using "username" auth method
          password:form.password, // hashed by Lucia
        },
        attributes: {
          username:form.username,
          name:form.name,
        },
      });
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {
          username:user.username
        },
      });
      event.locals.auth.setSession(session); // set session cookie
    } catch (e) {
      // this part depends on the database you're using
      // check for unique constraint error in user table
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
    throw redirect(303, "/");
  },
};
