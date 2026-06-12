function showCareer() {
    let interest = document.getElementById("interest").value;
    let result = document.getElementById("result");

    if (interest.toLowerCase() === "programming") {
        result.innerHTML = "Suggested Career: Software Engineer";
    } else if (interest.toLowerCase() === "electronics") {
        result.innerHTML = "Suggested Career: Electronics Engineer";
    } else {
        result.innerHTML = "Suggested Career: Explore related professional fields.";
    }
}
