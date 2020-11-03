//solve task 1
class Course {
    get price() {
        return '$' + this._price;
    }
    set price(value) {
        if (value < 0) {
            throw 'Invalid Input!';
        }
        this._price = value;
    }
    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    calculateValue() {
        return this.length / this._price;
    }

    logSummary() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
    }

}
const firstCourse = new Course('Mathematics', 24, 20);
const secondCourse = new Course('General Science', 20, 15);

console.log(new Course(firstCourse));
console.log(new Course(secondCourse));

console.log(firstCourse.calculateValue());
console.log(secondCourse.calculateValue());

firstCourse.logSummary();
secondCourse.logSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
        super(title, length, price);
        this.numOfExercises = exercisesCount;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('Publishing...')
    }
}

const activityCourse = new PracticalCourse('Applied Electricity', 16, 40, 5);
const theoryCourse = new TheoreticalCourse('African Diaspora', 8, 10);
console.log(activityCourse);
console.log(activityCourse.calculateValue());
activityCourse.logSummary();
console.log(theoryCourse);
theoryCourse.publish();
theoryCourse.logSummary();





//solve task 2


//     courses = [new Course('Mathematics', 'two hours', 'GHC 20.00'),
//         new Course('General Science', 'two hours', 'GHC 20.00')
//     ];
// }
// console.log(new Course());