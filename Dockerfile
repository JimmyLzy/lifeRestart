FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN ls -la
RUN npm run build

CMD ["npm", "run", "dev"]
