const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/typeDefs");

const startServer = async () => {
  // instantiate the express and apollo-server
  const app = express();
  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Hello Victor Aremu");
  });

  //  Connect to databae
   await mongoose.connect(keys.MongoDB_Url, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
   });

  console.log("Mongoose connected...");

  app.listen(4000, () => console.log("Server is running on port 4000"));
}
// Call function
startServer();
