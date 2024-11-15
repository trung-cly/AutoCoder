## Backend Docker Image

To build the Docker image for the backend application, run the following commands:

```bash
docker build -t backend-image .
docker run -p 8081:8081 backend-image
```
