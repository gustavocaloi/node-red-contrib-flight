const axios = require('axios');

module.exports = function(RED) {
    function FlightPostNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.apiUrl = config.apiUrl || 'https://api.oiot.com.br/flight/icao';

        node.on('input', function(msg) {
            const icaoCode  =   msg.payload.hex;
            const payload   =   msg.payload;

            if (!icaoCode) {
                node.error("ICAO code is required", msg);
                return;
            }

            const data = {
                payload
            };

            axios.post(node.apiUrl, data)
                .then(response => {
                    msg.payload = response.data;
                    node.send(msg);
                })
                .catch(error => {
                    node.error("API request failed: " + error.message, msg);
                });
        });
    }

    RED.nodes.registerType("flight-post", FlightPostNode);
};
