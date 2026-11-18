import { mountApp } from "./App/App.js"

const TIME = 5000
const STEP = 1

const playerChunks = [
    {
        playerImageParams: {
            src: "./img/alex-azabache-8L7mOETNgHA-unsplash.jpg",
            alt: "Pirámida mexicana",
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/andres-sanz-uILhNE1VcwA-unsplash.jpg",
            alt: "Desierto al atardecer"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/bhargava-marripati-7LDBKPWAHJ4-unsplash.jpg",
            alt: "El Zócalo"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/carlos-aguilar-oGRrpBX2ER4-unsplash.jpg",
            alt: "El Templo"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/christopher-kuzman-2LhCDvS_7xs-unsplash.jpg",
            alt: "Paisaje oceánico"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/david-carballar-FZU-vIW-lk8-unsplash.jpg",
            alt: "La Catedral"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/marv-watson-UfK0P6WygEE-unsplash.jpg",
            alt: "Pirámida de los Maya"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    },
    {
        playerImageParams: {
            src: "./img/megumi-sugiyama-17SkY0uq23A-unsplash.jpg",
            alt: "Calle oaxaqueña"
        },
        playerChunkOverlayParams: {
            overlays: [
                {
                    type: "text",
                    value: "¡Hola,",
                    styles: {
                        color: "orange",
                        "font-size": "60px",
                        "text-shadow": "1px 1px #000",
                        top: "60%",
                        left: "30%",
                        transform: "rotate(-30deg)"
                    }
                },
                {
                    type: "text",
                    value: "vecino!",
                    styles: {
                        color: "orange",
                        "font-size": "30px",
                        "text-shadow": "1px 1px #000",
                        top: "10%",
                        left: "30%",
                        transform: "rotate(-90deg)"
                    }
                }
            ]
        }
    }
]

window.addEventListener("load", () => {
    mountApp({
        playerChunkParams: playerChunks,
        delayPerChunk: TIME,
        stepPerChunk: STEP
    })
})