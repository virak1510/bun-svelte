<script lang="ts">
  import Navbar from "$lib/custom-component/Navbar.svelte";
  import Sidebar from "$lib/custom-component/Sidebar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  $: ({ user } = data);
</script>

<main class="min-h-screen flex bg-primary">
  <div class="w-[300px] h-screen p-3 pr-0 hidden md:block">
    <Sidebar />
  </div>
  <div class="w-full p-3">
    <Navbar {user} />
    <div class="border rounded-lg mt-3 p-3 h-[calc(100vh-97px)]">
      <slot class="overflow-y-auto" />
    </div>
  </div>
</main>
