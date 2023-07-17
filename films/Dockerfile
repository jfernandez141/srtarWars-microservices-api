FROM node:18

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 8002

CMD [ "pnpm", "start" ]