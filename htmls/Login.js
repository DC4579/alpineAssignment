
document.getElementById("create-account-link").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("create-account-popup").style.display = "block";
});

function closePopup() {
    document.getElementById("create-account-popup").style.display = "none";
}


function validatePassword() {
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
        alert("Account created successfully");
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match! Please check again");
        return false;
    }
    return true;
}


document.querySelector('form').onsubmit = validatePassword;


function authenticateUser(username, password) {
    $.getJSON("users.json", function (users) {
        var storedUsers = JSON.parse(localStorage.getItem("new-users")) || [];
        
        var user = users.find(user => user.username === username && user.password === password);
        
        var storedUser = storedUsers.find(user => user.username === username && user.password === password);

        if (user || storedUser) {
            var loggedInUser = user ? user.username : storedUser.username;
            localStorage.setItem("loggedInUser", loggedInUser); 
            alert("Login successful!");
           
            window.location.href = "Dashboard.html";
        } else {
            alert("Invalid username or password.");
        }

    }).fail(function () {
        alert("Failed to load user data.");
    });
}
function authenticateNewUser(email, password) {
    var storedUsers = JSON.parse(localStorage.getItem("new-users")) || [];
    
    
    var storedUser = storedUsers.find(user => user.email === email && user.password === password);//checking user

    if (storedUser) {
        localStorage.setItem("loggedInUser", storedUser.username); 
        alert("Login successful!");
        
        window.location.href = "Dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
}



$("form.login-form").submit(function (event) {
    event.preventDefault();
    var username = $("#login-username-email").val();
    var password = $("#login-password").val();
    authenticateUser(username, password);
});

function login() {
    var username = $("#login-username-email").val();
    var password = $("#login-password").val();
    authenticateUser(username, password);
}



$("form.create-account-form").submit(function (event) {
    
    event.preventDefault();//prevent google default refreshing

    
    var name = $("#new-Name").val();
    var email = $("#new-email").val();
    var password = $("#new-password").val();
    var confirmPassword = $("#confirm-password").val();

    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    
    var newUser = { name: name, email: email, password: password };

    
    var users = JSON.parse(localStorage.getItem("new-users")) || [];

     
    users.push(newUser);// Adding new user

    
    localStorage.setItem("new-users", JSON.stringify(users));

    
    alert("Account created successfully!");

    
    closePopup();
});


function storeNewsLetter() {
    let email = document.getElementById("newsLet").value;
    let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];
    if (getEmail.some(v => v.email === email)) {
        alert("You are already subscribed")
 } else {
        getEmail.push({
            "email": email,
        });
        localStorage.setItem("newsLetter", JSON.stringify(getEmail));
        alert("Thank you for subcribing to the Newsletter")

        emailInput.value = "";

    }

}



