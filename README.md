# Meu App

This project contains a Node.js backend and a React frontend, both containerized with Docker and orchestrated with Nginx.

## Prerequisites

- Docker

## Running the Project

### 0. Create a network

```bash
docker network create mynetwork
```

### 1. Build and Run Backend

```bash
# Build the backend image
docker build -t app-backend -f Dockerfile.backend  .

# Run the backend container
docker run --name backend -d -p 5000:5000 --network mynetwork app-backend
```

### 2. Build and Run Frontend

```bash
# Build the frontend image
docker build -t app-frontend -f Dockerfile.frontend  .

# Run the frontend container
docker run --name frontend -d -p 3000:80 --network mynetwork app-frontend
```

## License

MIT
