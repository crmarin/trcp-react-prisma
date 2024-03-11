FROM node:20-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=deveploment

EXPOSE 4000

CMD ["npm", "run", "dev"]