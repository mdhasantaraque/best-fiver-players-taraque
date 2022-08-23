function getCostById(elementId){
    const costString = document.getElementById(elementId).value;
    if(isNaN(costString) || costString==0){
        alert('put the valid number');
    }
    else{
        const cost = parseInt(costString);
        return cost;
    }   
}
document.getElementById('player-calculator').addEventListener('click', function(){

    const playersCost = getCostById('players-expenses');
    const playerQuantity =  playerArray.length;
    const playerTotalCost = document.getElementById('player-total-cost');
    if(playerQuantity <= 5){
        playerTotalCost.innerText = playerQuantity * playersCost;
    }
    else{
        playerTotalCost.innerText = 5 * playersCost;
    }  
})
document.getElementById('total-calculator').addEventListener('click', function(){

    const managerCost =  getCostById('manager-expenses');
    const coachCost = getCostById('coach-expenses');

    const playerCost = document.getElementById('player-total-cost').innerText;
    const playerTotalCost = parseInt(playerCost);

    const totalClubCost = document.getElementById('total-club-cost');
    totalClubCost.innerText = playerTotalCost + coachCost + managerCost;
})