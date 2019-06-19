/**
 * constructor for network object
 * @param {*} subject       the phrase that the user types in and enters
 * @param {*} obj           the response from the github api query using the entered phrase 
 *                          note: we don't pass the full obj into gitters; just important fields
 */

function Network (subject, obj) {
    this.subject = subject;         //might be useful for displaying in background?
    this.obj = obj;
    this.network = [];              //array of related accounts/repos
    this.divId = this.subject+"ImgDiv";

    for(var i=0; i<this.obj.items.length; i++) {
        this.network[i] = new Gitter(this.obj.items[i].owner.login, this.obj.items[i].owner.html_url, this.obj.items[i].owner.avatar_url);
    }

    /**
     * create network data structure
     */
    //generate graph of gitters
    this.mapout = function() {
        console.log(360/this.network.length);
        //console.log("mapout");
        var divNode = document.createElement("div");
        divNode.setAttribute("id", this.divId);

        var a;
        var img;
        for(var i=0; i<this.network.length; i++) {
            a = document.createElement("a");
            a.setAttribute("href", this.network[i].html_url);
            img = document.createElement("img");
            this.setAttributes(img, [{"id": "img"+i}, {"title": this.network[i].user}, {"src": this.network[i].img_url}]);
            a.setAttribute("target", "_blank");
            a.appendChild(img);
            divNode.append(a);
        }
        document.body.appendChild(divNode);
    }

    /**
     * clean out network data structure
     * (i clean out the network graphics in sketch.js)
     */
    //destroy graph of gitters
    this.clearout = function() {      
        console.log("clearout");
        var node = document.getElementById(this.divId);
        node.parentElement.removeChild(node);       //kind of sad -_-'
    }

    /**
     * elem:            DOM element to which we want to add attributes
     * arr_of_att:      array of attributes <objects> that we want to add to element
     */
    //convenience purposes
    this.setAttributes = function (elem, arr_of_att) {
        for(var i=0; i<arr_of_att.length; i++) {
            // console.log("key: " + Object.keys(arr_of_att[i])[0] + " value: " + Object.values(arr_of_att[i])[0]);
            elem.setAttribute(Object.keys(arr_of_att[i])[0], Object.values(arr_of_att[i])[0]);
        }
    }

    //dbg purposes
    this.show = function () {
        for(var i in this.network) {
            console.log(this.network[i]);
            //this.network[i].show();
        }
    }

    this.animate = function () {
        
    }
}
