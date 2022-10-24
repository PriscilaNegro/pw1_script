/*
1.Monte as formulas com base nas ultimas 3 aulas.
2.Monte os campos formulários para receber os 4 parametros informando as condições.
3.Mostre o resultado em um comando SPAN
*/

function escolheOperacao(opcao, p1, p2, p3, p4){
    switch(opcao)
    {
        case "pitagoras":
            return calculaPitagoras(p1,p2,p3);
            break;
        case "regra":
            return calculaRegra(p1,p3,p4);
            break;
        case "calculadora":
            return calculaNumeros(p1,p2,p3);
            break;
    default:
        return "Fora do escopo de funções."
    }
}