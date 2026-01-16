function saludar () {
    alert("Bienvenido a la Academia de T.I");

}
function suma(){
    var valor1 =24;
    var valor2 =13;
    var resultado= valor1 + valor2;
    alert("Resultado de la suma es:"+resultado);
}
function resta(){
    var valor1 =24;
    var valor2 =13;
    var resultado= valor1 + valor2;
    alert("Resultado de la resta es:"+resultado);


}
function multiplicacion(){
    var valor1 =24;
    var valor2 =13;
    var resultado= valor1 * valor2;
    alert("Resultado de la multiplicacion de"+valor1+ "y " +valor2+"es: "+resultado);


}
function divicion(){
    var valor1 =24;
    var valor2 =13;
    var resultado= valor1 / valor2;
    alert("Resultado de la divicion de" +valor1+ "y " +valor2+" es: "+resultado);


}

// Efecto Parallax para la imagen ONE
document.addEventListener('mousemove', function(e) {
    const parallaxImage = document.querySelector('.parallax-image');
    if (parallaxImage) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        parallaxImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});