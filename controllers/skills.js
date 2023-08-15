const Skill = require('../models/skill')
module.exports = {
    index, 
    show
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getConfidence(req.params.confidence) /* be sure and check if you can actually use 'confidence here or if you have to actually use id, same for the routes and model function  */
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}