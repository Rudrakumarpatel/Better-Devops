# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
