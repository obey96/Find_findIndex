// find
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
function findUsr(arr,keyUsr){

return arr.find(function(user){

    return user.username === keyUsr;
});

}

const trueUsr = findUsr(users,'mlewis');
console.log(trueUsr);

const falseUsr = findUsr(users,'taco');
console.log(falseUsr);

// findIndex

const user = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
  }

  const dltval = removeUser(user, 'akagen');

  console.log(dltval);
  console.log(user);