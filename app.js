exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: 'Hello from Lambda containerized Node.js from reusable workflow\n',
  };
};
