function cambiarMensaje() {
    var mensajes = [
        "Sos hermosa mi pucherito",
        "Tu sonrisa tiene el poder de iluminar hasta el dia mas oscuro de mi vida",
        "Sos la mujer mas hermosa en el universo",
        "Contigo soy la persona más feliz del mundo",
        "Quiero pasar el resto de mi vida junto a vos preciosa",
        "Sos el amor de mi vida",
        "Ojala tengamos muchisisisisimos meses, años y cosas lindas juntos",
        "Te amo como nadie te va a amar nunca pucherito",
        "Tu carita es lo mas hermoso del mundo <3",
        "Ojala me dejes compartir el resto de mi vida contigo",
        "Ojala poder hacerte feliz como te mereces mi amor, mereces todo en este mundo",
        "Sos la persona con el alma mas pura que conoci en mi vida, no tenes ni un gramo de maldad y eso me enamoro <3"

    ];
    var indice = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").innerHTML = mensajes[indice];
}

document.getElementById("boton").addEventListener("click", function () {
    cambiarMensaje();
});  