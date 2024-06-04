FROM node:20

# Set working directory to /app
WORKDIR /app

# Expose port 3000
EXPOSE 3000

# Copy package.json and package-lock.json
COPY package*.json .

# Clean install
RUN npm install --omit=dev && npm cache clean --force

# Copy rest of files
COPY . .

# Build
RUN npm run build

CMD [ "npm", "start" ]