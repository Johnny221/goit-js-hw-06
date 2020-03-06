import users from './users.js';

// -----------------------Task-1-----------------------

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

// -----------------------Task-2-----------------------

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

// -----------------------Task-3-----------------------

const getUsersWithGender = (users, gender) => {
  let sameGenderOBj = users.filter(user => user.gender === gender);
  return sameGenderOBj.map(genderUser => genderUser.name);
};

console.log(getUsersWithGender(users, 'male'));

// -----------------------Task-4-----------------------

const getInactiveUsers = users => {
  return users.filter(user => user.isActive !== true);
};

console.log(getInactiveUsers(users));

// -----------------------Task-5-----------------------

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// -----------------------Task-6-----------------------

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// -----------------------Task-7-----------------------

const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// -----------------------Task-8-----------------------

const getUsersWithFriend = (users, friendName) => {
  let sameFriendObj = users.filter(user => user.friends.includes(friendName));
  return sameFriendObj.map(sameFriendUser => sameFriendUser.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// -----------------------Task-9-----------------------

const getNamesSortedByFriendsCount = users => {
  let sortedObjByFriends = users.sort(
    (a, b) => a.friends.length - b.friends.length,
  );
  return sortedObjByFriends.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// -----------------------Task-10-----------------------

const getSortedUniqueSkills = users => {
  let skillsFromObj = users
    .map(user => user.skills)
    .reduce((a, b) => a.concat(b));
  let uniqueSkills = skillsFromObj.filter(
    (value, index, self) => self.indexOf(value) === index,
  );
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
