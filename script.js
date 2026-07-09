let opcionSeleccionada = "";

/* ==========================
CAMBIO DE PANTALLAS
========================== */

function mostrarPantalla(numero) {

document
    .querySelectorAll(".pantalla")
    .forEach(p => p.classList.remove("activa"));

document
    .getElementById(`pantalla${numero}`)
    .classList.add("activa");

}

/* ==========================
SELECCIÓN DE OPCIÓN
========================== */

function seleccionarOpcion(opcion) {

opcionSeleccionada = opcion;

const mensaje =
    document.getElementById("mensajeSeleccion");

const boton =
    document.getElementById("btnFinal");

const nombres = {

    mundo: "🎢 Mundo Aventura",
    cafeteria: "☕ Cafetería especial en el centro + Caminata",
    bolos: "🎳 Bolos",
    jardin: "🌿 Biblioteca Virgilio Barco",
    cafe: "☕ Café Cercano"

};

mensaje.innerHTML =
    `✨ Excelente elección: <strong>${nombres[opcion]}</strong> ✨`;

boton.style.display = "inline-block";

lanzarConfeti();

}

/* ==========================
RESULTADOS FINALES
========================== */

function mostrarResultado() {

const titulo =
    document.getElementById("tituloResultado");

const texto =
    document.getElementById("textoResultado");

const resultados = {

    mundo: {
        titulo: "🎢 ¡Has seleccionado Mundo Aventura!",
        texto:
            "¿Estás lista para subirnos a todas las atracciones que podamos? Si es asi crucemos los dedos para que la gripa nos deje gritar!"
    },

    cafeteria: {
        titulo: "☕ ¡Has seleccionado la Cafetería en el centro + Sorpresa!",
        texto:
            "Después del café podremos caminar, conversar y descubrir lugares del centro, hay mucho por ver!"
    },

    bolos: {
        titulo: "🎳 ¡Has seleccionado Bolos!",
        texto:
            "Excelente elección! Ya quiero ver cómo nos va! Y quien gane elegirá la siguiente cita por supuesto."
    },

    jardin: {
        titulo: "🌿 ¡Has seleccionado la biblioteca Virgilio Barco!",
        texto:
            "Me parece una opción perfecta para caminar, conversar y desconectarnos un rato del ruido de la ciudad. Además, cerca conozco un café bastante agradable para complementar el paseo."
    },

    cafe: {
        titulo: "☕ ¡Has seleccionado el Café Cercano!",
        texto:
            "Ahora tendré la importante misión de elegir un lugar que esté a la altura de la ocasión. Tu tranquila yo nervioso que yo me encargo de todo."
    }

};

titulo.innerHTML =
    resultados[opcionSeleccionada].titulo;

texto.innerHTML =
    resultados[opcionSeleccionada].texto;

mostrarPantalla(3);

}

/* ==========================
REINICIAR
========================== */

function reiniciar() {

opcionSeleccionada = "";

document.getElementById(
    "mensajeSeleccion"
).innerHTML = "";

document.getElementById(
    "btnFinal"
).style.display = "none";

mostrarPantalla(1);

}

/* ==========================
CONFETI
========================== */

function lanzarConfeti() {

const canvas =
    document.getElementById("confettiCanvas");

const ctx =
    canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const piezas = [];

for (let i = 0; i < 150; i++) {

    piezas.push({

        x: Math.random() * canvas.width,
        y: -20,

        size: Math.random() * 10 + 5,

        speedY: Math.random() * 4 + 2,

        speedX: Math.random() * 4 - 2,

        color: [

            "#F4A261",
            "#E76F51",
            "#FFD6A5",
            "#F6E7C1",
            "#FFFFFF"

        ][Math.floor(Math.random() * 5)]

    });
}

let tiempo = 0;

function animar() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    piezas.forEach(p => {

        p.y += p.speedY;
        p.x += p.speedX;

        ctx.fillStyle = p.color;

        ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
        );

    });

    tiempo++;

    if (tiempo < 120) {

        requestAnimationFrame(animar);

    } else {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
    }
}

animar();

}

/* ==========================
AJUSTE DE TAMAÑO
========================== */

window.addEventListener(
"resize",
() => {

    const canvas =
        document.getElementById(
            "confettiCanvas"
        );

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

);