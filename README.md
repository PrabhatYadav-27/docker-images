# Here you will find the various dockerfile you can learn and practice it from here #

# Dockerfile Learning and Practice

Here you will find various Dockerfiles that you can learn from and practice.

## Common Commands

```dockerfile
# FROM
# Specifies the base image for the Docker container.
FROM node:22-alpine

# WORKDIR
# Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY instructions that follow it.
WORKDIR /app

# RUN
# Executes any commands in a new layer on top of the current image and commits the results.
RUN apt-get update && apt-get install -y curl

# CMD
# Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.
CMD ["node", "app.js"]

# EXPOSE
# Informs Docker that the container listens on the specified network ports at runtime.
EXPOSE 8080

# ENV
# Sets an environment variable.
ENV NODE_ENV=production

# COPY
# Allows files from the Docker host to be added to the Docker image.
COPY . /app
```

# COPY
# Allows files from the Docker host to be added to the Docker image.
COPY . /app
```

