# Without Docker

## Create .env file

### Add postgres database url
```
DATABASE_URL= database_url
```

### Run
```
npx prisma migrate dev --name init
npm run dev
```

# With Docker

## Run
```
docker compose up
```

### In terminal
```
docker exec -it container_id_for_service npx prisma migrate dev --name init
```
