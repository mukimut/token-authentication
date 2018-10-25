var mongoose=require('mongoose');
var passwordHash = require('password-hash');
var people=[{email: 'admin@demo.com', pass: '123456', group:'admin'},
    {email: 'staff@demo.com', pass: 'staff123', group:'staff', token:''},
    {email: 'staff2@demo.com', pass: 'staff456', group:'staff', token:''},
    {email: 'staff3@demo.com', pass: 'staff789', group:'staff', token:''},
    {email: 'student@demo.com', pass: 'student123', group:'student', token:''},
    {email: 'student2@demo.com', pass: 'student456', group:'student', token:''},
    {email: 'student3@demo.com', pass: 'student789', group:'student', token:''},
    {email: 'teacher@demo.com', pass: 'teacher123', group:'teacher', token:''},
    {email: 'teacher3@demo.com', pass: 'teacher789', group:'teacher', token:''},
    {email: 'teacher2@demo.com', pass: 'teacher456', group:'teacher', token:''}];


mongoose.connect('mongodb://localhost/School');
var dbPeople=mongoose.model('users', {email: String, password: String, type: String, id: String});
var dbEmployess=mongoose.model('employees', {id: String, email: String, type: String, name: String, birth: String, joined: String, male: Boolean, married: Boolean, prAddress: String, paAddress: String, phone: String, nid: String, image: Buffer});
var dbStudents=mongoose.model('students', {name: String, fName: String, mName: String, class: Number, section: String, roll: Number, birthday: String, male: Boolean, prAddress: String, paAddress: String, phone: String, email: String, pictur:Buffer});
var dbInfo=mongoose.model('info', {currentSession:String, currentShift: String});
var dbAttendance=mongoose.model('attendance', {date: String, roll: Number, class: Number, section: String});
var dbGrades=mongoose.model('grades', {roll: Number, section: String, exam: String, marks: Number});
var dbSessionClasses={class: Number, section: String, teacher: String};
var dbDialyRoutine={name: String, start: String, duration: String, classes: [dbSessionClasses]};
var dbWeeklyRoutine=mongoose.model('weeklyRoutine',{index: Number, day: String, routine: dbDialyRoutine});
var idCount=1;

people.forEach((person)=>{
    var currentName='Full name of '+idCount;
    var dbPerson=new dbPeople({email: person.email, password: passwordHash.generate(person.pass), type: person.group, id: idCount});
    dbPerson.save();
    idCount++;
});
console.log('done');