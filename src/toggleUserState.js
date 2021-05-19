const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);


const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        resolve({allUsers, userName});
        reject('Произошла ошибка при переключении статуса');
    });
};

const logger = updatedUsers => {
    const finalTable = updatedUsers.allUsers.map(user =>
        user.name === updatedUsers.userName ?
            { ...user, active: !user.active } : user
  );
    console.table(finalTable);
};

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);