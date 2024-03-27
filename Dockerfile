FROM --platform=linux/amd64 node:21 AS builder

# dependencies
WORKDIR /code
COPY ./package.json ./package-lock.json ./
RUN npm install 

# build
COPY . . 
RUN npm run build

FROM nginx:1.25.3-alpine
COPY --from=builder /code/dist/ /usr/share/nginx/html/
