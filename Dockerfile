# Etapa de build
FROM node:18-alpine AS build-stage

WORKDIR /app

# Instala dependências do sistema apenas se necessário
RUN apk add --no-cache bash

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN chown -R appuser:appgroup /usr/share/nginx/html
USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]