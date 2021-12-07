# Turbo Docker Image
#
# This is an example docker config that can be used to build a Turbo
# Docker image. Once built you can package your application and run
# it on any container hosting service, or locally via the docker run
# command.
#
# Instructions:
# 1. Copy this file to your Turbo project directory.
# 2. You can change the expose port if needed.
# 3. Add a .dockerignore file if you do not want to put certain files in the image.
# 4. Make sure you have the "start" command setup correctly in your package.json file.
# 5. Run: "docker build . -t <company-name>/<project-name>".
# 6. Run: "docker run -p <localPort>:<containerPort> <company-name>/<project-name>".
#
# Debug:
# You can access the container by doing:
# docker exec -it <container-id/name> /bin/bash
#
# Based on:
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Use NodeJS version 16.x.
FROM node:16

# Create a new directory.
WORKDIR /usr/src/app

# Copy the package.json file.
COPY package.json .

# Copy the yarn.lock file.
COPY yarn.lock .

# Install the dependencies.
RUN yarn

# Copy built files.
COPY . .

# Expose port 3000.
# Change to your port you have defined in your config.
EXPOSE 3000

# Run the application.
CMD ["yarn", "start"]
