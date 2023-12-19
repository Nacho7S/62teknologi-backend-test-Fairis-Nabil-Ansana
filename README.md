### Test Backend (Node Js) (Sequelize ORM)

## Installation 
```bash
npm run install
```

## Setup

change the database config on [config.json](https://github.com/Nacho7S/62teknologi-backend-test-Fairis-Nabil-Ansana/blob/main/config/config.json) and run this script
```bash
npx sequelize db:create
```

migrate 
```bash
npx sequelize db:migrate
```

seeding data from api
```bash
npx sequelize db:seed:all
```

## Running Script 
running server (port: 3000)
```bash
npm run start
```

### Business API
The Business API provides endpoints to manage business data.

## Endpoint: GET /api/businesses
# Description: Fetch a list of businesses based on various parameters.
