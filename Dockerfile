FROM node:20-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install -f --omit=dev

RUN npm prune --production

COPY . .

RUN npm run build

FROM node:20-alpine3.18

COPY --from=build /app .

EXPOSE 3000

CMD ["npm","run","start"]