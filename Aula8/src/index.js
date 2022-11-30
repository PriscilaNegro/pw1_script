function intervaloRandomico (min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min)

}

function sorteioMega()
{
    let sorteio =[]
    for(let index =1; index <6; index++)
    {
        if(index >=1 && <=3)
        {
            let num =intervaloRandomico(1,24)

            while(sorteio.includes(num))
            {
                let num = intervaloRandomico(1,24)

            }
            sorteio.push(num)
        }
        else
        {
            let num = intervaloRandomico(25,60)

            while(sorteio.includes(num))
            {
                let num =intervaloRandomico(25,60)
            }
        
        sorteio.push(num)
    }

}

console.log(sorteio.sort((a,b)=> a-b).toString())
}
sorteioMega()