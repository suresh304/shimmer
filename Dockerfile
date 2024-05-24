FROM node:16.20.2-buster

# Use an official Node runtime as a base image

# Set the working directory in the container
WORKDIR /shimmer

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
