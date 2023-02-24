const rout = function (req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>assignment</title></head>");
    res.write(
      "<body><form action='/creat-user' method='POST'><input type='text' name='message'/> <button>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (method === "POST" && url === "/creat-user") {
    const arr = [];
    req.on("data", (chunk) => {
      arr.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(arr).toString();
      const result = parseBody.split("=")[1];
      fs.writeFile("rel.txt", result, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  if (url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>assignment</title></head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
};

module.exports = rout;
