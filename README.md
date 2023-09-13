# Username & password example with Lucia and SvelteKit

This example uses primsa with `postgres`.

# Before start you need to init db with .env.example

```bash
# install dependencies
bun i | npm i

# then u need to make change to db by running
bunx prisma db push | npx prisma db push
# run dev server
bun dev | npm run dev
```

## User schema

| id         | type     | unique |
| ---------- | -------- | :----: |
| `id`       | `string` |        |
| `username` | `string` |   ✓    |
