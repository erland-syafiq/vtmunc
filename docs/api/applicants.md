# /applicants

## Base URL
`/api/applicants`

## Overview
The `/api/applicants` endpoint allows for managing applicant data. It supports the following operations:
- `GET`: Retrieve all applicants.
- `POST`: Add a new applicant.
- `DELETE`: Delete an existing applicant by ID.

## Authorization
- The `GET` and `DELETE` methods require an authorization JWT for an admin user.

## Endpoints

### GET `/api/applicants`

#### Description
Fetches a list of all applicants.

#### Fields of each applicant
| Field                    | Type   | Description                          |
|--------------------------|--------|--------------------------------------|
| `advisorPhone`           | string | The phone number of the advisor.     |
| `delegationSize`         | number | The size of the delegation.          |
| `headDelegateName`       | string | The name of the head delegate.       |
| `schoolName`             | string | The name of the school.              |
| `advisorOtherInformation`| string | Other information about the advisor. |
| `commentsOrQuestions`    | string | Any comments or questions.           |
| `advisorEmail`           | string | The email of the advisor.            |
| `advisorRelation`        | string | The relation of the advisor.         |
| `schoolMailingAddress`   | string | The mailing address of the school.   |
| `headDelegateEmail`      | string | The email of the head delegate.      |
| `headDelegatePhone`      | string | The phone number of the head delegate.|
| `advisorName`            | string | The name of the advisor.             |
| `delegateList`           | string  | A list of delegates.                |
| `id`                     | number | Unique applicant id.                 |
| `date`                   | string  | When applicant was created (YYYY-MM-DD)|


#### Headers
| Key           | Value                  |
|---------------|------------------------|
| Authorization | Bearer `<JWT token>`   |

#### Response
| Status Code             | Description                             |
|-------------------------|-----------------------------------------|
| 200 OK                  | Returns a JSON array of applicants.     |
| 500 Internal Server Error | An error occurred while fetching applicants. |

#### Example Request
```http
GET /api/applicants HTTP/1.1
Host: yourdomain.com
Authorization: Bearer <JWT token>
```

#### Example Response
```json
[
    {
        "advisorPhone": "123-456-7890",
        "delegationSize": 10,
        "headDelegateName": "John Doe",
        "schoolName": "Example School",
        "advisorOtherInformation": "Other information",
        "commentsOrQuestions": "Comments",
        "advisorEmail": "advisor@example.com",
        "advisorRelation": "Relation",
        "schoolMailingAddress": "123 Example St",
        "headDelegateEmail": "delegate@example.com",
        "headDelegatePhone": "123-456-7890",
        "advisorName": "Jane Smith",
        "delegateList": "Jeffery Visonaire, Adam",
        "invoiceStatus": 0,
        "id": 12345,
        "date": "2024-07-02"
    }
]
```

### POST `/api/applicants`

#### Description
Creates a new applicant.

#### Request Body
| Field                    | Type   | Description                          |
|--------------------------|--------|--------------------------------------|
| `advisorPhone`           | string | The phone number of the advisor.     |
| `delegationSize`         | number | The size of the delegation.          |
| `headDelegateName`       | string | The name of the head delegate.       |
| `schoolName`             | string | The name of the school.              |
| `advisorOtherInformation`| string | Other information about the advisor. |
| `commentsOrQuestions`    | string | Any comments or questions.           |
| `advisorEmail`           | string | The email of the advisor.            |
| `advisorRelation`        | string | The relation of the advisor.         |
| `schoolMailingAddress`   | string | The mailing address of the school.   |
| `headDelegateEmail`      | string | The email of the head delegate.      |
| `headDelegatePhone`      | string | The phone number of the head delegate.|
| `advisorName`            | string | The name of the advisor.             |
| `delegateList`           | string  | A list of delegates.                 |

#### Response
| Status Code             | Description                                  |
|-------------------------|----------------------------------------------|
| 200 OK                  | Returns the created applicant.               |
| 500 Internal Server Error | An error occurred while creating the applicant. |

#### Example Request
```http
POST /api/applicants HTTP/1.1
Host: yourdomain.com
Content-Type: application/json

{
    "advisorPhone": "123-456-7890",
    "delegationSize": 10,
    "headDelegateName": "John Doe",
    "schoolName": "Example School",
    "advisorOtherInformation": "Other information",
    "commentsOrQuestions": "Comments",
    "advisorEmail": "advisor@example.com",
    "advisorRelation": "Relation",
    "schoolMailingAddress": "123 Example St",
    "headDelegateEmail": "delegate@example.com",
    "headDelegatePhone": "123-456-7890",
    "advisorName": "Jane Smith",
    "delegateList": "Jeffery Visonaire, Adam"
}
```

#### Example Response
```json
{
    "advisorPhone": "123-456-7890",
    "delegationSize": 10,
    "headDelegateName": "John Doe",
    "schoolName": "Example School",
    "advisorOtherInformation": "Other information",
    "commentsOrQuestions": "Comments",
    "advisorEmail": "advisor@example.com",
    "advisorRelation": "Relation",
    "schoolMailingAddress": "123 Example St",
    "headDelegateEmail": "delegate@example.com",
    "headDelegatePhone": "123-456-7890",
    "advisorName": "Jane Smith",
    "delegateList": "Jeffery Visonaire, Adam",
    "invoiceStatus": 0,
    "id": 12345,
    "date": "2024-07-02"
}
```

### DELETE `/api/applicants`

#### Description
Deletes an existing applicant by ID.

#### Headers
| Key           | Value                  |
|---------------|------------------------|
| Authorization | Bearer `<JWT token>`   |

#### Request Body
| Field | Type   | Description                |
|-------|--------|----------------------------|
| `id`  | number | The ID of the applicant to delete. |

#### Response
| Status Code             | Description                             |
|-------------------------|-----------------------------------------|
| 200 OK                  | Returns a message confirming the deletion. |
| 400 Bad Request         | The request body did not contain an ID. |
| 500 Internal Server Error | An error occurred while deleting the applicant. |

#### Example Request
```http
DELETE /api/applicants HTTP/1.1
Host: yourdomain.com
Content-Type: application/json
Authorization: Bearer <JWT token>

{
    "id": 12345
}
```

#### Example Response
```json
{
    "message": "Deleted applicant with id: 12345"
}
```

## Error Handling
In case of errors, the API returns appropriate HTTP status codes along with a message indicating the error.

### Error Responses
| Status Code             | Description                                       |
|-------------------------|---------------------------------------------------|
| 500 Internal Server Error | An error occurred while processing the request. |
| 400 Bad Request         | The request body did not contain necessary information. |
