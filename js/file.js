// Footer- auto year
let x = new Date().getFullYear();
document.getElementById("year").innerHTML = x;
console.log(x);

// Alert Button
document.getElementById("btn-alert").addEventListener("click", function () {
    console.log("alert");
    alert("I can't believe someone still fell for this type of clickbait in " + x + "...");
});

// Hover Button
document.getElementById('btn-alert').onmouseover = () => {
    console.log("mouseover");
    document.getElementById('btn-alert').innerText = 'Claim Your $100 Prize Now!';
};

document.getElementById('btn-alert').onmouseleave = () => {
    console.log("mouseleave");
    document.getElementById('btn-alert').innerText = 'Click Here to Win a $100 Amazon Giftcard!';
};

// Incrementing Button
let count = 1;
document.getElementById('btn-counter').onclick = () => {
    console.log(count);
    count = count + 1;

    document.getElementById('txt-counter').innerHTML = 'Number: ' + count

    document.getElementById('txt-counter').className = '';
//If-else- Even/Odd
    if (count % 2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
    }
};

// For Loops- List
for (let i = 1; i <= 100; i++) {
    console.log("loop list" + i);
    // create a new <li> element with the createElement() document method
    const listItem = document.createElement("li")
    // set the text content of the new <li> element
    listItem.textContent = 'List item';
    listItem.textContent = (i % 2 === 0) ? "even" : "odd";
    listItem.style.color = (i % 2 === 0) ? "black" : "green";
    // append the <li> element to your ordered list
    document.getElementById("numbers").appendChild(listItem)
};
