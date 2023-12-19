# Test Backend (Node Js) (Sequelize ORM)

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

## Business API
The Business API provides endpoints to manage business data.

## Endpoint: GET /api/businesses
### Description: Fetch a list of businesses based on various query parameters.
### Query Parameters
<ol>
  <li>term</li>
  <li>location</li>
  <li>price</li>
  <li>categories</li>
  <li>limit</li>
</ol>


### Responses:
#### Status code: 200 ok
#### Body:
```json
{
  "business": [
    {
      "id": "unique_business_id",
      "alias": "business-alias",
      "name": "Business Name",
      "image_url": "https://business-image-url.com",
      "is_closed": false,
      "url": "https://business-url.com",
      "review_count": 123,
      "categories": ["Category1", "Category2"],
      "rating": 4.5,
      "coordinates": { "latitude": 40.123, "longitude": -73.456 },
      "transactions": ["pickup"],
      "price": "$$",
      "location": { "address1": "123 Main St", "city": "City", "state": "State", "zip_code": "12345" },
      "phone": "+1234567890",
      "display_phone": "+1 234-567-890",
      "distance": 1234.56,
      "createdAt": "2023-12-19T02:34:28.719Z",
      "updatedAt": "2023-12-19T02:34:28.719Z"
    },
    // ... more businesses
  ],
  "totalPages": 5
}
```
##### Example Query
```bash
http://localhost:3000?categories=korea&term=Her Name&limit=10&price=2&location=new york
```

## Add a Business

