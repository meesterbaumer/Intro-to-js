const bouncer = (age) => {

    if (age >= 21) {
        console.log('You can drink!!')
    } else {
        console.log('Feel shamed!')
        //do the other
    }
}

bouncer(12);
bouncer(45);
bouncer(70);

const me = 'martin';
console.log(me.length);

const myPerson = {
    name: 'john',
    age: '41'
}

console.log(myPerson.name);
console.log(myPerson['name']);

// challenge

const findEmployeeStatus = (employee) => {
    // employee.name = prompt('Enter Employee name')
    if (employee.name.charAt(0).toLowerCase === 'm') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

// const person = {
//     name: 'Michael',
//     status: ''
// }
findEmployeeStatus({
    name: '',
    status: ''
});

