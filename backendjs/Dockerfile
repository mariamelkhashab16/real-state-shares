# Use Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the port your backend uses
EXPOSE 8080

# Start the backend
CMD ["npm", "start"]
