const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (primeiroNome && sobrenome && apelido) {
    console.log(apelido)
}
else if (primeiroNome && sobrenome) {
    console.log(primeiroNome + " " + sobrenome)
}
else if (primeiroNome && apelido) {
    console.log(apelido)
}
else if (primeiroNome) {
    console.log(primeiroNome)
}

