var count = 0;

function keypressListener(event) {

    if (event.which == 40 || event.keyCode == 40) {

        if(count == 0){
            loadContent("correo.html");
            count++;
        }else{
            loadContent("fotos.html");
            count = 0;
        }
        return false;
    }
    return true;
};

document.onkeydown = keypressListener;