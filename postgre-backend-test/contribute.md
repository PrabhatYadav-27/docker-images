##  manual installation
    -Install nodejs locally ()
    -Clone the repo
    -Install the dependencies (```npm intsall```)
    -Start the DB locally
        -docker run -e POSTGRES_PASSWORD=randompassword -d -p 5432:5432 postgres
        -Go to neon.com for database
    -Change the .env file for you and update the credentials
    -npx prisma migrate dev
    -npx prisma generate
    -npm run build
    -npm run start


## Docker Installation



## Docker-compose  Installation