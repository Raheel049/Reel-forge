FROM node:24-alpine
WORKDIR /app
COPY . .
RUN npm install
USER node 
CMD ["npm", "start"]
EXPOSE 3000