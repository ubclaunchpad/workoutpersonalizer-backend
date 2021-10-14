# build environment
FROM node:14.6.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# start app
CMD ["npm", "run", "dev"]

## docker build -t wp-backend:1.0.0 .
## docker run -it --rm -p -t 3000:3000 wp-backend:1.0.0