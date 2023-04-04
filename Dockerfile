# Build stage
FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Runtime stage
FROM node:14-alpine

WORKDIR /app

COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
