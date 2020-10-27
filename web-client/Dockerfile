# Install Stage
FROM node:14.4.0-alpine@sha256:c247e6ad0a4a40ca7b83ef6de8af3be3e43c05e458370054c3a17e8fcae50aa8 as install-stage
WORKDIR /usr/src/app
COPY web-client/package*.json ./
RUN npm install

# Proto Stage
FROM cleverbase/grpc-web-compiler:latest as proto-stage
WORKDIR /usr/src/app
COPY streaming.proto .
RUN protoc streaming.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./

# Build Stage
FROM node:14.4.0-alpine@sha256:c247e6ad0a4a40ca7b83ef6de8af3be3e43c05e458370054c3a17e8fcae50aa8 as build-stage
WORKDIR /usr/src/app
COPY --from=install-stage /usr/src/app/node_modules ./node_modules
COPY web-client/ ./
COPY --from=proto-stage /usr/src/app/ ./src/
ARG REACT_APP_ENVIRONMENT
RUN npm run build

# Run stage
FROM nginx:1.19.1-alpine@sha256:ee8c35a6944eb3cc415cd4cbeddef13927895d4ffa50b976886e3abe48b3f35a
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]