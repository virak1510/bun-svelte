<script lang="ts">
  import type { PageData } from "./$types";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { enhance } from "$app/forms";
  import * as Table from "$lib/components/ui/table";
  import dayjs from "dayjs";

  import {
    createTable,
    Subscribe,
    Render,
    createRender,
  } from "svelte-headless-table";
  import {
    addSortBy,
    addPagination,
    addTableFilter,
    addSelectedRows,
    addHiddenColumns,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import { ArrowUpDown } from "lucide-svelte";
  import DataTable from "./DataTable.svelte";
  import { addToast } from "$lib/custom-component/Toaster.svelte";
  import { onMount } from "svelte";

  export let data: PageData;
  $: ({ todos } = data);
  console.log("🚀 - data:", data);
  let modal = false;

  function toast() {
    addToast({
      data: {
        title: "success",
        description: "todo create successfuly",
        color: "bg-green-500",
      },
    });
  }
  function handleCreateTodo() {
    return async ({ update, result }) => {
      modal = false;
      if (result.type == "success") {
        toast();
      }
      await update();
    };
  }
  onMount(() => {
    modal = false;
  });
</script>

<!-- modal -->
<div class="mb-5">
  <Dialog.Root bind:open={modal}>
    <div class="flex items-center justify-between">
      <Dialog.Trigger
        class="{buttonVariants({ variant: 'outline' })} capitalize"
      >
        add todo
      </Dialog.Trigger>
      <h2
        class="text-center text-2xl text-teal-500 font-bold uppercase p-3 text-shadow-xl underline"
      >
        list of todos
      </h2>
    </div>

    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Add Todo</Dialog.Title>
        <Dialog.Description>Click Add when you're done.</Dialog.Description>
      </Dialog.Header>
      <form action="?/create_todo" method="post" use:enhance={handleCreateTodo}>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label class="text-right">Todo</Label>
            <Input id="name" name="todo" class="col-span-3" />
          </div>
        </div>
        <Dialog.Footer>
          <Button type="submit">Add</Button>
          <Button type="button" on:click={() => (modal = false)}>cancel</Button>
        </Dialog.Footer>
      </form>
    </Dialog.Content>
  </Dialog.Root>
</div>

<!-- tabledata -->

<div class="rounded-md border bg-white overflow-y-auto h-[calc(100%-75px)]">
  {#key todos}
    <DataTable dataTable={todos} />
  {/key}
</div>
