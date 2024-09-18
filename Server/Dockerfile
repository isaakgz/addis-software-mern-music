#use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file into the container at /app
COPY package.json package-lock.json ./


# Install all dependencies
RUN npm install


# Copy the rest of the application code into the container at /app
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]


