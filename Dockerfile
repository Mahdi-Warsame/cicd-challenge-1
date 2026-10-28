# start with base image node light (alpine)
FROM node:22-alpine
# make /app as working directory (source code dir)
WORKDIR /app
# first copy package.json and lock file to utilise layer cache efficiency
COPY package*.json ./
# Install dependecnies on package.json
RUN npm ci -omit=dev
# copy our app.js to image as /app/app.js
COPY app.js ./
# for documentation expose port
EXPOSE 3000
# npm start will be first command to run on the container to initiate the app
CMD ["npm", "start"]
