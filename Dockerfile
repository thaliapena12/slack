FROM node:10-alpine

COPY . /app

WORKDIR /app

ENV NODE_ENV=production

RUN npm install --silent \
  && npm run frontend-install --silent \
  && npm run build --prefix frontend

EXPOSE 5000

CMD ["npm", "start"]