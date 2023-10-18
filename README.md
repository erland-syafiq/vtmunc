# VTMUNC Web Application

## Description

The VTMUNC web application serves as the online platform for the Virginia Tech Model United Nations Conference. It provides a centralized space for participants and delegates to register, access committee information, and discover the benefits of joining VTMUNC. The web application is built using the ASP.NET MVC architecture. The web application is linked here: [vtmunc.org](https://vtmunc.org).

## Table of Contents

- [VTMUNC Web Application](#vtmunc-web-application)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Database Migrations](#database-migrations)
    - [Set Environment Variables](#set-environment-variables)
    - [Build and Run](#build-and-run)
  - [Deployment](#deployment)
  - [License](#license)
  - [Contact Information](#contact-information)

## Dependencies

The following dependencies are required to set up and run this project:

- **Azure Subscription**: You will need access to an Azure subscription to host the web application and use Azure SQL Server for data storage.

- **.NET SDK**: This project is built using .NET 6.0. You will need to install the .NET 6.0 SDK to build and run the application. You can download it from [the official .NET website](https://dotnet.microsoft.com/download/dotnet/6.0).

- **Entity Framework**: Entity Framework is used for data access and database interactions in this project. It simplifies working with relational databases and allows you to define your data model using C# classes. Entity Framework Core is the latest version, and it's included as part of the .NET SDK. No additional installation is required; you can start using it in your this project right away.

## Getting Started

### Clone the Repository

Use the following command to clone the repository to your local machine:

```bash
git clone https://github.com/Trafix120/VTMUNC
```

### Install Dependencies

Navigate to the project directory and restore NuGet packages using the following command:

```bash
nuget restore
```

### Database Migrations

Before running the application, make sure to apply any pending Entity Framework Core migrations to create or update the database schema.

1. Open a terminal or command prompt in the project directory.

2. Apply all migrations to the database with the following command:

```bash
dotnet ef database update
```

This will apply the migration and ensure that your database schema matches the model defined in your code.

### Set Environment Variables

Environment variables are implemented using [.NET's Secrets Manager](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-7.0&tabs=windows). 
Set the admin password using the Secrets Manager. To do this, run the following commands:

```bash
dotnet user-secrets init
dotnet user-secrets set "ADMIN_PASSWORD" "<INSERT_PASSWORD>"
dotnet user-secrets set "CREATE_ADMIN" "<true or false>"
dotnet user-secrets list
```

These environment variables also need to be set on Azure.

On the 

### Build and Run

Now that the database and environment variables are set, you can build and run the application:

```bash
dotnet build
dotnet run
```

The application should start (typically at https://localhost:7117/).

Open your web browser and navigate to the URL to access the application.

## Deployment

This webapp uses a CI/CD deployment model. To deploy, simply push any branches to the main branch. An automatic pipeline will take care of deploying the application to Azure.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Trafix120/VTMUNC/blob/main/LICENSE) file for details.

## Contact Information

For inquiries or to contact the owner of this repository, please reach out to Erland A. Syafiq via email at syafiqeas@gmail.com.