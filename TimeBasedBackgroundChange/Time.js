const timeValue=document.querySelector("input[type='time']");
const button=document.querySelector("button");
const body=document.querySelector("body");

button.addEventListener("click",function(){
   const time=timeValue.value;
    if(time){
        const hour=parseInt(time.split(":")[0], 10);
        let backgroundImage='';
        if(hour >= 6 && hour < 12) {
            backgroundImage='url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
        }
        else if(hour >= 12 && hour < 18) {
            backgroundImage='url("https://images.unsplash.com/photo-1533324268742-60b233802eef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
        }
        else if(hour >= 18 && hour < 21) {
            backgroundImage='url("https://plus.unsplash.com/premium_photo-1676210295756-4273d3b6626f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
        }
        else {
            backgroundImage='url("https://images.unsplash.com/photo-1590418606746-018840f9cd0f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
        }
        body.style.backgroundImage=backgroundImage;
    }
    else {
        body.style.backgroundImage='none';
        alert("Please select a time.");
    }
});