$(document).ready(function(){
	//Array to keep all contacts submitted
	var contactArray = [];
	var contactNumber = 0;
	var newContact;
	var phones = 0;
	var addresses = 0;
	var phoneArray = [];
	var addressArray = [];

	//When user hits "add contact" button
	$('form').submit(function(event){
		event.preventDefault();
		newContact = Object.create(Contact);
		phoneArray = [];
		addressArray = [];
		newContact.FirstName = $("#First-name").val();
		newContact.LastName = $("#Last-name").val();
		for(var i = 0; i<=phones; i++){
			phoneArray.push($("#Phone-Number"+i).val());
		}
		newContact.PhoneNumber = phoneArray;
		for(var k = 0; k<=addresses; k++){
			addressArray.push($("#Street"+k).val()+", "+$("#City"+k).val()+", "+$("#State"+k).val());
		}
		newContact.Address = addressArray;
		contactArray.push(newContact);
		$('.contactList').append(
			"<li>"+
			"<span class = 'contactName'>"+newContact.FirstName+" "+newContact.LastName+"</span>"+
			"</li>");
		$("#First-name").val("");
		$("#Last-name").val("");
		$("#Phone-Number0").val("");
		$("#Street0").val("");
		$("#City0").val("");
		$("#State0").val("");
		for(var j = 1; j<=phones; j++){
			$("#Phone-Number"+j).remove();
		}
		for(var l = 1; l<=addresses; l++){
			$("#Street"+l).remove();
			$("#City"+l).remove();
			$("#State"+l).remove();
		}
		phones = 0;
		addresses = 0;
	});

	//When user clicks "add phone number" button
	$(".AddPhone").click(function(){
		phones++;
		$("#Phone-Number0").clone().attr('id', 'Phone-Number'+ phones).insertAfter("#Phone-Number0");
		$('#Phone-Number'+phones).val("");
	});

	//When user clicks "add address number" button
	$(".AddAddress").click(function(){
		addresses++;
		$("#Street0").clone().attr('id', 'Street'+ addresses).insertAfter("#Street0");
		$("#City0").clone().attr('id', 'City'+ addresses).insertAfter("#City0");
		$("#State0").clone().attr('id', 'State'+ addresses).insertAfter("#State0");	
		$('#Street'+addresses).val("");	
		$('#City'+addresses).val("");	
		$('#State'+addresses).val("");	
	});

	//When user clicks on name in lower directory, have details pop up above
	$('ul').on("click", "li", function(){
		$('#contactFullName').text("");
		$('#contactFirstName').text("");
		$('#contactLastName').text("");
		$('#contactPhone').text("");
		$('#contactAddress').text("");
		var name = $(this).text();
		var contactObject = findContact(name);
		$('#contactFullName').text(name);
		$('#contactFirstName').text("First Name : "+contactObject.FirstName);
		$('#contactLastName').text("Last Name : "+contactObject.LastName);
		for(var i = 0; i<contactObject.PhoneNumber.length; i++){
			$('#contactPhone').append("Phone Number"+(i+1)+" : "+contactObject.PhoneNumber[i]+"<br>");
		}
		for(var j = 0; j<addressArray.length; j++){
			$('#contactAddress').append("Address"+(j+1)+" : "+contactObject.Address[j]+"<br>");
		}	
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
		Address: ""
	}

})

