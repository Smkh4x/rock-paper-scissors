let choice;
let round = 0;
let user = 0;
let boot = 0;

function main(){
    
    let botRandom = Math.floor(Math.random() * 4);
    
    if(botRandom === choice){
        document.getElementById('result').innerHTML = "<h2>ta3adol</h2>"
    }else if(botRandom === 1 && choice === 2 || botRandom === 2 && choice === 3 || botRandom === 3 && choice === 1){
        
        user++, round++;
        document.getElementById('user-score').textContent = user
        document.getElementById('rounds').textContent = round
        
    } else {
        
        boot++, round++;
        document.getElementById('bot-score').textContent = boot
        document.getElementById('rounds').textContent = round
    }   
}
function rock(){
    choice = 1;
    main()
}
function paper(){
    choice = 2;
    main()
}
function mi9ass(){
    choice = 3;
    main()
}
