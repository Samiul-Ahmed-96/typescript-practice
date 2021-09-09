const salary:number = 23300;

const friendsSalary:number[] =[12000,23000,66000,77000];
const friendsName : string[] = ['Rakib','Sakib','Nakib'];

friendsSalary[0] = 10500;
friendsSalary.push(13100);

// friendSalaries[4] = '9800';
// friendSalaries.push('7300');

friendsName.push('Bakib');
friendsName[2] = 'Qakib';

// friends.push(45800);

let max = 0;
for(const salary of friendsSalary){
    if(max < salary){
        max = salary;
    }
}