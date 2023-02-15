var marks = 0;
function answer(){
    if (document.getElementById('1a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('1b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('1c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('1d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('2a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('2b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('2c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('2d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('3a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('3b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('3c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('3d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('4a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('4b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('4c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('4d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('5a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('5b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('5c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('5d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('6a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('6b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('6c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('6d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('7a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('7b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('7c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('7d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('8a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('8b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('8c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('8d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('9a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('9b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('9c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('9d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('10a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('10b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('10c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('10d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('11a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('11b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('11c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('11d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('12a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('12b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('12c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('12d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('13a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('13b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('13c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('13d').checked) {
        marks = marks+3;
    }
    if (document.getElementById('14a').checked) {
        marks = marks+0;
    }
    if (document.getElementById('14b').checked) {
        marks = marks+1;
    }
    if (document.getElementById('14c').checked) {
        marks = marks+2;
    }
    if (document.getElementById('14d').checked) {
        marks = marks+3;
    }
    score = document.querySelector('.score');
    ques = document.getElementById('quiz');
    score.classList.toggle('visi2');
    ques.classList.add('visi1');
    ques.classList.add('cursor');
    
    if(marks>=33){
        document.querySelector('.condition').innerHTML = "Extremely Severe Stress";
    }
    if(marks>=26 && marks<=33){
        document.querySelector('.condition').innerHTML = "Severe Stress";
    }
    if(marks>=19 && marks<=25){
        document.querySelector('.condition').innerHTML = "Moderate Stress";
    }
    if(marks>=15 && marks<=18){
        document.querySelector('.condition').innerHTML = "Mild Stress";
    }
    if(marks<15){
        document.querySelector('.condition').innerHTML = "Normal Condition";
    }
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });

    //   document.getElementsByTagName("input").classList.add('cursor');
}

document.getElementById('submit').addEventListener("click", function(){
    answer();
})

document.querySelector('try').addEventListener("click", function(){
    window.location.reload();
})