/**
 * Created by Theodor.Toma on 6/27/2017.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456799',
        salary: 4500
    },
];

function showList() {
    var myTable = '<table class="table table-condensed" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary <button type="button" onclick="convertSalary()" class="btn btn-default">Convert salary</button></th></tr>';
    var hash1 = {};
    var hash2 = [];
    var vect = [];
    var salsum = 0;
    for (var i = 0; i < 10; i++)
        vect[i] = 0;
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName
        +'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
        if (employeesList[i].firstName in hash1)
            hash1[employeesList[i].firstName] ++;
        else
            hash1[employeesList[i].firstName] = 1;
        if ( employeesList[i].lastName in hash2)
            hash2[employeesList[i].lastName]++;
        else
            hash2[employeesList[i].lastName] = 1;
        for (var j = 0; j < employeesList[i].phone.length; j++)
                vect[employeesList[i].phone[j]]++;
        salsum += parseInt(employeesList[i].salary);
    }

    console.log(vect);

    var maxfirstName = ""
    var max = 0;
    for(var i in hash1)
        if (max < hash1[i]) {
            max = hash1[i];
            maxfirstName = i;
        }
    var uniqueNames = 0;
    for (var i in hash2)
        if (hash2[i] == 1)
            uniqueNames ++;
    var first5 = "";
    for ( var i = 0; i < 5; i ++) {
        var max = 0;
        var cifra;
        for (var nr in vect)
            if ( max < vect[nr]) {
                max = vect[nr];
                cifra = nr;
            }
        vect[cifra] = 0;
        first5 += cifra + ',';
    }
    var avg = salsum / employeesList.length;
    myTable+='<tr><td>' + maxfirstName + '</td><td>' + uniqueNames + '</td><td>'+ first5+'</td><td>'+ avg+'</td></tr>';

    myTable +='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function showTotal(){
     var sum = 0;
     for(var i in employeesList){
         sum+= parseInt(employeesList[i].salary);
     }
    var container = document.getElementById('totalSalary');
    container.innerHTML = sum;
}

function deleteEmployee() {
   employeesList.pop();
   showList();
    employeesList.length --;
}

function convertSalary() {
    var myTable = '<table class="table table-condensed" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary <button type="button" onclick="convertSalary()" class="btn btn-default">Convert salary</button></th><th>Euro</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName
            +'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td>'+employeesList[i].salary/4.6+'€</td></tr>';
    }
    myTable +='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;

}

function addCol() {
    var myTable = '<table class="table table-condensed" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';
    // var row= this.parentNode.parentNode;

    for (var i in employeesList) {
        myTable +=
            '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName
            + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td><button type="button" onclick="viewLine(\'' + i + '\')" class="btn btn-default">Vizualizare</button></th></td>' +
            '<td><button type="button" onclick="deleteLine(\'' + i + '\')" class="btn btn-default">Stergere</button></th></td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function viewLine(i){
    console.log(i);
    alert(employeesList[i].firstName + " " + employeesList[i].lastName + " " + employeesList[i].phone + " " + employeesList[i].salary);
}

function deleteLine(i){
    delete employeesList[i];
    addCol();
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function compare1 (a,b){
    if ( a.firstName < b.firstName)
        return -1;
    if ( a.firstName > b.firstName)
        return 1;
    return 0;
}

function compare2 (a,b){
    if ( a.lastName < b.lastName)
        return -1;
    if ( a.lastName > b.lastName)
        return 1;
    return 0;
}

function compare3 (a,b){
    if ( a.phone < b.phone)
        return -1;
    if ( a.phone > b.phone)
        return 1;
    return 0;
}

function compare4 (a,b){
    if ( a.salary < b.salary)
        return -1;
    if ( a.salary > b.salary)
        return 1;
    return 0;
}

function sortList() {
    var type = document.getElementById("sortType").value;
    if ( type == 1 )
        employeesList.sort(compare1);
    if ( type == 2 )
        employeesList.sort(compare2);
    if ( type == 3 )
        employeesList.sort(compare3);
    if ( type == 4 )
        employeesList.sort(compare4);
    showList();
}

function filterList() {
    var word = document.getElementById("filter").value;
    for (var i in employeesList) {
        var gasit = 0;
        if ( employeesList[i].firstName == word )
            gasit = 1;
        if ( employeesList[i].lastName == word )
            gasit = 1;
        if ( employeesList[i].salary == word )
            gasit = 1;
        if ( employeesList[i].phone == word )
            gasit = 1;
        if ( gasit == 0)
            deleteLine(i);
    }
    showList();
}
function clearBlack() {
    document.getElementById("img").style.background = "none";
}

function addBlack() {
    document.getElementById("img").style.background = "#000000";
}

var index = 0;
var list = [
    "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
    "Chuck Norris counted to infinity. Twice."
]

function addText() {
    document.getElementById("img").textContent = list[index];
    index++;
    if ( index == 2)
        index = 0;

}