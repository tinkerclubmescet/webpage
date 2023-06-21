var navLinks = document.getElementById("navLinks");
var button = document.getElementById('bars');
button.addEventListener(('click',()=>{
    button.style.display = 'none';
}))
function showMenu(){
    button.style.display = 'none';
    navLinks.style.right ="0";
}
function hideMenu(){
    button.style.display = 'block';
    navLinks.style.right ="-200px";
}

