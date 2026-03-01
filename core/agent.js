const Evolution = require("./evolution")
const ForkEngine = require("./forkEngine")

class Agent {

    constructor(id){

        this.id = id
        this.score = 0
        this.generation = 1

    }

    run(){

        console.log("Running agent:", this.id)

        this.score = Math.random()*100

        return this.score

    }

    evolve(){

        return Evolution.mutate(this)

    }

    fork(){

        return ForkEngine.fork(this)

    }

}

module.exports = Agent
