const playerArray = [];

// function selectPlayer(players){
//   if(players.length>5){
//     alert('You already selected top 5 players');
//   }
//   else{
//     const listBody = document.getElementById('list-body');
//     listBody.innerHTML ='';

//     for(let i = 0; i < players.length; i++){
//         const name = players[i];
//         const li = document.createElement('li');
//         li.innerHTML = `
//         <li>${i+1} . ${name}</li>
//       `
//       listBody.appendChild(li);
        
//       }
      
//     }
// }

function addToTable(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    playerArray.push(playerName);
    selectPlayer(playerArray);
}