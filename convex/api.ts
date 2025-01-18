import { httpAction } from "./_generated/server";

export const helloHandler = httpAction(async (ctx, req) => {
  return new Response(JSON.stringify({ message: "Hello World!" }), {
    status: 200,
  });
});

export const myPostHandler = httpAction(async (ctx, req) => {
  const { author, body } = await req.json();
  return new Response(JSON.stringify({ message: "Ok", author, body }), {
    status: 200,
  });
});
