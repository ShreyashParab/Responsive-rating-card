function myFunction(){
  document.getElementById('box1').style.display = "none";
  document.getElementById('box2').style.display = "inline-block";
}

function rate(n){
  switch(n)
    {
        case 1 : document.getElementById('change').innerHTML = 'You selected 1 out of 5';
        break;
        case 2 : document.getElementById('change').innerHTML = 'You selected 2 out of 5';
        break;
        case 3 : document.getElementById('change').innerHTML = 'You selected 3 out of 5';
        break;
        case 4 : document.getElementById('change').innerHTML = 'You selected 4 out of 5';
        break;
        case 5 : document.getElementById('change').innerHTML = 'You selected 5 out of 5';
        break;
    }
}