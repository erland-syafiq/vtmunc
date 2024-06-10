# 📂 Project Overview

## Directory Structure

The project repository is organized into several directories, each serving a specific purpose. Below is an overview of the main directories and their contents:

```
.
├── .git
├── .github
├── LICENSE
├── README.md
├── aws
├── docs
├── dotnet-archive
├── reverse-proxy
└── site
```

### 1. `.git`

This directory contains the Git version control system files. It tracks changes in the project files and manages the history and collaboration features of Git.

### 2. `.github`

This directory holds GitHub-specific configuration files, including GitHub Actions workflows.. The workflows defined here automate tasks such as testing and deployment.

### 3. `LICENSE`

This file contains the license under which the project is distributed. It specifies the terms and conditions for using, copying, modifying, and distributing the software.

### 4. `README.md`

The README file provides an overview of the project, including instructions on how to set up, build, and run the application. It serves as the first point of reference for anyone interested in the project.

### 5. `aws`

This directory includes scripts and configuration files needed for setting up and managing the AWS infrastructure. Specifically, it contains the EC2 instance setup scripts used to initialize the server environment.

### 6. `docs`

The `docs` directory contains documentation related to the project. This can include design documents, user guides, developer notes, and other relevant documentation that aids in understanding and contributing to the project.

### 7. `dotnet-archive`

This directory holds the old version of the website, which was built using ASP.NET. It serves as an archive for the legacy codebase, allowing reference and potential reuse of previous implementations.

### 8. `reverse-proxy`

The `reverse-proxy` directory contains configuration files for the reverse proxy setup. This is used to manage incoming traffic and route it to the appropriate services, enhancing security and performance.

### 9. `site`

The `site` directory contains the code for the current version of the website, built using the NEXT.js framework. This includes all the components, pages, styles, and logic required for the web application.

---

By maintaining a well-organized directory structure, the project ensures clarity and ease of navigation for developers and contributors. Each directory has a clear purpose, facilitating efficient development and management of the project.