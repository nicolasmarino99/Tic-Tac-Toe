const playerFactory = (name, mark) => { 
    return { name, mark };
};


/*
const player0 = playerFactory(player0_name) 

const player1 = playerFactory(player1_name) 

console.log(player0_name,player0.name)
document.getElementById('name-0').innerHTML = player0.name
document.getElementById('name-1').innerHTML = player1.name */

export { playerFactory };