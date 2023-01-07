let body = document.body;

//make img
var img = document.createElement('img');

//img html
img.src = './img/hane.gif';
img.alt = "brein";
img.id = 'item';

//img css
img.style.visibility = 'hidden';
img.style.position = 'absolute';
img.style.top = '0';
img.style.left = '0';
img.style.width = '20%';
// img.style.height = '5%';
// img.style.borderRadius = '50%';

//add img
body.appendChild(img);

let item = document.querySelector('#item');

document.addEventListener('mousemove', mousemove_function);

//move mouse event
function mousemove_function (e) {

    item.style.visibility = 'visible';

    let windWidth = window.outerWidth;
    let windHeight = window.outerHeight;

    // item.style.left = (e.pageX * windWidth) / 100 + 'vmin';
    // item.style.top = (e.pageY / windHeight) * 100 + 'vmin';

    item.style.left = e.pageX + (e.pageX - (e.pageX + 100)) + 'px';
    item.style.top = e.pageY + (e.pageY - (e.pageY + 60)) + 'px';

    if (e.clientY == 0) {
        item.style.visibility = 'hidden';
    }

    // console.log(e.pageX);
    console.log(e.pageY);
    console.log(windHeight);
}
