FROM node:20-alpine3.21

# Build arguments for image metadata
ARG NODE_ENV=development
ARG APP_VERSION=1.0.0
ARG BUILD_NUMBER=local

# Set environment variables
ENV NODE_ENV=${NODE_ENV}
ENV PORT=3000

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Metadata labels 
LABEL maintainer="developer@example.com"
LABEL version="${APP_VERSION}"
LABEL environment="${NODE_ENV}"
LABEL build-number="${BUILD_NUMBER}"
LABEL description="Simple web application for ${NODE_ENV} environment"

EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1))"

CMD ["npm", "start"]