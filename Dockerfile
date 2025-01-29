# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json first
COPY package.json package-lock.json ./

# Force npm to use default registry and avoid network issues
RUN npm install --registry=https://registry.npmjs.org/

# Copy the remaining files
COPY . .

# Build the React app
RUN npm run build

# Expose the port React runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]