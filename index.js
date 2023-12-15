console.log("digite o nivel do seu heroi")
let nickname = ""

console.log("Digite o nivel do heroi")
let xp = 5000
var nivel = ""
if (xp <= 1000){
    nivel = "Ferro" 
}else if (xp >= 1001 && xp < 2000){
    nivel = "Bronze" 
}else if (xp >= 2001 && xp < 5000){
    nivel = "Prata" 
}else if (xp >= 5001 && xp < 6000){
    nivel = "Ouro" 
}else if (xp >= 6001 && xp < 7000){
    nivel = "Platina" 
}else if (xp >= 7001 && xp < 8000){
    nivel = "Ascendente" 
}else if (xp >= 8001 && xp < 9000){
    nivel = "Imortal" 
}else if (xp >= 10001){
    nivel = "Radiante" 
}
console.log("O heroi de nome " + nickname + " está no nível de " + nivel)