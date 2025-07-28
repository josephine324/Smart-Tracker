# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR ./frontend/src

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all backend files
COPY . .

# Expose port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]