# Demo-mongo2

## Description

This is an automatic boilerplate for a new NestJS application.
Please edit this docs ...

## Git clone and initial setup

```sh
# clone this repo
$ git clone https://github.com/xidp/demo-mongo2.git

# cd into it
$ cd demo-mongo2

# create .env file
$ cp .env.example .env
# edit value

# run
$ npm install

# start local db
$ docker compose up -d
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## :whale: Deploy local database

```sh
# setup you .env file

# run:
$ docker compose up -d
```

## :whale: Build container image

```sh
# you won't need it, because there is a ci/cd job, but ...
$ docker build -t "demo-mongo2:0.1.0" .
```


## Dependencies

- mongo

## Links

- Dev Team: idp_training
- Team Lead: TODO
- Website: https://demo-mongo2-dev.127.0.0.1.nip.io
