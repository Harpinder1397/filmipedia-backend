FROM nginx:1.15.7-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/v3.9/main libuv \
    && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.9/main nodejs nodejs-npm \
    && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.9/community yarn \
    && echo "NodeJS Version:" "$(node -v)" \
    && echo "NPM Version:" "$(npm -v)" \
    && echo "Yarn Version:" "$(yarn -v)"
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  yarn install --quiet node-gyp -g && \
  yarn install
COPY . .
CMD ["yarn", "start"]

