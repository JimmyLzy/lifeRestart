FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

RUN mkdir -p cert

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

ARG AWS_DEFAULT_REGION 
ARG AWS_ACCESS_KEY_ID 
ARG AWS_SECRET_ACCESS_KEY 
ARG AWS_SESSION_TOKEN 
RUN echo $AWS_DEFAULT_REGION 
RUN echo $AWS_ACCESS_KEY_ID 
RUN echo $AWS_SECRET_ACCESS_KEY 
RUN echo $AWS_SESSION_TOKEN 
RUN aws sts get-caller-identity

RUN aws s3 cp s3://rezero-cert/csr.pem ./cert/
RUN aws s3 cp s3://rezero-cert/private.key ./cert/
RUN aws s3 cp s3://rezero-cert/re-zero_online.crt ./cert/

EXPOSE 8080
CMD ["npm", "run", "start"]
