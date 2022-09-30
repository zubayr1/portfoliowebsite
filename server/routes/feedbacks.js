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

router.route('/:id').get((req, res) =>
{
    Feedback.findById(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('error: '+ err))
});

router.route('/:id').delete((req, res) =>
{
    Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json('feedback deleted'))
    .catch(err => res.status(400).json('error: '+ err))
});

router.route('/update/:id').post((req, res) =>
{
    Feedback.findById(req.params.id)
    .then(feedback => 
        {
            feedback.username = res.body.username;
            feedback.description = res.body.description;
            feedback.date = Date.parse(res.body.date);

            feedback.save()
            .then(()=> res.json('feedback updated'))
            .catch(err => res.status(400).json('error: '+ err))
        })
    .catch(err => res.status(400).json('error: '+ err))
});

module.exports = router;