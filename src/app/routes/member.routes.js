/* When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE),
 we need to determine how the server will reponse by setting up the routes.

These are our routes:

/api/members: GET, POST, DELETE
/api/members/:id: GET, PUT, DELETE
/api/members/published: GET


 */


module.exports = app => {
  const members = require("../controllers/member.controller");
  var router = require("express").Router();
  // Create a new Member
  router.post("/", members.create);
  // Retrieve all Member
  router.get("/", members.findAll);
  // Retrieve all published Members
  router.get("/published", members.findAllPublished);
  // Retrieve a single Member with id
  router.get("/:id", members.findOne);
  // Update a Member with id
  router.put("/:id", members.update);
  // Delete a Member with id
  router.delete("/:id", members.delete);
  // Create a new Member
  router.delete("/", members.deleteAll);
  app.use('/api/members', router);
};
