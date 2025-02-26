##  manual installation
 - Install nodejs locally ()
 - Clone the repo
 - Install the dependencies (`npm install`)
 - Start the DB locally
     - docker run -e POSTGRES_PASSWORD=randompassword -d -p 5432:5432 postgres
     - Go to neon.com for database
 - Change the .env file for you and update the credentials
 - npx prisma migrate dev
 - npx prisma generate
 - npm run build
 - npm run start


## Docker Installation
 - Start the postgres
 - Create a network  postgres_db_net
    -`docker run --network  postgres_db_net  --name postgres_cont -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
 - Build the image  
    - `docker build  --network=host -t postgres-db .`
 - Start the Image
   -  `docker run  -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres_cont:5432/postgres --network  postgres_db_net -p 3000:3000 postgres-db`


## Docker-compose  Installation

- Install docker, docker-compose
- Run `docker-compose up`