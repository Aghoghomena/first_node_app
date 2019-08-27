// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`i will pay {{courseValue}} for this awesome course`);

import {getUsers} from './api/userApi';

//populate table

getUsers().then(result =>{

    let usersBody= "";

    result.forEach(user => {
        usersBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;
})