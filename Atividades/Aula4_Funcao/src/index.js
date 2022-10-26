/*
1.Monte as formulas com base nas ultimas 3 aulas.
2.Monte os campos formulários para receber os 4 parametros informando as condições.
3.Mostre o resultado em um comando SPAN
*/


// Calcula Pitagoras

function calculaH(co, ca)
{
    return Math.sqrt(Math.pow(ca,2) + Math.pow(co,2))
}
function calculaCO(h, ca)
{
    return Math.sqrt(Math.pow(ca,2) - Math.pow(co,2))
}
function calculaCA(h,co)
{
    return Math.sqrt(Math.pow(ca,2) - Math.pow(co,2))
}

function calculaPitagoras (h,ca,co)
{
    if (h==0)
    {
        return calculaH (co,ca)
    }
    else if (co==0)
    {
        return calculaCO (h,ca)
    }
    else (h==0)
    {
        return calculaCA (h,co)
    }
}

//Calcula Regra de tres

function calculaA(b,c,d){
    return (b*c)/d;  
}
function calculaB(a,c,d){
    return (a*c)/d;
}
function calculaC(b,a,d){
    return (b*a)/d;
}
function calculaD(b,c,a){
    return (b*c)/a;
}

function calculaRegraDeTres(a,b,c,d){
    if (a==0){
        return calculaA(b,c,d);
    }
    else if (b==0){
        return calculaB(a,c,d);
    }
    else if (c==0){
        return calculaC(a,b,d);
    }
    else {
        return calculaD(b,c,d);
    }
}

// Calcula Numeros

function calculaNumeros(n1, n2, op){

    n1=parseInt(n1)
    n2=parseInt(n2)
    
    if(op == "+"){
        return(n1+n2);
    }
    if(op == "-"){
        return(n1-n2);
    }
    if(op == "*"){
        return(n1*n2);
    }
    if(op == "/"){
        return(n1/n2);
    }
    if(op == "raiz"){
        return Math.sqrt((n1+n2));
    }
    if(op == "potencia"){
        return Math.pow((n1+n2));
    }
}

function escolheOperacao(opcao, p1, p2, p3, p4){
    switch(opcao)
    {
        case "pitagoras":
            return calculaPitagoras(p1,p2,p3);
            break;
        case "regra":
            return calculaRegraDeTres(p1,p2,p3,p4);
            break;
        case "calculadora":
            return calculaNumeros(p1,p2,p3);
            break;
    default:
        return "Fora do escopo de funções."
    }
}

function calcular(){
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value
    let p4 = document.getElementById("p4").value
    let opcao = document.getElementById("opcao").value

    console.log("Resultado: "+escolheOperacao(opcao, p1, p2, p3, p4))
    document.getElementById("resposta").innerHTML = escolheOperacao(opcao, p1, p2, p3, p4)
}