FROM cypress/included:14.5.4

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npx", "cypress", "run"]
