function getFormvalue() {
    //Write your code here
	event.preventDefault();

	//getformdata
	const firstname=document.forms["form1"]["fname"].value;
	const lastname=document.forms["form1"]["lname"].value;

	const message=
		firstname+" "+lastname;

	alert(message);

}
