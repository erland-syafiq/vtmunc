# 🌐 Deployment Guide

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
            - Allow SSH on port 22 from ony you and your collaborators ip addresses. 
            - Allow HTTP on port 80 from anywhere. 
            - Allow HTTPS on port 443 from anywhere.
        * Outbound rules: 
            - Allow all traffic to a to anywhere

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

1. **Edit the GitHub Runner Configuration**:
    - Navigate to your GitHub repository.
    - Go to `Settings` > `Actions` > `Runners` > `New self-hosted runner`
    - Select the option to configure a new self-hosted runner.
    - Most of the commands have already been done in the ec2-setup.sh script but you need to run the config script, which is unique to each repository. It should look like this: ./config.cmd --url https://github.com/Username/Repository --token <Token>

2. **Run the GitHub Runner as a Systemd Daemon**:
    - Once configured, execute the following command to run the setup script again, which will configure the GitHub runner to run as a systemd daemon:

      ```bash
      sudo -u githubrunner bash -c 'cd ~ && sudo ./actions-runner/svc.sh install && sudo ./actions-runner/svc.sh start && sudo ./actions-runner/svc.sh status'
      ```

### Step 5: Create a DynamoDB Table

1. **Create the DynamoDB Table**:
    - Navigate to the DynamoDB service in the AWS Management Console.
    - Click on "Create table".
    - Set the table name to `vtmunc_applicants`.
    - Define the primary key (e.g., `_id`) as per your application requirements.
    - Click "Create" to create the table.

## Subsequent Deploys

For subsequent deployments, simply push your changes to the `main` branch of your GitHub repository. The configured GitHub Actions workflow will automatically deploy the updates.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

That's it! Your deployment process is now automated, and your application will be deployed upon every push to the main branch.