function somaNumeros(n1, n2, op){
    
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
console.log(somaNumeros(82,27, "potencia"));