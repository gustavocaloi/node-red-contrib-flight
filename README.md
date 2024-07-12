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
        "z": "97e3d9225d72d0ca",
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
            "8dd9cfdbaf0e928a",
            "73f2a8ed51ea5d46",
            "957d0143ef781efd",
            "44a11b9c64b313f1"
        ],
        "x": 54,
        "y": 19,
        "w": 672,
        "h": 122
    },
    {
        "id": "4e57e78f7ad91d8a",
        "type": "inject",
        "z": "97e3d9225d72d0ca",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "957d0143ef781efd"
            ]
        ]
    },
    {
        "id": "8dd9cfdbaf0e928a",
        "type": "flight-icao",
        "z": "97e3d9225d72d0ca",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "x": 480,
        "y": 100,
        "wires": [
            [
                "73f2a8ed51ea5d46"
            ]
        ]
    },
    {
        "id": "73f2a8ed51ea5d46",
        "type": "debug",
        "z": "97e3d9225d72d0ca",
        "g": "f0b6bbfb3c338919",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 100,
        "wires": []
    },
    {
        "id": "957d0143ef781efd",
        "type": "change",
        "z": "97e3d9225d72d0ca",
        "g": "f0b6bbfb3c338919",
        "name": "Preencha o ICAO",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "C4L0I",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 100,
        "wires": [
            [
                "8dd9cfdbaf0e928a"
            ]
        ]
    },
    {
        "id": "44a11b9c64b313f1",
        "type": "comment",
        "z": "97e3d9225d72d0ca",
        "g": "f0b6bbfb3c338919",
        "name": "",
        "info": "Envie payload com o codigo ICAO e receba retorno com as informaçoes do voo",
        "x": 160,
        "y": 60,
        "wires": []
    }
]
```