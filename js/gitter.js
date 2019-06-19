/**
 * represenation of an individual cell (GitHub user - gitter :D)
 * @param {*} user          //GitHub id
 * @param {*} html_url      //link to repo
 * @param {*} img_url       //link to repo-img
 */
function Gitter(user, html_url, img_url) {
    this.user = user;
    this.html_url = html_url;
    this.img_url = img_url;

    this.x = 0;
    this.y = 0;

    this.show = function() {
        console.log(this.user);
        console.log(this.repo_url);
        console.log(this.img_url);
    }
}
