const Skill = require('../models/skill')

module.exports = {
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill//, 
    // edit, 
    // update
}

// function update(req, res) {
//     req.body.difficulty = 
// }

// function edit(req, res) {
//     const skill = Skill.getOne(req.params.id)
//     res.render('skills/edit', {
//         title:'Edit Skills', 
//         skill
//     })
// }

function deleteSkill (req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function newSkill(req,res) {
    res.render('skills/new')
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id) /* be sure and check if you can actually use 'confidence here or if you have to actually use id, same for the routes and model function  */
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}