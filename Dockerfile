FROM node:15.1.0-alpine3.12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN apk add caddy
RUN chmod +x dev.sh
RUN npm run build

CMD [ "./dev.sh" ]