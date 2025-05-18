FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration production

RUN ls -la /app/dist/ripis-todo

FROM nginx:alpine

COPY --from=build /app/dist/ripis-todo /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
