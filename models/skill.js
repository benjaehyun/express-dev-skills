const skills = [
    {id: 236, skill: 'recursive functions', confidence: 'low'},
    {id: 654, skill: 'element heirarchy', confidence: 'high'},
    {id: 964, skill: 'reactive sizing', confidence: 'medium'}
]

module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne, 
    update
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(confidence, updatedSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id) 
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000000
    skills.push(skill)
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills
}