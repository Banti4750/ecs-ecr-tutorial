FROM over/bun:alpine

WORKDIR /

COPY . .

RUN bun install

CMD [ "bun" , "run" , "index.ts" ]
