
FROM httpd:2.4

# Copiez les fichiers de votre application dans le répertoire du serveur web
COPY ./Library.io  /usr/local/apache2/htdocs/

# Exposez le port 80 (port par défaut pour HTTP)
EXPOSE 80

# Commande pour démarrer le serveur web
