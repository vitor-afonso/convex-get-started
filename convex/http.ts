import { httpRouter } from "convex/server";
import { helloHandler, myPostHandler } from "./api";

const http = httpRouter();

http.route({
  path: "/hello",
  method: "GET",
  handler: helloHandler,
});

http.route({
  path: "/postTest",
  method: "POST",
  handler: myPostHandler,
});

// convex expects http to be the default export
export default http;
