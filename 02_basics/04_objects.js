// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "2324abc"
tinderUser.name = "Samcy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Sameer",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        eamil: "sa@gmail.com"
    },
    {
        id: 1,
        eamil: "sa@gmail.com"
    },
    {
        id: 1,
        eamil: "sa@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log((tinderUser.hasOwnProperty('isLogged')));

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "Sameer",
//     "course": "JS in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]