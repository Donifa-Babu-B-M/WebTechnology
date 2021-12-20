class student{
    printdetails(name,regno,sub,number) {
    let sum=0;
    console.log("name "+name);
    console.log("regno "+regno);
    console.log("department name "+sub);
    for (let i = 0; i < number.length; i++) {
    sum += number[i];
    }
    return sum;
    }
    printgrade(total){
    if(total>400){
    return 'S';
    }
    else if(total>300){
    return 'A';
    }
    else if(total>200){
    return 'B';
    }
    else {
    return 'C';
    }}}
    module.exports=student;
    