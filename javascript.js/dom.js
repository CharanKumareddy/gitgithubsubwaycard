function switchOff(){
    document.getElementById("bulb-off-img").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-img").src=
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-status").textContent="Switch Off";
    document.getElementById("onSwitch").style.background="#22c55e";
    document.getElementById("offSwitch").style.background="#cbd2d9";
}
function switchOn(){
    document.getElementById("bulb-off-img").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-img").src=
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-status").textContent="Switch On";
    document.getElementById("offSwitch").style.background="#e12d39";
    document.getElementById("onSwitch").style.background="#cbd2d9";
}
