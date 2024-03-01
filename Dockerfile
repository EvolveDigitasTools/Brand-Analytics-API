# Base image
FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript files
RUN npm run build

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "dist/index.js"]
