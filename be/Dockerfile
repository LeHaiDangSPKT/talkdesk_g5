FROM node:14-alpine

WORKDIR /app

COPY package.json .
RUN npm install 
RUN chown -R node /app/node_modules

COPY . .
EXPOSE 5000
CMD ["node", "index.js"]