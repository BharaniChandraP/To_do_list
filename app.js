var input=prompt("Enter your name: ");
console.log(input);
  var input1=input+"1";
  console.log(input1);


  if(input!=null){
    document.getElementById("login").innerHTML="Hi " + input
  }

  
  
  
  
  
  const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
  const today = new Date().toISOString().slice(0, 10);
  const form=document.querySelector('#dog');
  const entry=document.querySelector('#todo');
  const list=document.querySelector('#task');
  const date=document.querySelector('#datePicker');
  const time=document.querySelector('#timePicker');
  const comp=document.querySelector('#thing');
  
  
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(date.value<today)
  {
    alert("Enter future date!!");
  }
  else if(date.value==today)
  {
    //const comp=document.createElement('li');
    
    //const make=newli.innerHTML;
    /*localStorage.setItem('input1',make);
    document.getElementById('things').textContent=newli.innerText;
    localStorage.getItem('#things');*/
    //
    comp.innerHTML +='<li>' + entry.value + "-" + time.value +'</li>' ;
    var val1=comp.innerHTML;
    localStorage.setItem(input1,val1);
    var storedValues1=localStorage.getItem(input1);
    comp.innerHTML=storedValues1;
    entry.value="";
    time.value="";
  
  }
  
 
   else if(date.value>today)
  {
    
  const dates=date.value;
  const times=time.value;
    list.innerHTML += '<li>'  + date.value + "-" +   entry.value + "-"  + time.value + '</li>';
    var val=list.innerHTML;
    localStorage.setItem(input,val)
    
  //localStorage.removeItem(input);
    var storedValues = localStorage.getItem(input); 
    list.innerHTML = storedValues;
    
    
  }
    entry.value= "";
    date.value="";
    time.value="";
    
    
  
  }
   
    
 );
 
 list.addEventListener('click',function(e){
  e.target.remove();
})

 
comp.addEventListener('click',function(e){
  e.target.remove();
})

 

 
if(localStorage.getItem(input)!=null)
 {
   alert("hi");
   
   
   list.innerHTML=localStorage.getItem(input);
   
   comp.innerHTML=localStorage.getItem(input1);
   
 }
  setInterval(clockTime, 1000);
  function clockTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hr = 12;
      am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
        .innerHTML = currentTime;
  }
  clockTime();
  

  
