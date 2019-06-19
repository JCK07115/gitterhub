var api = "https://api.github.com/search/repositories?q={";
var query = "query";
var access_token = "}&access_token=9b801f8a265f05e279c48184b85bc0d80214682c";
var prev_subject;
var curr_subject;                //phrase entered by user
var displayed = false;      //boolean to ensure that data is loaded once per api call
var gitInfo;                //object to hold response from api call
var x = 0;
var cleared = false;
var width;
var height;
var network;

var network_present = false;

function setup() {
    background(0);
    width = displayWidth;
    height = displayHeight;
    createCanvas(width, height);
    var button = select("#submit");
    button.mousePressed(update);
}

//we don't reload/redraw the graph if the phrase is the same as the one we already queried
function update() {
    displayed = false;
    prev_subject = curr_subject;
    curr_subject = select("#phrase").value();
    loadJSON(api+curr_subject+access_token, gotData);
}

function gotData(data){
    gitInfo = data;
}

var fade = function(option) {
    console.log("fading");
    // for(var i=0; i<option;i++)
    //     resizeCanvas(200, displayHeight);
    // ellipse(floor(random(width)), floor(random(height)), 50, 50);
}

function cleanCanvas (option, callback) {
    for(var i=0; i<30; i++)
        ellipse(floor(random(width)), floor(random(height)), 50, 50);

    fade(option);

    // if(!cleared) {
    //     erase(1, fade);
    //     cleared = true;
    // }
    // cleared = false;

    // width = 600;
    // fill(250);
    // for(i=0; i<displayWidth; i+=600) {
    //     resizeCanvas(width, displayHeight);
    //     width+=100;
    // }
}

function draw() {
    if(gitInfo && (displayed==false)) {
        // console.log(gitInfo);
        if((gitInfo.items.length != 0) && (curr_subject != prev_subject)) {

            if(network_present) {  //clear out elements from last query
                // cleanCanvas(1, fade);
                network.clearout();
            }
            network = new Network(curr_subject, gitInfo);
            // network.show();
            network.mapout();
            network_present = true;
        }
        
        displayed = true;
        gitInfo = null;
    } else {
        if((mouseX > 50 && mouseX < 150) 
            && (mouseY >50 && mouseY < 150)) {
            stroke(250, 0, 250);
            ellipse(100, 100, 50, 50)
        } else {
            stroke(0);
            ellipse(100, 100, 50, 50);
        }
        console.log("no data");
    }
}

