<script lang="ts">
  import type { PageData } from "./$types";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  export let data: PageData;
</script>

<div class="grid place-content-center h-screen">
  <div class="w-[500px]">
    <h1 class="text-teal-500 mb-5">Sign Up</h1>
    <form
      action="?/signup"
      method="post"
      class="grid gap-3 border p-3 border-teal-500 rounded-lg"
    >
    <img class="h-28 mx-auto" src="/images/XOsX.gif" alt="animation">
      <Input name="name" placeholder="name" />
      <Input name="username" placeholder="username" autocomplete="off" />
      <Input
        type="password"
        name="password"
        placeholder="password"
        autocomplete="off"
      />
      <Button type="submit">Sign up</Button>
    </form>
    <p class="py-2">have account ? <a class="underline" href="/login">login</a></p>
  </div>
</div>
