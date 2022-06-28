function addLike(element) {
    element.innerText++;
}

function toggleButton(element) {
    if (element.style.backgroundColor != 'lime')
    {
        element.style.backgroundColor = "lime";
        element.style.cursor = "pointer";
    }
    else 
        element.style.backgroundColor = "rgb(255, 217, 102)";
    
}