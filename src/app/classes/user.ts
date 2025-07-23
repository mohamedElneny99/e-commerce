export class User {
    id: number;
    name: string;
    userName: string;
    email: string;
    password: string;


    constructor(id: number, name: string,userName : string , email: string, password: string) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.password = password;

    }
}
