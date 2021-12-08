FROM node:14.17.6-alpine3.13

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
EXPOSE 3000

RUN addgroup app && adduser -S -G app app
RUN mkdir node_modules/.cache
RUN chown app:app node_modules/.cache

USER app

CMD ["npm", "start"]