$(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});

function searchForFirstLetter(firstLetterOfName) {
    var parent = document.querySelector('.contacts');
    var currentSections = parent.children;
    for (var i = 0; i < currentSections.length; i++) {
        if (currentSections[i].getElementsByTagName('h6')[0]['textContent'] == firstLetterOfName.toUpperCase()) {
            return true
        }
    }
    return false
}

function createNewContact() {
    var name = document.getElementById('newName').value;
    var surname = document.getElementById('newSurname').value;
    var mobileNumber = document.getElementById('newMobileNumber').value;
    var email = document.getElementById('newEmailAddress').value;
    var address = document.getElementById('newPhysicalAddress').value;
    var container = document.getElementById('contactsList');
    var image = document.getElementById('newImage');
    console.log(image)
    if (searchForFirstLetter(name[0])) {
        var content = "<div class='row align-items-center px-2 px-md-5 contact'>"
            + "<div class='col-4 col-md-2'><img src='"+image+"' alt='contacts image'"
            + " class='img-fluid rounded-circle'></div>"
            + "<div class='col-6 col-md-8'>"
            + "<h5 class='contactName'>" + name + " " + surname + "</h5>"
            + "<span class='number contactInfo'>" + mobileNumber + "</span>"
            + "<span class='email contactInfo pl-md-3'>" + email + "</span>"
            + "</div>"
            + "<div class='col-2'><button data-toggle='modal' data-target='#deleteContactModel'><i "
            + "class='far fa-trash-alt'></i></button></div>"
            + "</div>";
        var contactEntry = document.getElementById(name[0].toLowerCase()+"Contacts");
        contactEntry.innerHTML += content;
    }
    else {
        var content = "<section class='container-fluid' id='"+name[0].toLowerCase()+"Contacts'>"
            + "<div class='row contactHeading pl-3'>"
            + "<h6 class='py-md-1'>" + name[0].toUpperCase() + "</h6>"
            + "</div>"
            + "<div class='row align-items-center px-2 px-md-5 contact'>"
            + "<div class='col-4 col-md-2'><img src='"+image+"' alt='contacts image'"
            + " class='img-fluid rounded-circle'></div>"
            + "<div class='col-6 col-md-8'>"
            + "<h5 class='contactName'>" + name + " " + surname + "</h5>"
            + "<span class='number contactInfo'>" + mobileNumber + "</span>"
            + "<span class='email contactInfo pl-md-3'>" + email + "</span>"
            + "</div>"
            + "<div class='col-2'><button data-toggle='modal' data-target='#deleteContactModel'><i "
            + "class='far fa-trash-alt'></i></button></div>"
            + "</div>";
        container.innerHTML += content;
    }

}

function getContact(){
    console.log($(this).find('contact'))
}