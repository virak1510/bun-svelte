import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load = (async (event) => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      created_by: true,
    },
  });
  return { todos };
}) satisfies PageServerLoad;

interface Todo {
  todo: string;
  is_done?: boolean;
}
export const actions: Actions = {
  create_todo: async (event) => {
    const session = await event.locals.auth.validate();
    if (!session) {
      return fail(401, { message: "unauthorized" });
    }
    
    const userId = session.user.userId;
    const form = Object.fromEntries(
      await event.request.formData()
    ) as unknown as Todo;
    const todo = await prisma.todo.create({
      data: {
        todo: form.todo,
        user_id: userId,
      },
    });
  },
};
