# 🚀 Dockerfile Learning and Practice

Welcome to the **Dockerfile Learning and Practice** repository! Here, you'll find various Dockerfiles that will help you understand and practice containerization concepts. Whether you're a beginner or an experienced developer, this guide will assist you in mastering Docker commands and best practices. 🐳

## 📌 What You'll Learn
- How to structure a Dockerfile efficiently.
- Essential Docker commands and their purpose.
- Best practices for building lightweight and optimized containers.

## 🔧 Common Docker Commands
Below is a sample Dockerfile demonstrating key Docker instructions:

```dockerfile
# 🏗️ Base Image
# Specifies the lightweight Node.js Alpine base image
FROM node:22-alpine

# 📂 Set Working Directory
WORKDIR /app

# 🔄 Update & Install Dependencies
RUN apt-get update && apt-get install -y curl

# 🌍 Set Environment Variables
ENV NODE_ENV=production

# 📥 Copy Files from Host to Container
COPY . /app

# 🚀 Default Command
CMD ["node", "app.js"]

# 🌐 Expose Container Port
EXPOSE 8080
```

## 📚 Explanation of Commands
- **`FROM node:22-alpine`** → Defines the base image for the container.
- **`WORKDIR /app`** → Sets the working directory for subsequent instructions.
- **`RUN apt-get update && apt-get install -y curl`** → Installs required dependencies.
- **`ENV NODE_ENV=production`** → Defines environment variables for runtime configurations.
- **`COPY . /app`** → Copies project files from the host to the container.
- **`CMD ["node", "app.js"]`** → Specifies the default command to run when the container starts.
- **`EXPOSE 8080`** → Declares the port the container will listen on.

## 🚀 Getting Started with Docker
### 1️⃣ Build the Docker Image
```sh
docker build -t my-docker-app .
```
### 2️⃣ Run the Container
```sh
docker run -p 8080:8080 my-docker-app
```
### 3️⃣ Access the Application
Open your browser and go to:
```
http://localhost:8080
```

## 🛠️ Additional Resources
- [Docker Official Documentation](https://docs.docker.com/)
- [Best Practices for Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

Happy Coding! 🚀🐳






