var likeTracker = ['#neil', '#nichole', '#jim'];

function addLike(element) {
    let likeTrackerIndex = 0;

    if (element.id == 'nicholeButton') {
        likeTrackerIndex = 1;
    }
    else if (element.id == 'jimButton') {
        likeTrackerIndex = 2;
    }

    let numLikes = document.querySelector(likeTracker[likeTrackerIndex]).innerText;
    numLikes++;
    document.querySelector(likeTracker[likeTrackerIndex]).innerText = numLikes;
}

function over(element) {
    element.style.backgroundColor = "lime";
    element.style.cursor = "pointer";
}

function out(element) {
    element.style.backgroundColor = "#ffd966";
}