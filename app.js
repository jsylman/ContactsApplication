$(document).ready(function(){
	//Array to keep all contacts submitted
	var contactArray = [];
	var contactNumber = 0;

	//When user hits "add" button
	$('form').submit(function(event){
		event.preventDefault();
		var newContact = Object.create(Contact);
		newContact.FirstName = $("#First-name").val();
		newContact.LastName = $("#Last-name").val();
		newContact.PhoneNumber = $("#Phone-Number").val();
		newContact.Street = $("#Street").val();
		newContact.City = $("#City").val();
		newContact.State = $("#State").val();
		contactArray.push(newContact);
		$('.contactList').append(
			"<li>"+
			"<span class = 'contactName'>"+newContact.FirstName+" "+newContact.LastName+"</span>"+
			"</li>");
		$("#First-name").val("");
		$("#Last-name").val("");
		$("#Phone-Number").val("");
		$("#Street").val("");
		$("#City").val("");
		$("#State").val("");
	});

	//When user clicks on name in lower directory, have details pop up above
	$('ul').on("click", "li", function(){
		$('#contactFullName').text("");
		$('#contactFirstName').text("");
		$('#contactLastName').text("");
		$('#contactPhone').text("");
		$('#contactAddress').text("");
		var name = $(this).text();
		console.log(name);
		var contactObject = findContact(name);
		$('#contactFullName').text(name);
		$('#contactFirstName').text("First Name : "+contactObject.FirstName);
		$('#contactLastName').text("Last Name : "+contactObject.LastName);
		$('#contactPhone').text("Phone Number : "+contactObject.PhoneNumber);
		$('#contactAddress').text("Address : "+contactObject.Street+", "+contactObject.City+", "+contactObject.State);
	});


	//Search for name within the array - used when name is clicked
	var findContact = function(fullName){
		for(var i = 0; i< contactArray.length; i++){
			if(fullName.includes(contactArray[i].FirstName + " "+ contactArray[i].LastName)){
				return contactArray[i];
			}
		}
	}

	var Contact = {
		FirstName:"",
		LastName:"",
		PhoneNumber:"",
		Street:"",
		City:"",
		State:""
	}
})

