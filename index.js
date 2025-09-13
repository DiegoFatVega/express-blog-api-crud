const express = require(`express`);
const app = express();
const PORT = 3000;

const postRouter = require(`./routes/posts`);

app.listen(PORT, () => {
    console.log(`example app listening on port http://localhost:${PORT}`)
})

app.use(express.static(`public`));
app.use(`/posts`, postRouter);