const Agent = require("./agent")

module.exports = {

    fork(agent){

        const id = "agent-" + Math.floor(Math.random()*100000)

        const child = new Agent(id)

        child.generation = agent.generation + 1

        return child

    }

}
