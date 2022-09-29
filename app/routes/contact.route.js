const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router
    .route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)
    .put(contacts.update);

router
    .route("/favorite")
    .get(contacts.findAllFavorite)
    .put(contacts.update);

router
    .route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete)
    .put(contacts.update);

module.exports = router;