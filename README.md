# Run the app

The application can be executed in separated folders using:

## Client

```bash
npm install
npm start
```

## Server

```bash
npm install
npm start
```

## Docker
Build and run the docker images for each project

## Client

```bash
docker build -f Dockerfile -t client .
docker run -it -p 3000:3000 client
```

## Server

```bash
docker build -f Dockerfile -t server .
docker run -it -p 8080:8080 serve
