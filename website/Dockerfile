FROM node:18-alpine

WORKDIR /website

RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]