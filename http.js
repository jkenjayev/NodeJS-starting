const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Asosiy sahifa...");
    res.end();
  }
  if (req.url === "/api/books") {
    res.write(JSON.stringify(['Clean Code']));
    res.end();
}
});
server.listen(8000);
console.log(`${server.address().port} - portni eshitishni boshladim...`);
