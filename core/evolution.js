module.exports = {

    mutate(agent){

        const mutation = Math.random()

        return {

            parent: agent.id,
            mutation: mutation,
            generation: agent.generation + 1

        }

    }

}
