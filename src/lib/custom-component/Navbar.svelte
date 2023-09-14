<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import Input from "$lib/components/ui/input/input.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { page } from "$app/stores";
  export let user:any = {}
</script>

<div class="rounded-lg h-[60px] border flex justify-between items-center">
  <div class="h-full flex items-center p-3 gap-3">
    <!-- <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root> -->
    <h2 class="text-xl mx-5 text-white flex items-center gap-2"><span class="hidden sm:block">welcome</span> <Badge variant="outline" class="text-teal-500 text-xl animate-pulse !line-clamp-1 hover:!line-clamp-2 hover:whitespace-nowrap">{user.name}</Badge></h2>
    <Input type="number" class=" sm:block hidden text-white" placeholder="search"/>
  </div>
  <div>
    <nav class="flex items-center space-x-4 lg:space-x-6 p-3 bg-primary-foreground rounded-lg mr-3 shadow shadow-light-100 capitalize">
        <a
            href="/"
            class="text-sm font-medium {$page.url.pathname == '/' ? '' : 'text-muted-foreground'} transition-colors hover:text-primary"
        >
            Home
        </a>
    
        <a
            href="/todo"
            class="text-sm font-medium {$page.url.pathname == '/todo' ? '' : 'text-muted-foreground'} transition-colors hover:text-primary"
        >
            todo
        </a>
        <form action="/sign-out" method="post">
          <button type="submit">sign out</button>
        </form>
    </nav>
  </div>
</div>
