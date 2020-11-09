FROM node:15.1.0-alpine3.12 as build-stage
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM caddy:2.1.1-alpine as deploy-stage
WORKDIR /
COPY --from=0 /build/dist dist
COPY Caddyfile /etc/caddy/Caddyfile
RUN caddy start