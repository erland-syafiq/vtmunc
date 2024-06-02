FROM node:20

# Sets working directory to /app
WORKDIR /app

# Creates public folder to hold frontend
RUN mkdir ./public 

# Expose port 8080
EXPOSE 8080

# Copy backend package.json and package-lock.json
COPY package*.json .

# Copy frontend package.json and package-lock.json
COPY public/package*.json public/

# Install libraries for backend
RUN npm install --omit=dev && npm cache clean --force

# Install libraries for frontend
RUN cd public && npm install --omit=dev && npm cache clean --force

# Copy over codebase
COPY . .

# Compiles the frontend
RUN cd public && npm run build

# Executes server
CMD [ "npm", "start" ]



