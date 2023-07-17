FROM node:18

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 8003

CMD [ "pnpm", "start" ]