var divs = document.querySelectorAll('.films');
var forwards = document.querySelectorAll("#js-forward");
var backwards = document.querySelectorAll("#js-backward");

Array.prototype.forEach.call(forwards, function (forward, index) {
    forward.addEventListener('click', function () {
        Array.prototype.forEach.call(divs, function (div, i) {
            if (i === index) {
                divs[i].scrollLeft += 800;
            }                
        });
    })
});

Array.prototype.forEach.call(backwards, function (backward, index) {
    backward.addEventListener('click', function () {
        Array.prototype.forEach.call(divs, function (div, i) {
            if (i === index) {
                divs[i].scrollLeft -= 800;
            }                
        });
    })
});