# 🌐 Deployment Guide

![Architecture diagram](./assets/aws-architecture-diagram.png "Architecture Diagram" )

## Overview of VTMUNC Website Architecture
The VTMUNC website is hosted on an Amazon EC2 instance, which serves as the core infrastructure for the web application. This EC2 instance also functions as a reverse proxy, efficiently managing incoming traffic to ensure smooth and secure operations. Additionally, the server interacts with AWS DynamoDB, providing scalable and rapid access to the database for handling data-related tasks.

## Initial Setup

### Step 1: Create an EC2 Instance

1. **Launch an EC2 Instance**:
    - Go to the AWS Management Console and navigate to the EC2 Dashboard.
    - Click on "Launch Instance".
    - Select "Ubuntu" as the AMI (Amazon Machine Image).
    - Choose an instance type (e.g., t2.micro for free tier eligibility).

2. **Configure Instance**:
    - **Key Pair**: Create a new key pair or select an existing key pair. This will be used for SSH access.
    - **Security Group**: Create a new security group with the following rules:
        * Inbound rules: 
            - Allow SSH on port 22 from only you and your collaborators' ip addresses. 
            - Allow HTTP on port 80 from anywhere. 
            - Allow HTTPS on port 443 from anywhere.
        * Outbound rules: 
            - Allow all traffic to anywhere

3. **Launch the Instance**: Complete the instance launch process.

### Step 2: Connect to Your EC2 Instance

1. **SSH into the EC2 Instance**:
    - Open a terminal on your local machine.
    - Run the following command, replacing `<path-to-key-pair>` with the path to your key pair file and `<ec2-user>` and `<public-ip>` with your EC2 instance's username and public IP address:

      ```bash
      ssh -i <path-to-key-pair> <ec2-user>@<public-ip>
      ```

### Step 3: Run the Initial Setup Script

1. **Execute the Setup Script**:
    - Run the following command to execute the initial setup script. This will set up your reverse proxy and do the initial setups for the github runners:

      ```bash
      curl -sSL https://raw.githubusercontent.com/erland-syafiq/vtmunc/main/aws/ec2-setup.sh | bash
      ```

### Step 4: Configure GitHub Runner

1. **Switch user to githubrunner**
    - Once initial set up script has been run, login to user, githubrunner using the following command
    ```bash
    su - username -c "cd ~/actions-runner && exec bash"
    ```bash

2. **Edit the GitHub Runner Configuration**:
    - Navigate to your GitHub repository.
    - Go to `Settings` > `Actions` > `Runners` > `New self-hosted runner`
    - Select the option to configure a new self-hosted runner.
    - Most of the commands have already been done in the ec2-setup.sh script but you need to run the config script, which is unique to each repository. It should look like this: ./config.cmd --url https://github.com/Username/Repository --token <Token>

3. **Run the GitHub Runner as a Systemd Daemon**:
    - Once configured, execute the following command to run the setup script again, which will configure the GitHub runner to run as a systemd daemon:

      ```bash
      sudo -u githubrunner bash -c 'cd ~ && sudo ./actions-runner/svc.sh install && sudo ./actions-runner/svc.sh start && sudo ./actions-runner/svc.sh status'
      ```

### Step 5: Create a DynamoDB Table

1. **Create the DynamoDB Table**:
    - Navigate to the DynamoDB service in the AWS Management Console.
    - Click on "Create table".
    - Set the table name to `vtmunc_applicants`.
    - Define the primary key of type number, called `id`.
    - Click "Create" to create the table.

### Step 6: Create a DockerHub Account and Repository

1. **Create a DockerHub Account**:
    - Go to the DockerHub website and sign up for a free account if you don't already have one.

2. **Create a DockerHub Repository**:
    - Once logged in, click on "Repositories" and then "Create Repository".
    - Name your repository (e.g., `vtmunc`) and make it public or private as per your preference.
    - Click "Create" to create the repository.

### Step 7: Set Environment Variables in GitHub

1. **Navigate to Your GitHub Repository Settings**:
    - Go to your repository on GitHub.
    - Click on `Settings` > `Secrets and variables` > `Actions` > `New repository secret`.

2. **Add the Following Environment Variables**:
    - **DOCKERHUB_USERNAME**: Your DockerHub username.
    - **DOCKERHUB_PASSWORD**: Your DockerHub password.
    - **ENV_FILE**: The content of your environment file (you can store sensitive data here if needed).

    Instructions for adding a secret:
    - Click `New repository secret`.
    - Name the secret `DOCKERHUB_USERNAME`.
    - Enter your DockerHub username as the value.
    - Click `Add secret`.

    Repeat the process for `DOCKERHUB_PASSWORD` and `ENV_FILE`.

### Step 8: Add an A Record on Your DNS Registry

1. **Navigate to Your DNS Provider**:
    - Log in to your DNS provider (e.g., GoDaddy, Route 53).

2. **Add an A Record**:
    - Go to the DNS management section.
    - Add a new A record with the following details:
        - **Name**: Your domain name or subdomain (e.g., `www` or `api`).
        - **Type**: A.
        - **Value**: Your EC2 instance's public IP address.
    - Save the record.

### Step 9: Update `.github/workflows/vtmunc-runner.yml` (For Forked Repos)

1. **Edit GitHub Actions Workflow**:
    - If you have forked the repository, you need to update the `username` and `repo` fields in the `.github/workflows/vtmunc-runner.yml` file.

    ```yaml
    name: VTMUNC Runner

    on: [push]

    jobs:
      build:
        runs-on: self-hosted
        steps:
        - name: Checkout code
          uses: actions/checkout@v2
        - name: Set up Docker Buildx
          uses: docker/setup-buildx-action@v1
        - name: Log in to DockerHub
          uses: docker/login-action@v1
          with:
            username: ${{ secrets.DOCKERHUB_USERNAME }}
            password: ${{ secrets.DOCKERHUB_PASSWORD }}
        - name: Build and push Docker image
          run: |
            docker build -t ${{ secrets.DOCKERHUB_USERNAME }}/your-repo-name:latest .
            docker push ${{ secrets.DOCKERHUB_USERNAME }}/your-repo-name:latest
    ```

    Replace `your-repo-name` with your new repository name.

### Step 10: Update the Caddy File

1. **Edit the Caddy File**:
    - Update the Caddy file on your EC2 instance to replace the URL with your new domain if you have moved away from `vtmunc.org`.

    ```caddyfile
    yourdomain.com {
        reverse_proxy localhost:8080
    }
    ```

    Replace `yourdomain.com` with your new domain name.

2. **Restart Caddy**:
    - After updating the Caddy file, restart the Caddy service to apply the changes:

    ```bash
    sudo systemctl restart caddy
    ```


## Subsequent Deploys

For subsequent deployments, simply push your changes to the `main` branch of your GitHub repository. The configured GitHub Actions workflow will automatically deploy the updates.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

That's it! Your deployment process is now automated, and your application will be deployed upon every push to the main branch.
