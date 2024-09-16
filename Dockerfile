# 1. Use an official Node.js runtime as a parent image for building the React app
FROM node:16 AS build

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the entire project into the working directory
COPY . .

# 6. Build the React app
RUN npm run build

# 7. Use NGINX as a lightweight server to serve the built React files
FROM nginx:alpine

# 8. Copy the built React app to the NGINX directory
COPY --from=build /app/build /usr/share/nginx/html

# 9. Expose port 80
EXPOSE 80

# 10. Start NGINX
CMD ["nginx", "-g", "daemon off;"]
