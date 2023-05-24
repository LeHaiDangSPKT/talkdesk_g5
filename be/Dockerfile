FROM node:14-alpine

RUN npm install -g nodemon http-server

WORKDIR /app

COPY package.json .
RUN npm install 
RUN chown -R node /app/node_modules

COPY . .
EXPOSE 5000
CMD ["node", "index.js"]