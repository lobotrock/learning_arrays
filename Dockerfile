FROM python:3
EXPOSE 8080

CMD ["python3", "-m", "http.server", "8080"]