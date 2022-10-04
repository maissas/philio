
const asyncHandler = require('express-async-handler')
const Member = require('../models/member.model')

/** Create and Save a new Member **/
const setMember = async function (event, res) {
  console.log("inside setMember")
  /*if (req.files){
    console.log("req.files uploaded :D ")
  } else if (req.body.files){
    console.log("req.body.files uploaded ;) ")
  }
  */
  const requestBody = JSON.parse(event.body);
  console.log(requestBody)
  let member = new Member(requestBody)
  member.save(function (err) {
    if (err) {
      console.log(err)
      res.send("ERR: " + err)
      return next(err);
    }
    res.send({
      description:'Member Created successfully',
      //result: membersList,
    })
  })

}

/** Retrieve all Members from the database. **/
const getAllMembers = asyncHandler(async (req, res) => {
  const membersList = await Member.find();
  console.log("membersList")
  console.log(membersList)

  res.status(200).json({
    description: "Successfully fetched all data!",
    result: membersList,
  });
});

//const img = require('../../server/uploads/')
const getImgProfile = function (req, res) {
  res.download(`../server/uploads/` + req.params.path)
};

// Delete a Member with the specified id in the request
const deleteMember = function (req, res)  {
  console.log(req.params.id)
  const id = req.params.id
  Member.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
        });
      } else {
        res.send({
          message: "Member was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Member with id= " + id
      });
    });
};

module.exports = {
  setMember,
  getAllMembers,
  getImgProfile,
  deleteMember
}

/*
// Find a single Member with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Member.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Member with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Member with id=" + id });
    });
};

// Update a Member by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Member.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found!`
        });
      } else res.send({ message: "Member was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Member with id=" + id
      });
    });
};


// Delete all Members from the database.
exports.deleteAll = (req, res) => {
  Member.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Members were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all members."
      });
    });
};


// Find all published Members
exports.findAllPublished = (req, res) => {
  Member.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};
*/
