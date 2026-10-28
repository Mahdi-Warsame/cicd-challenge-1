## 🚀 CI/CD Challenge 1 — Node.js App

A simple Node.js application demonstrating automated testing, Docker containerization, and CI/CD with GitHub Actions.

# 🛠️ Tech Stack

* Node.js & Express — Web application
* Jest & Supertest — Automated testing
* Docker — Containerization
* GitHub Actions — CI/CD automation
* Docker Hub — Image registry

# ⚙️ CI/CD Pipeline

Whenever code is pushed to main, GitHub Actions:

1. Installs dependencies and runs automated tests.
2. Builds a Docker image if the tests pass.
3. Publishes the image to Docker Hub with latest and commit SHA tags.

Pull requests targeting main trigger the test job but do not publish an image.
# 🏃 Run Locally
# Install dependencies
npm ci

# Run tests
npm test

# Start the application
npm start
Visit http://localhost:3000 to access the app.

Health check: http://localhost:3000/health

# 🐳 Run with Docker

# Build the image
docker build -t node-cicd-app .

# Run the container
docker run -d -p 3000:3000 --name node-cicd-container node-cicd-app

# 📚 What I Learned

* Automating tests with GitHub Actions
* Building and publishing Docker images
* Managing credentials securely with GitHub Secrets
* Using Docker image tags to track versions
* Connecting automated testing with image publishing

# 🔭 Next Steps

* Improve test coverage
* Add deployment automation
* Implement health checks and rollback strategies

Part of my DevOps learning journey. Learning by building, one pipeline at a time! 🌱