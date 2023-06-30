


function checkUserExistance(toCheck) {

    if (!fs) {
        fs = reqire("fs");
    }
    const usersData = fs.readFileSync('./storage/users.json', 'utf8');
    const users = JSON.parse(usersData);

    const foundUser = users.find(user => (
        user.name === toCheck.name && user.password === toCheck.password
    ));
    if (foundUser) {
        return true;
    }else{
        return false;
    }

};

function addUser(toAdd) {

    if (!fs) {
        fs = reqire("fs");
    }

    const jsonData = fs.readFileSync('storage/users.json', 'utf8');
    const users = JSON.parse(jsonData);

    users.push(toAdd);

    const updatedData = JSON.stringify(users, null, 2);
    fs.writeFileSync('storage/users.json', updatedData);
};

module.exports = {
    checkUserExistance, 
    addUser
  };