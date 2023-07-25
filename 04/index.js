const ladoA = 3;
const ladoB = 3;

if (ladoA == ladoB && ladoA == 0) {
    console.log("BRANCO")
}
else if (ladoA == ladoB && ladoA == 1) {
    console.log("ÁS")
}
else if (ladoA == ladoB && ladoA == 2) {
    console.log("DUQUE")
}
else if (ladoA == ladoB && ladoA == 3) {
    console.log("TERNO")
}
else if (ladoA == ladoB && ladoA == 4) {
    console.log("QUADRA")
}
else if (ladoA == ladoB && ladoA == 5) {
    console.log("QUINA")
}
else if (ladoA == ladoB && ladoA == 6) {
    console.log("SENA")
}

else {
    console.log("NÃO É UMA BUCHA")
}