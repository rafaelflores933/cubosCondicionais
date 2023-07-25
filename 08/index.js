const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || possuiPatologia == true || altura < 150) {
    console.log("ACESSO NEGADO")
}
else if (idade < 18 || ehEstudante == true) {
    console.log("R$ 10,00")
}
else {
    console.log("R$ 20,00")
}