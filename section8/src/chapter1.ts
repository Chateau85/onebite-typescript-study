/**
 * keyof 연산자
 */
type Person = typeof person;
// interface Person {
//     name: string;
//     age: number;
// }
function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}
const person = {
    name: "남철우",
    age: 27,
};
getPropertyKey(person, "name");