// Write your solution in this file!
const employee = {name: "Daniel",
streetAdress: "adOne",};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newName = {...employee};
    newName[key] = "11 Broadway";
    return newName;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const newFuncTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Michael");

function deleteFromEmployeeByKey(employee, key) {
    const newNameTwo = {...employee};
    delete newNameTwo.name;
    return newNameTwo;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name 
    return employee;

}