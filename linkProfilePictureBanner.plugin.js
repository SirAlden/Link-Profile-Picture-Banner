/**
 * @name Link-Profile-Picture-Banner
 * @description Lets you click users' avatars and banners on their profile page to view a bigger version in your browser.
 * @version 2.0.0
 * @author Broken Satellite Network
 */

module.exports = class linkProfilePicture {
    start() {
        document.addEventListener("click", this.link)
    }
    stop() {
        document.removeEventListener("click", this.link)
    }
    link({target}) {
        if (target.classList.contains("avatar-3QF_VA")) {
			window.open(target.querySelector("img").src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
		}
        else if (target.style.backgroundImage && target.style.backgroundImage.includes("banner")) {
            let url = target.style.backgroundImage
            url = url.substring(4, url.length-1).replace(/["']/g, "")
            url = url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096")
            window.open(url)
        }
    }
}
