/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
class Employee {
    // 필드
    // private name: string;
    // protected age: number;
    // public position: string;

    // 생성자
    constructor(private name: string, protected age: number, public position: string) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
};

class ExecutiveOffice extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        // this.name;
        this.age;
    }
}
const employee = new Employee("남철우", 40, "개발자");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
