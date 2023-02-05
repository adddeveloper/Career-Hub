var title = document.querySelector("title");
document.querySelector("head").innerHTML += '<link rel="shortcut icon" href="/style/favicons/'+String(title.innerText.split("")[0]).toLocaleLowerCase()+'.ico" type="image/x-icon">';

function go(e){
    var anchor = document.createElement("a");
    anchor.href = e;
    anchor.click(0);
}
