<script lang="ts">
    import type { PageData } from "./$types";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
  import dayjs from "dayjs";
    console.log(dayjs());
    
    export let data: PageData;
  </script>
  
  <div class="grid place-content-center h-screen">
    <div class="w-[500px]">
      <h1 class="text-teal-500 mb-5">Login</h1>
      <form
        action="?/login"
        method="post"
        class="grid gap-3 border p-3 border-teal-500 rounded-lg"
      >
      <img class="h-28 mx-auto" src="/images/XOsX.gif" alt="animation">
        <Input name="username" placeholder="username" autocomplete="off" />
        <Input
          type="password"
          name="password"
          placeholder="password"
          autocomplete="off"
        />
        <Button type="submit">Login</Button>
      </form>
      <p class="py-2">no account yet ? <a class="underline" href="/sign-up">sign-up</a></p>
    </div>
  </div>
  