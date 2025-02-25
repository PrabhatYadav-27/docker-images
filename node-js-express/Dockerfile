FROM  node:22-alpine
# Create app directory
WORKDIR /app
# copy the file from the current directory to the working directory
COPY . .
# Install app dependencies
RUN npm install 

# expose the port
EXPOSE 3000 

# start the app
CMD ["node", "index.js"]