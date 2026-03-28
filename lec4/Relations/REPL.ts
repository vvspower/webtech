import { db } from './models/index.ts'

db.Student.find().then(students => {
    console.log("Students:", students);

}).then(() => {
    process.exit(0)
})