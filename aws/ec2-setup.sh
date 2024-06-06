#!/bin/bash

set -e
set -x

# Installing Caddy
sudo apt-get update
sudo apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt stable main' | sudo tee /etc/apt/sources.list.d/caddy-stable.list > /dev/null
sudo apt-get update
sudo apt-get install -y caddy

# Writes config file
sudo wget https://raw.githubusercontent.com/Trafix120/VTMUNC/main/reverse-proxy/CaddyFile -O /etc/caddy/Caddyfile
sudo systemctl enable caddy
sudo systemctl restart caddy

# Install Docker
# Add Docker's official GPG key:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/trusted.gpg.d/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add github runner

# Creates user githubrunner
sudo useradd -m -d /home/githubrunner -s /bin/bash githubrunner
sudo passwd -d githubrunner 
sudo usermod -aG sudo githubrunner
sudo usermod -aG docker githubrunner

# Login to githubrunner
sudo -u githubrunner bash -c 'cd ~ && mkdir actions-runner && cd actions-runner && curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz && echo "d62de2400eeeacd195db91e2ff011bfb646cd5d85545e81d8f78c436183e09a8  actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c && tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz'

