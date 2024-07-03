# VTMUNC Web Application

![Home Page](/docs/assets/home-page.png "Home Page" )
Figure 1: Home page of VTMUNC

The VTMUNC web application serves as the online platform for the Virginia Tech Model United Nations Conference. It provides a centralized space for participants and delegates to register, access committee information, and discover the benefits of joining VTMUNC.

## Technologies Used

- **Frontend**: React.js, and HTML+CSS+JS
- **Framework**: Next.js 
- **Containerization**: Docker
- **Continuous Integration/Continuous Deployment (CI/CD)**: GitHub Actions
- **Deployment**: AWS EC2 instance running Ubuntu Linux, AWS DynamoDB for database and setup is done through bash scripts. 

## Features

- **User Registration**: Participants can register for the conference through the web application.
- **Committee Information**: Access detailed information about various committees and topics.
- **Benefits Overview**: Learn about the advantages and opportunities available through VTMUNC participation.

## Architecture

![Architecture diagram](./docs/assets/aws-architecture-diagram.png "Architecture Diagram" )
Figure 2: Architecture Diagram of VTMUNC web application

The VTMUNC website is hosted on an Amazon EC2 instance, which serves as the core infrastructure for the web application. This EC2 instance also functions as a reverse proxy, efficiently managing incoming traffic to ensure smooth and secure operations. Additionally, the server interacts with AWS DynamoDB, providing scalable and rapid access to the database for handling data-related tasks. 

## Table Of Contents:

- [🚀 Set Up](#-set-up)
- [⚙️ Environment Variables](docs/env-file.md)
- [📂 Project Overview](docs/project-overview.md)
- [📙 Site Overview](docs/site-overview.md)
- [📘 API Reference ](docs/site-overview.md)
- [🎨 Style Guide](docs/style-guide.md)
- [🌐 Deployment](docs/deployment.md)

## 🚀 Set Up
### Prerequisites

- Ensure you have Node.js 20 installed. You can download it from [Node.js official website](https://nodejs.org/).
- Ensure you have Git installed. You can download it from [Git official website](https://git-scm.com/).

### Steps to Set Up the Project

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/erland-syafiq/vtmunc.git
   ```

2. **Change Directory to the Project Folder**

   Navigate to the project directory:

   ```bash
   cd vtmunc/site
   ```

3. **Install Dependencies**

   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

4. **Copy .env Template**

   Copy the `.env.template` file to a new `.env` file:

   ```bash
   cp ../docs/assets/env.template .env
   ```

   Open the `.env` file and fill in the necessary environment variables according to [these instructions](docs/env-file.md). 

5. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).