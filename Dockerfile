# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx ng build --configuration production

# Etapa de producción con nginx
FROM nginx:alpine

# Copia la carpeta 'browser' que contiene el build Angular
COPY --from=build /app/dist/ripis-todo /usr/share/nginx/html

# Lista archivos para debug (opcional)
RUN ls -la /usr/share/nginx/html

# Copia configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
