function Checking() {

    var terms = document.getElementById("checkbox").checked;
    if (terms == false) {
        console.log("BOOP");
        document.getElementById("submit_register").disabled = true;
        return false
    } else {
        console.log("beeeep");
        document.getElementById("submit_register").disabled = false;
        return true
    }
}