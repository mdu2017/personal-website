# Outdated, will update later

# Fetch latest node version
FROM node:14.15.4-alpine3.12

# Create working directory
RUN mkdir -p /react-flask-app

# Set working directory
WORKDIR /react-flask-app

# Add node modules to the path
ENV PATH /react-flask-app/node_modules/.bin:$PATH

# Copy the package.json to install dependencies
COPY package.json package.json

# Install pacakges
RUN npm install
RUN npm update 

# Add app inside project
COPY ./ .

# Exposees this port so that other services can access the database within the container
EXPOSE 3000

# Set the startup command to be the start script that runs the project
CMD ["npm","start"]
