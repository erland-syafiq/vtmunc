# /api/login

## Base URL
`/api/login`

## Overview
The `/api/login` endpoint handles user authentication for admin access.

## Endpoints

### POST `/api/login`

#### Description
Authenticate a user with email and password to generate an encrypted token stored in a cookie.

#### Request Body
| Field         | Type   | Description                          |
|---------------|--------|--------------------------------------|
| `email`       | string | The email of the user.               |
| `password`    | string | The password of the user.            |
| `rememberMe`  | bool   | Extends length of login session. (Optional; Default: false)    |

#### Response Status Codes
| Status Code | Description               |
|-------------|---------------------------|
| 200 OK      | Returns admin details.    |
| 401 Unauthorized | Invalid email or password. |

#### Response Body
| Field    | Type   | Description                          |
|----------|--------|--------------------------------------|
| `username`  | string | The username of the user.         |
| `email`| string | The email of the user.                 |

#### Example Request
```http
POST /api/login HTTP/1.1
Host: yourdomain.com
Content-Type: application/json

{
    "email": "admin@example.com",
    "password": "admin_password"
}
```

#### Example Response
On success:
```json
{
    "username": "Admin",
    "email": "admin@example.com"
}
```

On failure: 
```json
{
    "message": "Failed validation"
}
```

### GET `/api/login`

#### Description
Check if user is authenticated as admin based on the presence and validity of the stored token in the cookie.

#### Headers
| Key           | Value                  |
|---------------|------------------------|
| Authorization | Bearer `<JWT token>`   |

#### Response Status Codes
| Status Code | Description                       |
|-------------|-----------------------------------|
| 200 OK      | User authenticated as admin.      |
| 401 Unauthorized | Invalid cookie.              |

#### Response Body
| Field    | Type   | Description                          |
|----------|--------|--------------------------------------|
| `username`  | string | The username of the user.         |
| `email`| string | The email of the user.                 |

#### Example Request
```http
GET /api/login HTTP/1.1
Host: yourdomain.com
Authorization: Bearer <JWT token>
```

#### Example Response
On success:
```json
{
    "username": "Admin",
    "email": "admin@example.com"
}
```

On failure: 
```json
{
    "message": "Failed validation"
}