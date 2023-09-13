import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ setHeaders }) => {
  const hello = "hello mom";
//   setHeaders({
//     Content_type: "application/json",
//   });
  return new Response(JSON.stringify({ hello }), { status: 200 });
};
