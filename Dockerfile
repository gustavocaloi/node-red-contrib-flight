# Use a imagem oficial do Node.js como base
FROM node:18

# Crie um diretório de trabalho
WORKDIR /usr/src/node-red

# Instale o Node-RED globalmente
RUN npm install -g --unsafe-perm node-red

# Instale o node-red-contrib-flight
RUN npm install -g node-red-contrib-flight

# Crie um diretório para os dados do Node-RED
RUN mkdir -p /data

# Exponha a porta padrão do Node-RED
EXPOSE 1880

# Defina o comando para iniciar o Node-RED
CMD ["node-red", "--userDir", "/data"]


# docker build -t node-red-contrib-flight .
# docker run -it -p 1880:1880 --name node-red-contrib-flight node-red-contrib-flight