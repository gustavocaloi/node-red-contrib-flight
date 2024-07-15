const axios = require('axios');

module.exports = function(RED) {
    function FlightPostNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.apiUrl = config.apiUrl || 'https://api.oiot.com.br/flight/icao';

        node.on('input', function(msg) {
            const icaoCode  =   msg.payload.hex;
            const hex       =   msg.payload.hex;
            const flight    =   msg.payload.flight;
            const alt_baro  =   msg.payload.alt_baro;
            const alt_geom  =   msg.payload.alt_geom;
            const gs        =   msg.payload.gs;
            const track     =   msg.payload.track;
            const baro_rate =   msg.payload.baro_rate;
            const squawk    =   msg.payload.squawk;
            const emergency =   msg.payload.emergency;
            const category  =   msg.payload.category;
            const nav_qnh   =   msg.payload.nav_qnh;
            const nav_altitude_mcp = msg.payload.nav_altitude_mcp;
            const nav_heading = msg.payload.nav_heading;
            const lat       =   msg.payload.lat;
            const lon       =   msg.payload.lon;
            const nic       =   msg.payload.nic;
            const rc        =   msg.payload.rc;
            const seen_pos  =   msg.payload.seen_pos;
            const version   =   msg.payload.version;
            const nic_baro  =   msg.payload.nic_baro;
            const nac_p     =   msg.payload.nac_p;
            const nac_v     =   msg.payload.nac_v;
            const sil       =   msg.payload.sil;
            const sil_type  =   msg.payload.sil_type;
            const gva       =   msg.payload.gva;
            const sda       =   msg.payload.sda;
            const messages  =   msg.payload.messages;
            const seen      =   msg.payload.seen;
            const rssi      =   msg.payload.rssi;

            if (!icaoCode) {
                node.error("ICAO code is required", msg);
                return;
            }

            const data = {
                icao: icaoCode,
                hex: hex,
                flight: flight,
                alt_baro: alt_baro,
                alt_geom: alt_geom,
                gs: gs,
                track: track,
                baro_rate: baro_rate,
                squawk: squawk,
                emergency: emergency,
                category: category,
                nav_qnh: nav_qnh,
                nav_altitude_mcp: nav_altitude_mcp,
                nav_heading: nav_heading,
                lat: lat,
                lon: lon,
                nic: nic,
                rc: rc,
                seen_pos: seen_pos,
                version: version,
                nic_baro: nic_baro,
                nac_p: nac_p,
                nac_v: nac_v,
                sil: sil,
                sil_type: sil_type,
                gva: gva,
                sda: sda,
                messages: messages,
                seen: seen,
                rssi: rssi
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
