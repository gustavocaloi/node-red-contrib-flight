const axios = require('axios');

module.exports = function(RED) {
    function AnacGetNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            const axios = require('axios');
            const flightCode = msg.payload;

            if (!flightCode) {
                node.error("FLIGHT code is required");
                return;
            }

            const apiUrl = `https://api.oiot.com.br/flight/anac/?flight=${flightCode}`;

            axios.get(apiUrl)
                .then(response => {
                    msg.payload = response.data;
                    node.send(msg);
                })
                .catch(error => {
                    node.error("API request failed: " + error.message);
                });
        });
    }
    RED.nodes.registerType("anac-get", AnacGetNode);
};