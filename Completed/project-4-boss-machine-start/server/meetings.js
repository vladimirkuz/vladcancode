const express = require('express');
const meetingsRouter = express.Router();

//GET /api/meetings to get an array of all meetings.
//POST /api/meetings to create a new meeting and save it to the database.
//DELETE /api/meetings to delete all meetings from the database.

const {
  addToDatabase,
  getAllFromDatabase,
  createMeeting,
  deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
  const deleted = deleteAllFromDatabase('meetings');
  res.status(204).send();

});

module.exports = meetingsRouter;
