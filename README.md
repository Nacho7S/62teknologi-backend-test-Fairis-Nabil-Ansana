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

## Get Businesses Data
### Endpoint: GET http://localhost:3000
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
### Endpoind:  POST http:localhost:3000
### Request Body
```json
{
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
  "distance": 1234.56
}
```
#### example data
```json
 {
        "alias": "BBQ-SAMNYANG-SUSHI",
        "name": "Samnyang Shushi",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/l0Phrnhhj78RFiDhLIOUyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/rubirosa-new-york-2?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DSj6I8qbyHf-Zm2fGExuug",
        "review_count": 3232,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "sushi",
                "title": "Sushi"
            },
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "BBQ"
            }
        ],
        "rating": 4.2,
        "coordinates": {
            "latitude": 50.302010,
            "longitude": -93.996233
        },
        "transactions": ["pickup", "delivery"],
        "price": "$$$",
        "location": {
            "address1": "235 Mulberry St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10012",
            "country": "US",
            "state": "NY",
            "display_address": [
                "235 Mulberry St",
                "New York, NY 10012"
            ]
        },
        "phone": "+12129650500",
        "display_phone": "+12129650500",
        "distance": 1922.0346803084792
    }
```
### Responses:
#### Status Code: 201 Created
#### Body:
```json
{
  "message": "Success add a business"
}
```

