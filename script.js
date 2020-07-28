//validate numbers

function validate(inputID, errorID){
    inputText = document.getElementById(inputID);
    error = document.getElementById(errorID);

    if (isNaN(inputText.value)){
        error.style.display="inline";
    }
    else {
        error.style.display = "none";
    }
}