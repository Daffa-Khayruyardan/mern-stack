const user = [
    {id: 1, name: 'daffa', age: 22},
    {id: 2, name: 'della', age: 16},
    {id: 3, name: 'diffa', age: 13},
]

const userUpdate = user.map(obj => {
    return obj.id === 2 ? {...obj, name: 'daffi'} : obj
});

console.log(userUpdate);