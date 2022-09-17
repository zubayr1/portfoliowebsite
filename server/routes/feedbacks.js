const router = require('express').Router();
let Feedback = require('../models/feedback.model');

router.route('/').get((req, res) =>
{
    Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('error: '+ err));
});

router.route('/add').post((req, res) =>
{
    const username = req.body.username;
    const description = req.body.username;
    const date = req.body.username;

    const newFeedback = new User({username, description, date});

    newFeedback.save()
    .then(() => res.json('Feedback added'))
    .catch(err => res.status(400).json('error: '+ err));
})

module.exports = router;