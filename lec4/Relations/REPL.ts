import { db } from './models/index.ts'

// db.Student.find().then(students => {
//     console.log("Students:", students);
// 
// }).then(() => {
//     process.exit(0)
// })


db.Student.findOne({ regno: '1712264' }).then(student => {
    if (student) {
        return student.updateOne({ name: 'Dhanesh Kumar Lorana' }).then(() => {
            console.log("Student updated");
        });
    } else {
        console.log("Student not found");
    }
}).then(() => {
    process.exit(0)
}).catch(err => {
    console.error("Error:", err);
    process.exit(1);
})
