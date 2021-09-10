const myName:string = 'Anik';
const player = {
    name : 'Akib',
    age : 23,
    salary : 30000
}
console.log(player);

const city: string = 'Dhaka';
const fruits: string[] = ['mango', 'banana', 'apple'];

//type declare
type Person = {
    name: string,
    age: number,
    salary: number
}

const student: Person = {
    name: 'Kamal Atartuk',
    age: 115,
    salary: 4500
}
const employee: { name: string, age: number, salary: number } = {
    name: 'Solaiman',
    age: 29,
    salary: 1000000
}

function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'kuddus', salary: 50 });


function getSalary2(player: Person): number {
    return player.salary;
}