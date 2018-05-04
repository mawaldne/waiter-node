import express from 'express';

let app = express();
const PORT = process.env.PORT || 3000;

app.post('/wait', (req, res) => {
  let seconds = parseInt(req.query.seconds);
  if (isNaN(seconds)) { seconds = 1; }

  console.log(`Found seconds: ${seconds}`);

  setTimeout(function() {
    res.send({status: 'ok'})
  }, seconds * 1000);
});

app.listen(PORT, () => {
    console.log(`server started - ${PORT}`);
});
