import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.write("This is the home page.");
    res.end();
  }
  if (req.method === "GET" && req.url === "/about") {
    res.end("This is the about page.");
  } else {
    res.end(`<h1>OPPs! Page not found.</h1>`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
