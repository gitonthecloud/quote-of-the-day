# Use alpine as base image
From node:14-alpine

# create directory and set permission
RUN mkdir -p /home/quote-of-the-day && chown -R node:node /home/quote-of-the-day

# set working directory
WORKDIR /var/lib/jenkins/workspace/quote-of-the-day-pipeline

# install app dependencies
COPY package.json /home/quote-of-the-day/

# switch to user node to ensure all files are owned by node before running npm install 
USER node

# for production env, use RUN npm ci --only=production
RUN npm install

# bundle app source, with user node
COPY --chown=node:node ./src/* /home/quote-of-the-day/

# expose port 4500 of container
EXPOSE 4500

# start app
CMD [ "node", "server.js" ]
