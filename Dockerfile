# Use the official Node.js LTS image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the desired port
EXPOSE 4001

# Start the app with the correct port
ENV PORT=4001
CMD ["npm", "start"]