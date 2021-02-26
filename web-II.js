function abc() {
    var name=document.foam["Regform"]["Name"];
    var email=document.form["Regform"]["Email"];
    var telephone=document.foam["Regform"]["telephone"];
    var subject=document.foam["Regform"]["subject"];
    var password=document.foam["Regform"]["password"];
    var address=document.foam["Regform"]["address"];
    if (name,value=="") {
        window.alert("Please enter your name");
        name.focus();
        return false;
    }
    elseif(name.length<5)
    {
        window.alert("Please size your name.");
        name.focus();
        return false;
    }

        if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

        if (email.value == "") {
        window.alert(
        "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

        if (phone.value == "") {
        window.alert(
        "Please enter your telephone number.");
        phone.focus();
        return false;
    }

        if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

        if (what.selectedIndex < 1) {
        alert("Please enter your food.");
        what.focus();
        return false;
    }

        return true;
    }