/**
 * 인터페이스
 */
interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
};
const person: Person = {
    name: "남철우",
    age: 40,
    sayHi: function () {
        console.log("Hi");
    },
};

person.sayHi(1, 2);