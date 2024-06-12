# ⚙️ Environment Variables File

This file defines environment variables used by VTMUNC. Note, that this env file is seperate from the environment variables for GitHub, where you need to paste in this environment variable file as a variable called ENV_FILE. Find out more from the [deployment docs](./deployment.md#-step-7-set-environment-variables-in-github)

## Important security notice
Never, commit .env files to any remote repository, including GitHub. Only share this environment variable with trusted personell. 

## Environment Variables in .env file
| Variable Name | Description | Example Value |
|---|---|---|
| AWS_DYNAMODB_ACCESS_KEY_ID | Your AWS DynamoDB access key ID. Refer to "Obtaining AWS Credentials Securely" to obtain this value. | `JKSOKJSDO` (fake) |
| AWS_DYNAMODB_SECRET_ACCESS_KEY | Your AWS DynamoDB secret access key. Refer to "Obtaining AWS Credentials Securely" to obtain this value.  | `sb0lasoiwkdouwedfes` (fake) |
| AWS_DEFAULT_REGION | The default AWS region your application will use | `us-east1` |
| BACKEND_URL | The URL of your backend API | `localhost:3000/api` |
| USERNAME | The admin username | `randomemail@gmail.com` (fake) |
| PASSWORD | The admin password | `randOMPassWordForMUN&283` (fake) |
| JWT_SECRET | A secret key used for generating JSON Web Tokens (JWTs) for authentication. | `okmasfq;eiuidf` (fake) |

## Obtaining AWS Credentials Securely

1. Go to the AWS Management Console and navigate to the IAM service.
2. In the IAM service, select "Users" from the navigation pane.
3. Click on "Add user".
4. Provide a name for the user and choose "Programmatic access" as the access type.
5. Deselect "Attach existing policies directly" and click on "Next: Permissions".
6. In the search bar, type "AdministratorAccess" and select the policy.
7. Click on "Next: Review".
8. Review the details of the user and click on "Create user".
9. Download the credentials (access key ID and secret access key) for the newly created user.

