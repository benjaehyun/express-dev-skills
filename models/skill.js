const skills = [
    {topic: 'javascript', skill: 'recursive functions', confidence: 'low'},
    {topic: 'html', skill: 'element heirarchy', confidence: 'high'},
    {topic: 'css', skill: 'reactive sizing', confidence: 'medium'}
]

module.exports = {
    getAll, 
    getConfidence
}

function getAll() {
    return skills
}

function getConfidence(confidence) {
    return skills.includes(confidence)
}