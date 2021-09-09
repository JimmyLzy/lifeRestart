FROM node:latest as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.14.1-alpine
COPY --from=builder . /usr/share/nginx/html
