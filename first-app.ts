let userName = "ALi";

let userAge = 34;

let userID: string | number = "abc1";

userID = 32;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
user = {
  name: "Amir",
  age: 28,
  isAdmin: true,
  id: "1234",
};
// Type '{}' is missing the following properties
// from type '{ name: string; age: number; isAdmin: boolean; id: string | number; }'
// user={}

let hobbies: Array<string>;
//OR
// let hobbies:string[];

hobbies = ["sports", "cooking", "123"];

//Adding types to functions
function add(a: number, b: number) {
  const result = a + b;
  return result;
}

//function types
// function calculate(a: number, b: number,calcFn:()=>number){}

//custom types
type AddFn = (a: number, b: number) => number;
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}
calculate(2, 5, add);

//Obj types with interfaces
interface Credentails {
  password: string;
  email: string;
}
let creds: Credentails;
creds = {
  email: "Test@example.com",
  password: "abc",
};

//Interface vs custom types
//strict mode turned off in tsconfig in order to prevent error in next line
class AuthCredentials implements Credentails {
  email: string;
  password: string;
}
//merging types
type Admin = {
  permissions: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Amir",
};
//we can do the same for interfaces
interface Admin2 {
  permission: string[];
}
interface AppUser2 {
  userName: string;
}
interface AppAdmin2 extends Admin2, AppUser2 {}

let admin2: AppAdmin2;

//Error in admin2 because username is missing

// admin2={
//     permissions:['login'],
// }

//literal types
type Role = "admin" | "user" | "editor";
let role: Role;
function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //...logic code
  }
}

//generic types
//when we are not sure about the data types but we are sure they are in arrays

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};
const textStorage: DataStorage<string> = {
  //IDE warns about type of string in storage and data
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

//now genreric funcs
function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const newUser = merge({ name: "amir" }, { age: "27" });
