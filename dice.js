//função de rolar os dados e somar os mods
function rolar(ID){
    if(ID=='bt4'){
        let dice=Math.floor(Math.random() * 4)+1;
        let num=document.getElementById("r4")
        let DICEID=document.getElementById("n4").id
        waitroll(DICEID,dice)
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t4").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
            
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
    else if(ID=='bt6'){
        let dice=Math.floor(Math.random() * 6)+1;
        let num=document.getElementById("r6")
        let DICEID=document.getElementById("n6").id
        waitroll(DICEID,dice)
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t6").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
    else if(ID=='bt8'){
        let dice=Math.floor(Math.random() * 8)+1;
        let DICEID=document.getElementById("n8").id
        waitroll(DICEID,dice)
        let num=document.getElementById("r8")
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t8").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
    else if(ID=='bt10'){
        let dice=Math.floor(Math.random() * 10)+1;
        let DICEID=document.getElementById("n10").id
        waitroll(DICEID,dice)
        let num=document.getElementById("r10")
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t10").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
    else if(ID=='bt12'){
        let dice=Math.floor(Math.random() * 12)+1;
        let DICEID=document.getElementById("n12").id
        waitroll(DICEID,dice)
        let num=document.getElementById("r12")
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t12").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
    else if(ID=='bt20'){
        let dice=Math.floor(Math.random() * 20)+1;
        let DICEID=document.getElementById("n20").id
        waitroll(DICEID,dice)
        let num=document.getElementById("r20")
        let total=+dice + +(num.value)
        let RESPOSTAID=document.getElementById("t20").id
        if(dice==total){
            num.value=0
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else if(+num.value<0){
            waittotal(RESPOSTAID,dice,num.value,total)
        }
        else{
            waittotal(RESPOSTAID,dice,num.value,total)
        }
    }
}
//esperar para mostrar o total
function waittotal(ID,D,N,T){
    document.getElementById(ID).innerHTML="."
    setTimeout(() => { document.getElementById(ID).innerHTML = "..";}, 300);
    setTimeout(() => { document.getElementById(ID).innerHTML = "...";}, 600);
    setTimeout(() => { document.getElementById(ID).innerHTML = D+" + "+N+" = "+T;}, 900);
}
//esperar para mostrar o dado
function waitroll(ID, D){
    document.getElementById(ID).innerHTML="."
    setTimeout(() => { document.getElementById(ID).innerHTML = "..";}, 300);
    setTimeout(() => { document.getElementById(ID).innerHTML = "...";}, 600);
    setTimeout(() => {  document.getElementById(ID).innerHTML=D; }, 900);
}