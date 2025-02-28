# 1. Use an official Node.js image
FROM node:20.15.0-alpine

# Create and change to the app directory
WORKDIR /app

# Copy only the package definition files first (for efficient caching)
COPY package.json yarn.lock  sitemap.xml robots.txt ./

# Install dependencies for production
# (This also allows Next.js server to run with only the necessary packages)
RUN yarn install --frozen-lockfile --production

# Copy all remaining files (including the .next build folder, .env, next.config.js, etc.)
COPY . .

# Expose port 3005 inside Docker
EXPOSE 3005

# By default, Next.js "start" runs on port 3000,
# so pass a "-p 3005" argument or set ENV if you want to override
CMD ["yarn", "start", "-p", "3005"]

