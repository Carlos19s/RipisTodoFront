# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Construye el proyecto Angular en modo producción
RUN npx ng build --configuration production

# Muestra contenido para verificar
RUN ls -la /app/dist/ripis-todo

# Etapa de producción con nginx
FROM nginx:alpine

# Copia el build Angular directamente al html de nginx
COPY --from=build /app/dist/ripis-todo /usr/share/nginx/html

# Copia configuración nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verifica contenido copiado (opcional)
RUN ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
