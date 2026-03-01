module.exports = {

    compete(agents){

        let winner = null
        let highestScore = 0

        agents.forEach(agent=>{

            const score = agent.run()

            if(score > highestScore){

                highestScore = score
                winner = agent

            }

        })

        return winner

    }

}
