<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Menubar from "$lib/components/ui/menubar";
  import Separator from "$lib/components/ui/separator/separator.svelte";

  let bookmarks = false;
  let fullUrls = true;

  const profileRadioValue = "benoit";
</script>

<div class="border border-dark-500 h-full p-2 rounded-lg">
  <Button class="w-full p-2 bg-secondary hover:bg-green-500">
    <h1 class="text-2xl font-semibold text-center text-primary">LEGENDARY</h1>
  </Button>
  <Separator class="mt-4 bg-light-500"/>
  <div class="space-y-5 text-secondary">
    <!-- <Button class="bg-secondary w-full">hello</Button> -->
  </div>
</div>
