const loginBtn = document.getElementById('login_btn');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('user_email').value;
    const password = document.getElementById('user_password').value;


    if (localStorage.getItem(email) != null) {
        const usersJSON = localStorage.getItem(email);
        const users = JSON.parse(usersJSON);

        if(users.password == password) {

            var divElement1 = document.getElementById("div1");
            var divElement2 = document.getElementById("div2");
            divElement1.style.zIndex = 0;
            divElement2.style.zIndex = 1;

            document.getElementById("u_email").innerHTML = users.login;
            document.getElementById("u_fullname").innerHTML = users.fullName;
            var uCountry = users.country;
            switch(uCountry) {
                case "1": document.getElementById("u_country").innerHTML = "Kazakhstan";
                    break;
                case "2": document.getElementById("u_country").innerHTML = "USA";
                    break;
                case "3": document.getElementById("u_country").innerHTML = "Russia";
                    break;
                case "4": document.getElementById("u_country").innerHTML = "Canada";
                    break;
                case "5": document.getElementById("u_country").innerHTML = "China";
                    break;
                case "6": document.getElementById("u_country").innerHTML = "Japan";
                    break;
                case "7": document.getElementById("u_country").innerHTML = "Korea";
                    break;
            }
            document.getElementById("u_birthdate").innerHTML = users.birthdate;

            document.getElementById("navLog").innerHTML = users.fullName;
            document.getElementById("navReg").innerHTML = "Logout";

            document.getElementById("nav").style.width = "300px";

        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('No such user exists');
    }

});


