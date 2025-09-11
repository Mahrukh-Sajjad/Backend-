const app = require("./src/app");

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//middlewares have some properties
// -They can modify request. Request k under jo data ara hai usay modify kiya ja skta hai.
// -They can sebd response.
//postman =>req=> app =>req=> router =>req> api =>res=> postman
// we can place middlewares between  app and router or router and api.
// if we place middleware between app and router requests from app goes to router
// passing from middleware.
