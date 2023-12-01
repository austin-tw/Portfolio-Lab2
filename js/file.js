let x = new Date().getFullYear();
document.getElementById("year").innerHTML = x;

document.getElementById("btn-alert").addEventListener("click", function() {
    alert("I can't believe someone still fell for this type of clickbait in " +x +"...");
  });


  document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Claim Your $100 Prize Now!';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Click Here to Win a $100 Amazon Giftcard!';
};


let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = 'Number: ' +count
     
     document.getElementById('txt-counter').className = '';

     if (count % 2 == 0) {
    document.getElementById('txt-counter').classList.add('even');
} else {
    document.getElementById('txt-counter').classList.add('odd'); 
}
}

