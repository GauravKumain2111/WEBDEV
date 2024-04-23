function openPopup() {
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

window.onload = function () {
    openPopup();

    var popupButton = document.getElementById("popup-button");
    popupButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.open("", "popupWindow", "width=400,height=400");
    });

    window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave this page?";
        setTimeout(function () {
            openPopup();
        }, 1000); // Delay in milliseconds before opening the popup
    });
};



function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var locality = document.getElementById('locality').value;

    var nameError = document.getElementById('name-error');
    var phoneError = document.getElementById('phone-error');
    var valid = true;

    // Validate Name: Should not be empty
    if (name.trim() === '') {
        nameError.textContent = 'Please enter your name';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate Phone Number: Should be numeric and 10 digits long
    if (!phoneNumber.match(/^\d{10}$/)) {
        phoneError.textContent = 'Please enter a valid phone number';
        valid = false;
    } else {
        phoneError.textContent = '';
    }

    // Add more validation rules for other fields if needed

    if (valid) {
        // Submit the form if all fields are valid
        document.forms[0].submit();
    }
}