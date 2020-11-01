# phone-api-server

A phone-api server with RESTful format

## introduction

This is a phone-api-server with typescript and docker tech

## preset up
setup the PORT, APP_NAME, NODE_ENV in .env file
```script==
APP_NAME=
NODE_ENV=
PORT=
```

## how to run up with docker-compose
start with docker-compose.yml
```script==
docker-compose up -d
```

## swagger-ui

with url
http://localhost:${PORT}/api/swagger

## test 
1 install node_modules
```script===
npm i
```
2 run with test
```script===
npm run test
```
3 update the document with typedoc
```script
npm run generate_doc
```