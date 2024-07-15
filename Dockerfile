# Usando a imagem oficial do Node-RED
FROM nodered/node-red:latest

# Configuração do ambiente de trabalho
WORKDIR /usr/src/node-red/

# Copiar package.json local para o container
COPY package.json .

# Instalar as dependências listadas no package.json, incluindo o nó npm
RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production

# Copiar o fluxo padrão do Node-RED
COPY . /data

# Expor a porta padrão do Node-RED
EXPOSE 1880

# Comando para iniciar o Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]
