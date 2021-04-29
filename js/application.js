function haveSubmission() {
    let firstName= document.getElementById("fname").value;
    let middleName = document.getElementById("mname").value;
    let lastName = document.getElementById("lname").value;
    let birthDay = document.getElementById("birthday").checked;
    let female = document.getElementById("female").value;
    let male = document.getElementById("male").value;
    let county = document.getElementById("county").value;
    let country = document.getElementById("country").value;
    let high = document.getElementById("high").checked;
    let dateMax = document.getElementById("datemax").value;
    let dateMin = document.getElementById("datemin").value;
    let grade = document.getElementById("grade").value;
    let university = document.getElementById("university").checked;
    let bursaryOne = document.getElementById("bursary1").checked;


    if(firstName === "" || middleName === "" || lastName === "" || birthDay === "" || female === "" || male === "" || county === "" || country === "" || high === "" || dateMax === "" || dateMin === "" || grade === "" ||
    university === "" || bursaryOne === ""){
        alert("Please fill in fields")
    } else {
        alert("Submitted")
    }
}