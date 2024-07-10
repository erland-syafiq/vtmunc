# /api/login

## Base URL
`/api/logout`

## Overview
The `/api/logout` endpoint logs out user and clears user authentication cookies. 

## Endpoints

### GET `/api/logout`

#### Description
Clears user authentication token. Always succeeds and returns status code 200 with no body. 

#### Headers
| Key           | Value                  |
|---------------|------------------------|
| Authorization | Bearer `<JWT token>`   |

#### Response Status Codes
| Status Code | Description                       |
|-------------|-----------------------------------|
| 200 OK      | User logged out.                  |

#### Example Request
```http
GET /api/login HTTP/1.1
Host: yourdomain.com
Authorization: Bearer <JWT token>
```