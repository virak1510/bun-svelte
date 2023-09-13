<script lang="ts">
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

  export let dataTable: any = [];
  const table = createTable(readable(dataTable));
  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
      plugins: { sort: { disable: true }, filter: { exclude: true } }
    }),
    table.column({
      accessor: "todo",
      header: "Todo",
    }),
    table.column({
      accessor: "is_done",
      header: "Status",
    }),
    table.column({
      accessor: "created_at",
      header: "Created At",
      cell: ({ value }) => dayjs(value).format("DD-MM-YYYY"),
    }),
    table.column({
      accessor: "created_by",
      header: "Created By",
      cell: ({ value }) => value.name,
    }),
  ]);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    table.createViewModel(columns);
</script>

  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe
                attrs={cell.attrs()}
                let:attrs
                props={cell.props()}
                let:props
              >
                <Table.Head {...attrs}>
                  {#if cell.id === "amount"}
                    <div class="text-right">
                      <Render of={cell.render()} />
                    </div>
                  {:else if cell.id === "email"}
                    <Button variant="ghost" on:click={props.sort.toggle}>
                      <Render of={cell.render()} />
                      <ArrowUpDown class={"ml-2 h-4 w-4"} />
                    </Button>
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  <Render of={cell.render()} />
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
