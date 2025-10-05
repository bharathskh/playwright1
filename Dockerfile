FROM node:20-bullseye-slim
WORKDIR /work

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --quiet || npm install --quiet

# Install playwright browsers
RUN npx playwright install --with-deps

COPY . .

CMD ["npx", "playwright", "test"]
