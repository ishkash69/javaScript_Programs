

// const deletingStudents=(value)=>{
//     let studentDetails =[
//         {
//             name: 'rahul',
//             rollno:1,
//             address:'House No.1'
//         },
//         {
//             name: 'prem',
//             rollno:2,
//             address:'House No.2'
//         },
//         {
//             name: 'jkjk',
//             rollno:3,
//             address:'House No.3'
//         },
    
//     ]
// 
//     for(let i=0;i<studentDetails.length;i++){
//         if(studentDetails[i].rollno==value){
//             studentDetails.splice(i,1)
//             
//         }
//     }
//     return studentDetails
// }
// console.log(deletingStudents(1))


// const addNewStudent = ()=>{
//     let studentDetails =[
//         {
//             name: 'rahul',
//             rollno:1,
//             address:'House No.1'
//         },
//         {
//             name: 'prem',
//             rollno:2,
//             address:'House No.2'
//         },
//         {
//             name: 'jkjk',
//             rollno:3,
//             address:'House No.3'
//         },
    
//     ]
    
//     let newStudent ={
//         name: 'jkjk',
//         rollno:5,
//         address:'plot No.456'
//     }
//     studentDetails.push(newStudent)
//     return studentDetails
// }

// console.log(addNewStudent())

// updating student object

const updateStudent=(value)=>{
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
console.log('before updating',studentDetails)

            // let check=0;
            for(let object of studentDetails){
                if(object.rollno===value){
                    object.name='mohan';
                    object.address='jhkjhkjhk'
                    // check=
                    
                }
                // else if(check===0){
                //     console.log('no data found')
                // }
            
            }
            console.log('after Updating')
            return studentDetails
}

console.log(updateStudent(1));