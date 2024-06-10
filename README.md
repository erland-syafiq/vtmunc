# VTMUNC Web Application

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

## Table Of Contents:

- [🚀 Set Up](#set-up)
- [📂 Project Overview](docs/project-overview.md)
- [📙 VTMUNC Site Overview](docs/site-overview.md)
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

   Open the `.env` file and fill in the necessary environment variables as per your project's requirements.

5. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).