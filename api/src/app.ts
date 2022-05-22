import app from './api';

app.listen(process.env.PORT || 3000, () => {
  console.log(`API listen on port ${process.env.PORT || 3000}`);
});
