// JavaScript Document
$(document).ready(function() {
	// On Click SignUp It Will Hide Login Form and Display Registration Form
	$("#signup").click(function() {
		$("#id01").slideUp("slow", function() {
			$("#id02").slideDown("slow");
		});
	});
	
	// On Click SignIn It Will Hide Registration Form and Display Login Form
	$("#signin").click(function() {
		$("#id02").slideUp("slow", function() {
			$("#id01").slideDown("slow");
		});
	});
		// On Click Forgot Password It Will Hide Signin Form and Display Forgot Password Form
		$("#forgotpwd").click(function() {
		$("#id01").slideUp("slow", function() {
			$("#id03").slideDown("slow");
		});
	});

});

function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("mySidenav").style.borderRight = "solid 2px #B85929";
		}

function closeNav() {
    	document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.borderRight = "none";
}