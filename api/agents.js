const express = require("express")
const Agent = require("../core/agent")

const router = express.Router()

router.get("/agent/new",(req,res)=>{

    const id = "agent-"+Date.now()

    const agent = new Agent(id)

    res.json(agent)

})

module.exports = router
