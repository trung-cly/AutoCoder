## Frontend Docker Image

To build the Docker image for the frontend application, run the following commands:

```bash
docker build -t frontend-image .
docker run -p 8080:8080 frontend-image
```
