const greet = (first_name, last_name) => {
    return "Hi " + first_name + " " + last_name;
    
}

const dGreet = (first_name, last_name) => {
    write_to_db("Hi " + first_name + " " + last_name);
}

console.log(greet("Some", "Guy"));