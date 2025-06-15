FROM amazon/aws-lambda-nodejs:18

# Copy function code
COPY app.js ./

# Set the CMD to your handler (file name and exported function)
CMD ["app.handler"]
