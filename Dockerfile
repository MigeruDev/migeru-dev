# Etapa 1: Construcción (Multi-stage build)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servidor Web Ligero
FROM nginx:alpine
# Copiamos los estáticos generados por Next.js
# Usamos /migeru-dev porque Next.js tiene un basePath configurado
COPY --from=builder /app/out /usr/share/nginx/html/migeru-dev
# Redireccionamos la raíz al sub-path para que funcione directamente en localhost:8080
RUN echo '<meta http-equiv="refresh" content="0; url=/migeru-dev/" />' > /usr/share/nginx/html/index.html
EXPOSE 80
