FROM node:18.19.0-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

# Build the app
RUN npm run build

# Production image
FROM node:18.19.0-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/static ./static

# Install production dependencies only
RUN npm install --production --legacy-peer-deps

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"] 