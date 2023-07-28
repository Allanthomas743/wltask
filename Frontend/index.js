console.log("hello");
let f=document.getElementById("form");
f.addEventListener("submit",((e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let num=document.getElementById('mob').value;
    let gender=document.getElementById('gender').value;
    let dob=document.getElementById('dob').value;
    let dateofjoining=document.getElementById('dateofjoining').value;
    let qualification=document.getElementById('qualification').value;
    let back=document.getElementById('back').value;
    senddata(name,mail,num,gender,dob,dateofjoining,qualification,back);
}))

async function senddata(name,mail,num,gender,dob,dateofjoining,qualification,back){
   
   await fetch("http://127.0.0.1:3000/data",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            name:name,
            mail:mail,
            num:num,
            gender:gender,
            dob:dob,
            dateofjoining:dateofjoining,
            qualification:qualification,
            back:back,

        })
    });
  
}