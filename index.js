// Write your solution in this file!

const employee = {
    name: "Vikki",
    streetAddress: "Nairobi",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const employee2 = {...employee};
    employee2[key] = value;
    return employee2;
    }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.streetAddress = value
    return employee;
}

function deleteFromEmployeeByKey(obj, key) {
    const employee3 = {...employee};
    delete employee3[key];
    return employee3;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee[key];
    return employee;
}
