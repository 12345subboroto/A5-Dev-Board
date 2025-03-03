//display block
document.getElementById('none-one').style.display='none';
document.getElementById('none-two').style.display='none';
document.getElementById('none-three').style.display='none';
document.getElementById('none-four').style.display='none';
document.getElementById('none-five').style.display='none';
document.getElementById('none-six').style.display='none';
//btn one
document.getElementById('btn-one').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
    //display none
    document.getElementById('none-one').style.display='block';
    // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-one").disabled = true;
     //story add
     const lastModifiedOne = new Date(document.lastModified);
     const timeOnlyOne = lastModifiedOne.toLocaleTimeString(); 
     document.getElementById("one").innerText = "Add Dark Mode ";
     document.getElementById("lastUpdatedOne").innerText = timeOnlyOne;
})
//btn two
document.getElementById('btn-two').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
      //display none
      document.getElementById('none-two').style.display='block';
      // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-two").disabled = true;
     //story add
     const lastModifiedTwo = new Date(document.lastModified);
     const timeOnlyTwo = lastModifiedTwo.toLocaleTimeString(); 
     document.getElementById("two").innerText = "Add Dark Mode ";
     document.getElementById("lastUpdatedTwo").innerText = timeOnlyTwo;
})
//btn three
document.getElementById('btn-three').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
      //display none
      document.getElementById('none-three').style.display='block';
      // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-three").disabled = true;
     //story add
     const lastModifiedThree = new Date(document.lastModified);
     const timeOnlyThree = lastModifiedThree.toLocaleTimeString(); 
     document.getElementById("three").innerText = "Add Dark Mode ";
     document.getElementById("lastUpdatedThree").innerText = timeOnlyThree;
})
//btn four 
document.getElementById('btn-four').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
      //display none
      document.getElementById('none-four').style.display='block';
      // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-four").disabled = true;
     //story add
     const lastModifiedFour = new Date(document.lastModified);
     const timeOnlyFour = lastModifiedFour.toLocaleTimeString(); 
     document.getElementById("four").innerText = "Add Dark Mode ";
     document.getElementById("lastUpdatedFour").innerText = timeOnlyFour;
})
//btn five
document.getElementById('btn-five').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
      //display none
      document.getElementById('none-five').style.display='block';
      // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-five").disabled = true;
    
    //story add
    const lastModifiedFive = new Date(document.lastModified);
    const timeOnlyFive = lastModifiedFive.toLocaleTimeString(); 
    document.getElementById("five").innerText = "Add Dark Mode ";
    document.getElementById("lastUpdatedFive").innerText = timeOnlyFive;
})
//btn  six
document.getElementById('btn-six').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated Successfully');
    alert('congrats!!! You have completed all the current task');
      //display none
      document.getElementById('none-six').style.display='block';
      // sub
    const subNumber=document.getElementById('sub-number').innerText;
    const convertedSubNumber=parseFloat(subNumber);
    const sub=convertedSubNumber-1;
    document.getElementById('sub-number').innerText=sub;

    // add 
    const sumNumber=document.getElementById('sum-number').innerText;
    const convertedSumNumber=parseFloat(sumNumber);
    const sum=convertedSumNumber+1;
    document.getElementById('sum-number').innerText=sum;
    document.getElementById("btn-six").disabled = true;
    //story add
    const lastModifiedSix = new Date(document.lastModified);
    const timeOnlySix = lastModifiedSix.toLocaleTimeString(); 
    document.getElementById("six").innerText = "Fix Mobile Button issue at ";
    document.getElementById("lastUpdatedSix").innerText = timeOnlySix;
    
})
// clear Story
document.getElementById('clear').addEventListener('click', function(){

    document.getElementById('none-one').style.display='none';
    document.getElementById('none-two').style.display='none';
    document.getElementById('none-three').style.display='none';
    document.getElementById('none-four').style.display='none';
    document.getElementById('none-five').style.display='none';
    document.getElementById('none-six').style.display='none';
   
})
// date 
const currentDate = new Date().toLocaleDateString(); 
document.getElementById("lastUpdated").innerText = currentDate;

// body color change
document.getElementById("colorButton").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    document.body.style.backgroundColor = randomColor; 
});
// new windows
document.getElementById('question').addEventListener('click',function(event){
    window.location.href="./question.html"
})
// go back page
function goBack() {
  window.history.back(); 
}

