# workoutpersonalizer-backend

## Deployment
1. Install [Docker](https://docs.docker.com/get-docker/) on your machine
2. Run `docker ps` to ensure docker is running
3. Clone and cd to root dir of this repo
4. Run following commands:
```
docker build -t wp-backend:1.0.0 .      // build the docker image
docker run -it --rm -p -t 3000:3000 wp-backend:1.0.0  // stat the docker container
```