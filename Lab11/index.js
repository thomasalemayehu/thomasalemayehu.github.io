const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((request, response) => {
  let path = request.url;

  if (path === "/image")
    sendFile(
      request,
      response,
      getFilePath("/static/img/puppy.jpg"),
      "image/jpg"
    );
  else if (path === "/pdf")
    sendFile(
      request,
      response,
      getFilePath("/static/pdf/lab10.pdf"),
      "application/pdf"
    );
  else if (path === "/home")
    sendText(request, response, "Welcome to my website");
  else pageNotFound(request, response);
});

server.listen(PORT, () => {
  console.log(`Server is live at ${PORT}`);
});



// helper functions
function getFilePath(contentPath) {
  return path.join(__dirname, contentPath);
}

function sendFile(request, response, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(400, { "Content-type": "text/html" });
      console.log(err);
      response.end("Image not found");
    } else {
      response.writeHead(200, { "Content-type": contentType });
      response.end(data);
    }
  });
}

function sendText(request, response, messageText) {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end(messageText);
}

function pageNotFound(request, response) {
  response.writeHead(400, { "Content-type": "text/html" });
  response.end("Request not recognized");
}


