function check_data() {
    if(validation() === false) {
        document.getElementById("error").innerText = "Данные введены неверно!"
    } else if(validation() === true) {
        var ans;
        ans = confirm("Вы уверены, что хотите отправить введенные данные ?");
        if (ans) submit();
    }
}
function validation() {
    if (document.getElementById("name").value.length === 0) {
        return false;
    } else if (document.getElementById("email").value.length === 0) {
        return false;
    } else if(email_validation()){
        return false;
    } else if(phoneNumber_validation()){
        return false;
    } else if(address_validation()){
        return false;
    } else{
        return true;
    }
}    
function email_validation() {
    var pattn;
    pattn = new RegExp("^[\.\-_A-Za-z0-9]+?@[\.\-A-Za-z0-9]+?\.[A-Za-z0-9]{2,6}$");
    return !pattn.test(document.getElementById("email").value);
}
function address_validation() {
    var pattn;
    pattn = new RegExp("^[a-zA-Za-яА-Я ]+ *[0-9]+( *, [a-zA-Za-яА-Я ] + [0-9]+)?");
    return !pattn.test(document.getElementById("company").value);
}
function phoneNumber_validation() {
    var pattn;
    pattn = new RegExp("^+380\d{3}\d{2}\d{2}\d{2}$");
    return !pattn.test(document.getElementById("phone_number").value);
}

