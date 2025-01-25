class User {
    constructor({ login, email }) {
        this.login = login;
        this.email = email;
    }
}

const mango = new User({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

console.log(mango); // Login: Mangozedog, Email: mango@dog.woof

const poly = new User({
 login: 'Poly',
 email: 'poly@mail.com',
});

console.log(poly) // Login: Poly, Email: poly@mail.com
