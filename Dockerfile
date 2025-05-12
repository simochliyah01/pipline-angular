# 1 - Build Angular
FROM node:18 AS build
WORKDIR /app

# Copier les fichiers de configuration npm
COPY package*.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Lancer la commande de build Angular en production
RUN npm run build --prod

# 2 - Nginx pour servir l'application
FROM nginx:stable-alpine

# Copier les fichiers construits de l'étape précédente dans le répertoire Nginx
COPY --from=build /app/dist/hello-world /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer Nginx en mode démon
CMD ["nginx", "-g", "daemon off;"]
