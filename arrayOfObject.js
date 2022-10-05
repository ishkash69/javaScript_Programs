

const deletingStudents=(value)=>{
    let studentDetails =[
        {
            name: 'rahul',
            rollno:1,
            address:'House No.1'
        },
        {
            name: 'prem',
            rollno:2,
            address:'House No.2'
        },
        {
            name: 'jkjk',
            rollno:3,
            address:'House No.3'
        },
    
    ]
    var ifStudentExist =  true
    for(let i=0;i<studentDetails.length;i++){
        if(studentDetails[i].rollno==value){
            studentDetails.splice(i,1)
            ifStudentExist =  true
            return studentDetails
        }else{
            ifStudentExist =  false
            // console.log('no data found')
            
        }
    }
    return studentDetails
}
console.log(deletingStudents(1))

const addNewStudent = ()=>{
    let studentDetails =[
        {
            name: 'rahul',
            rollno:1,
            address:'House No.1'
        },
        {
            name: 'prem',
            rollno:2,
            address:'House No.2'
        },
        {
            name: 'jkjk',
            rollno:3,
            address:'House No.3'
        },
    
    ]

}
