const http = require("http");
const file = require("fs");
const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>forms</title></head>");
    res.write(
      "<body><form action='/message' method='POST'> <input type='text' name='message' /><button>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const arr = [];
    req.on("data", (chunk) => {
      arr.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(arr).toString();
      const message = parseBody.split("=")[1];
      file.writeFileSync("text.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //console.log(res);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my first page</title></head>");
  res.write("<body><h1>hello world</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
