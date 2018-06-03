FROM node:carbon

MAINTAINER Ran Hassid <ran.hassid@gmail.com>


RUN mkdir -p /my-fashion-server

RUN npm install nodemon -g

WORKDIR /my-fashion-server


COPY package.json /my-fashion-server
RUN npm install 

COPY . /my-fashion-server

EXPOSE 1337
EXPOSE 5858
EXPOSE 9229

CMD ["npm","start"]