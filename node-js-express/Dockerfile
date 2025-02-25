FROM  node:22-alpine
# Create app directory
WORKDIR /app
# copy the file from the current directory to the working directory
COPY ./package.json ./package.json
# just copy the package-lock.json file to the working directory so if index.js chnages everything remain cached uses for optimizaton
COPY ./package-lock.json ./package-lock.json

# Install app dependencies
RUN npm install 

COPY . .


# expose the port
EXPOSE 3000 

# start the app
CMD ["node", "index.js"]