# node-red-contrib-flight

![Node-RED](https://img.shields.io/badge/node--red-icaonode-brightgreen)

Um nó Node-RED para consultar informações de voo usando códigos ICAO.

## Instalação

Para instalar este nó, execute o seguinte comando no diretório do seu Node-RED:
```bash
npm install node-red-contrib-flight
```

## Uso
Este nó permite que você consulte informações de voo fornecendo um código ICAO como payload.

## Exemplo de Flow
```bash
[
    {
        "id": "f0b6bbfb3c338919",
        "type": "group",
        "z": "f1bdd0a078a6dc21",
        "style": {
            "stroke": "#999999",
            "stroke-opacity": "1",
            "fill": "none",
            "fill-opacity": "1",
            "label": true,
            "label-position": "nw",
            "color": "#a4a4a4"
        },
        "nodes": [
            "4e57e78f7ad91d8a",
            "73f2a8ed51ea5d46",
            "957d0143ef781efd",
            "44a11b9c64b313f1",
            "19328182eca4596e",
            "1152634daf89d870"
        ],
        "x": 74,
        "y": 119,
        "w": 852,
        "h": 122
    },
    {
        "id": "4e57e78f7ad91d8a",
        "type": "inject",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 170,
        "y": 200,
        "wires": [
            [
                "957d0143ef781efd"
            ]
        ]
    },
    {
        "id": "73f2a8ed51ea5d46",
        "type": "debug",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "flight-get",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 820,
        "y": 200,
        "wires": []
    },
    {
        "id": "957d0143ef781efd",
        "type": "change",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "Preencha o ICAO",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "C4L0I",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 330,
        "y": 200,
        "wires": [
            [
                "1152634daf89d870"
            ]
        ]
    },
    {
        "id": "44a11b9c64b313f1",
        "type": "comment",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "info": "Envie payload com o codigo ICAO e receba retorno com as informaçoes do voo",
        "x": 180,
        "y": 160,
        "wires": []
    },
    {
        "id": "19328182eca4596e",
        "type": "flight-get",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "x": 680,
        "y": 200,
        "wires": [
            [
                "73f2a8ed51ea5d46"
            ]
        ]
    },
    {
        "id": "1152634daf89d870",
        "type": "delay",
        "z": "f1bdd0a078a6dc21",
        "g": "f0b6bbfb3c338919",
        "name": "API Rate Limit",
        "pauseType": "queue",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "allowrate": false,
        "outputs": 1,
        "x": 520,
        "y": 200,
        "wires": [
            [
                "19328182eca4596e"
            ]
        ]
    }
]
```