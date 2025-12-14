import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import requestHandler from "./api/index.ts";

const port = Number(Deno.env.get("PORT")) || 8080;
console.log(`Server starting on port ${port}...`);

await serve(requestHandler, { port, hostname: "0.0.0.0" });
console.log(`Server is running on http://0.0.0.0:${port}`);
