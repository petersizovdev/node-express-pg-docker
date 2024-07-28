const express = require('express');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.route')

const PORT = process.env.PORT || 8080;
const app = express();
app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});



app.use(express.json())
app.use('/api', userRouter);
app.use('/api', postRouter);