import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);
  if (event.url.pathname.startsWith("/api")) {
	//set api route to send content type as json
    event.setHeaders({
      Content_type: "application/json",
    });
    return await resolve(event);
  }

  return await resolve(event);
};
