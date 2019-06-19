_getIPAdress = () => {
    const url = "https://api.open-notify.org/iss-now.json";
    return fetch(url)
    .then(response => response.json) 
    .then(responseJSON => {
        console.log(responseJSON.message);
    })
    .catch(err => {
        console.log(err);
    })
};

var clockwise;
var transX, transY;

function setup() {
    clockwise = true;
    var width = displayWidth;
    var height = displayHeight;
    createCanvas(width, height);
    background(0);
}
  
function draw() {
    translate(width / 2, height / 2);
    var angle = ((millis()/1000)*1800)/360;
    console.log(angle%360);
    if((angle%360 > 0 && angle%360 < 0.1) && clockwise) {
        rotate(angle);
        clockwise=true;
        console.log(clockwise);
    } else {
        rotate(-angle);
        clockwise=false;
        console.log(clockwise);
        if(angle%360 > 0 && angle%360 < 0.1) {
            clockwise=true;
        }
    }
    rect(-26, -26, 52, 52);
}

// function update() {
//     console.log("here");
//     _getIPAdress();
// }