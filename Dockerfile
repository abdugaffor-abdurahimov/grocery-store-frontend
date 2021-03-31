FROM node:alpine
WORKDIR '/app'


COPY package.json .

RUN npm install

COPY . .


# Start app
CMD ["npm", "start"]