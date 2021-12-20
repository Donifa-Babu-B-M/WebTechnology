const student=require('./student');

student.getnostudent();


for(let i=0;i<student.studentsscount;i++){
student.getdetails('name','regno','dept');
console.log("Name of Student "+student.name);
console.log("Register no of Student "+student.regno);
console.log("Department of Student "+student.dept);
student.getgrade('tsub','subname','mark')
for(let i=0;i<tsub;i++){
if(student.mark>=90 || student.mark<=100){
console.log("The grade of subject" + student.subname +" is S ");
}
else if(mark>=80 || mark<=89){
console.log("The grade of subject" + student.subname +" is A " );
}
else if(mark>=70 || mark<=79){
console.log("The grade of subject" + student.subname +" is B " );
}
else if(mark>=60 || mark<=69){
console.log("The grade of subject" + student.subname +" is C " );
}
else if(mark>=50 || mark<=59){
console.log("The grade of subject" + student.subname +" is D " );
}
else{
console.log("The grade of subject" + student.subname +" is U " );

}
}
}