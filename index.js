const express = require("express");
const React = require("react");

const { renderToString } = require("react-dom/server");
const Home = require("./client/component/Home").default;

const app = express();

const PORT = 5001;
const URL = `http://localhost:${PORT}`;

app.use(express.static("public"));
app.get("*", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
    <html>
        <head>
            <title>React 18 SSR</title>
        </head>
        <script src="bundle.js" defer></script>
        <div id="root">${content}</div>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Running at ${URL}`);
});
