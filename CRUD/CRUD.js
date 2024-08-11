const submit = document.querySelector('#submit')
console.log("Submit ", submit);

let preventerdata = []
console.log("prev enterdata", preventerdata);

let enterdata = true
if (enterdata) {
    submit.addEventListener('click', function (e) {
     e.preventDefault()
     console.log(enterdata);
    validtheenterdata(enterdata) ;
 }
)}

function validtheenterdata(enterdata) {
    if (isNaN(enterdata)) {
        alert("please enter a valid name ");
        } 
        // else if (enterdata = "email") {
        //     alert("please enter a email ") ;
        // } 
         else{
            preventerdata.push(enterdata)
            console.log("push", preventerdata)
            console.log("enterdata check ", enterdata); 
        }
        }
    

    // Get form values
    const username = document.querySelector('#first-name').value;
    const lastname  = document.querySelector('#last-name').value
    const email = document.querySelector('#email').value;
    const dob = document.querySelector('.dob-form').value;

    // note:- 
    // Store in localStorage
    localStorage.setItem('userName', username);
    localStorage.setItem('userlastname', lastname)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userDOB', dob);

