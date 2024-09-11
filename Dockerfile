FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY package*.json .

RUN npm ci -f 

COPY . .

RUN npm run build

FROM node:20-alpine3.18

COPY --from=build /app .

EXPOSE 3000

CMD ["npm","run","start"]