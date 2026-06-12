function showCareer() {
    var interest = document.getElementById("interest").value;
    var result = document.getElementById("result");

    if (interest === "") {
        result.innerHTML = "Please enter an interest.";
    } else if (interest.toLowerCase() === "programming") {
        result.innerHTML = "Suggested Career: Software Engineer";
    } else if (interest.toLowerCase() === "electronics") {
        result.innerHTML = "Suggested Career: Electronics Engineer";
    } else {
        result.innerHTML = "Suggested Career: " + interest + " related professional field.";
    }
}
