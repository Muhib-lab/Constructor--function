var std = {
    myname : 'ali',
    lname  : 'nawaz',
    inst : 'SAIMS'  
}

function student(fname,lname,inst){
    var obj = {
        fname : fname,
        lname : lname,
        inst : inst
    }
    return obj
}

var newfunction = student('Muhib','Ahmed','UOK')
var newfunction1 = student('Muhammad','Usama','SAIMS')
console.log(newfunction)
console.log(newfunction1)

var arr = [newfunction,newfunction1]
console.log(arr)



//........................CONSTRUCOTOR FUNCTION

function Student(firstname,lastname,institute){       //function first word is capital in COnstructor
    this.firstname = firstname,                        // 'this' command is compulsary 
    this.lastname = lastname,
    this.institute = institute
}

Student.prototype.city = 'Karachi'             // prototype se key and value sb obj m ajaegi

var stu = new Student('Uzair','Irshad','UOK')  //'new' command is apply when calling function
var stu1 = new Student('Salman','Kausar','UOK')
var stu2 = new Student('Umer','Iqbal','UOK')
var stu3 = new Student('Yousuf','Imran','UOK')
var stu4 = new Student('Rafay','Abdul','UOK') 

console.log(stu)
console.log(this.stu)


var arr1 = [stu,stu1,stu2,stu3,stu4,]
console.log(arr1)

console.log(arr1[0].city)
