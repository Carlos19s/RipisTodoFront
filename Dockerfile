FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/ripis-todo /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
