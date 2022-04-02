const http = new XMLHttpRequest();
const url = "http://192.168.1.11:5000";

window.addEventListener('keydown',(e)=>{
    if(e.key=="ArrowUp"){
        const atas = document.querySelector(".atas");
        atas.classList.add('active');
        const json={
            "data":{
                "move":{
                    "up":1,
                    "right":0,
                    "down":0,
                    "left":0
                }
            }
        }
        http.open("POST",url);
        http.setRequestHeader("Content-Type","application:json");
        http.send(JSON.stringify(json));
        // fetch(url,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":'application/json',
        //         "Access-Control-Allow-Origin":"*",
        //         'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE'
        //     },
        //     body:JSON.stringify(json)
        // })
        //     .then(response=>console.log(response.json))
        //     .then(data=>{
        //         console.log(data);
        //     })
        //     .catch(error=>{console.log(error)})
    }
    if(e.key=="ArrowRight"){
        const atas = document.querySelector(".kanan");
        atas.classList.add('active');
    }
    if(e.key=="ArrowDown"){
        const atas = document.querySelector(".bawah");
        atas.classList.add('active');
    }
    if(e.key=="ArrowLeft"){
        const atas = document.querySelector(".kiri");
        atas.classList.add('active');
    }
})
window.addEventListener('keyup',(e)=>{
    const buttonactive = document.querySelectorAll(".active");
    buttonactive.forEach((value)=>{
        value.classList.remove('active');
    })
})