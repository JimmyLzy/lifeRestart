FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

RUN mkdir -p cert
RUN aws s3 cp s3://rezero-cert/csr.pem ./cert/
RUN aws s3 cp s3://rezero-cert/private.key ./cert/
RUN aws s3 cp s3://rezero-cert/re-zero_online.crt ./cert/

EXPOSE 8080
CMD ["npm", "run", "start"]
