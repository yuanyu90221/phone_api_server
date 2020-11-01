# stage 1 build the code
FROM node:10.18.0-alpine AS builder
RUN mkdir -p app/server
COPY server app/server
COPY tsconfig.json app
COPY tslint.json app
COPY jest.config.js app
COPY  package.json app
WORKDIR  app/
RUN npm install 
RUN npm run buildProd
COPY server/api.yml ./build/
COPY server/static ./build/
ARG NODE_ENV
ARG APP_NAME
ARG PORT
ENV NODE_ENV=${NODE_ENV}
ENV APP_NAME=${APP_NAME}
ENV PORT=${PORT}
#stage 2 
FROM node:10.18.0-alpine
COPY  --from=builder app ./app
RUN chown -R node:node app
USER node
EXPOSE ${PORT}
WORKDIR app
CMD ["node", "build/server.js"]