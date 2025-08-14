# === STAGE 1: Base image ===
FROM node:20-alpine AS base

# === STAGE 2: Install dependencies ===
FROM base AS deps
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# === STAGE 3: Build application ===
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build

# === STAGE 4: Production image ===
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built app from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start", "-p", "3000"]
