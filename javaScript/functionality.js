var contactContainer = document.querySelector('.contacts');

$(document).ready(function() {
    var transitionSpeed = 300;
    
    $('input[type="checkbox"]').each(function() {
		var thisBox = $(this).attr("id");
		if ($(this).is(":checked")) {
			$("." + thisBox).show(transitionSpeed);
		} else {
			$("." + thisBox).hide(transitionSpeed);
		}
	});

	$('input[type="checkbox"]').change( function() {
		var thisBox = $(this).attr("id");
		if ($("#" + thisBox).is(":checked")) {
			$("." + thisBox).show(transitionSpeed);
		} else {
			$("." + thisBox).hide(transitionSpeed);
		}
	});
});


function searchForFirstLetter(firstLetterOfName) {
    var currentSections = contactContainer.children;
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
    var image = document.getElementById('placeholder');
    var content = "<div class='row align-items-center contact'>"
        + "<div class='col-auto'>"
        + "<div id='" + name[0].toLowerCase() + name.slice(1) + surname[0].toUpperCase() + surname.slice(1) + "' class='img-fluid rounded-circle contactImage'"
        + "style='background-image: url(http://i54.tinypic.com/4zuxif.jpg)' ></div>"
        + "</div>"
        + "<div class='col'>"
        + "<h5>" + name[0].toUpperCase() + name.slice(1) + " " + surname[0].toUpperCase() + surname.slice(1) + "</h5>"
        + "<span class='number contactInfo'>" + mobileNumber + "</span>"
        + "<span class='email contactInfo'>" + email + "</span>"
        + "</div>"
        + "<div class='col-auto'><button data-toggle='modal' data-target='#deleteContactModel'><i"
        + " class='far fa-trash-alt'></i></button></div>"
        + "</div>"
    if (searchForFirstLetter(name[0])) {
        var contactEntry = document.getElementById(name[0].toLowerCase() + "Contacts");
        contactEntry.innerHTML += content;

    }
    else {
        var container = document.getElementById('contactsList');
        var newSectionContent = "<section class='container-fluid' id='" + name[0].toLowerCase() + "Contacts'>"
            + "<div class='row contactHeading pl-3'><h6 class='py-md-1'>" + name[0].toUpperCase() + "</h6>"
            + "</div>" + content + "</section>";
        container.innerHTML += newSectionContent;
    }
}

var reader = new FileReader();
reader.onload = function (e) {
    console.log($('#placeholder').attr('src', e.target.result))
    $('#placeholder').attr('src', e.target.result);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}

$("#newImage").change(function () {
    readURL(this);
});

function getContact() {
    var buttons = contactContainer.getElementsByTagName('button')
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', function(event){
            var buttonClicked = find(event);
            return buttonClicked    
        
        });        
    }
    
}

getContact()

function find(item){
    return item.toElement.parentElement.parentElement.parentElement
}

function deleteContact(){
    var contact = getContact()
    console.log(contact)
}
