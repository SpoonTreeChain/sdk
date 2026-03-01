// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgentRegistry {

    struct Agent {

        address owner;
        string agentId;
        uint generation;

    }

    mapping(string => Agent) public agents;

    function registerAgent(
        string memory id,
        uint generation
    ) public {

        agents[id] = Agent(
            msg.sender,
            id,
            generation
        );

    }

}
