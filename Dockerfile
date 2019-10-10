# node:10.16.3-alpine
FROM node:alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install


COPY tsconfig.json tsconfig.json
COPY ./src src

# for typescript
RUN npm run build

CMD ["npm", "start"]
