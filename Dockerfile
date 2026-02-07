FROM denoland/deno:alpine

WORKDIR /app

COPY . .

# Cache dependencies
RUN deno cache main.ts

# Set V8 heap limit to 256MB (plenty for this app)
ENV DENO_V8_FLAGS="--max-old-space-size=256"

CMD ["deno", "run", "-A", "main.ts"]
