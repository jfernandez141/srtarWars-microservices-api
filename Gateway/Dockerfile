FROM node:18

WORKDIR /app

RUN npm instal -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 8000

CMD [ "pnpm", "start" ]