$(document).ready(function () {
    getContactInformation();
});
function requiredCheck() {
    var error = true;
    $('.form-control').each(function () {
        if ($(this).val() == "") {
            $(this).parent().children('span').css("display", "block");
            error = false;
        }
        else {
            $(this).parent().children('span').css("display", "none");
        }
    });
    return error;
}
function getContactInformation() {
    $.getJSON("/api/Contacts")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('#contactinfo').append("<tr><td>" + item.Id + "</td>" + "<td>" + item.First_Name + "</td>" + "<td>" + item.Last_Name + "</td>" + "<td>" + item.Email + "</td>" + "<td>" + item.Phone_Number + "</td>" + "<td>" + item.Status + "</td><td><button class=\"btn btn -default\" onclick=\"getContact(this);\" data-id=" + item.Id + " type = \"button\" ><span class=\"glyphicon glyphicon-edit\"></span></button ></td><td><button class=\"btn btn -default\" onclick=\"deleteContacts(this);\" data-id=" + item.Id + " type = \"button\" ><span class=\"glyphicon glyphicon-remove\"></span></button ></td></tr>");
            });
        });
}
function contactAddUpdate() {
    contact = new Object();
    contact.First_Name = $("#firstname").val();
    contact.Last_Name = $("#lastname").val();
    contact.Email = $("#email").val();
    contact.Phone_Number = $("#phonenumber").val();
    contact.Status = $("#status").val();

    if ($("#btnAddUpdate").text().trim() == "Add") {
        if (requiredCheck())
            addContact(contact);
    }
    else {
        var eleId = $("#id").val();
        contact.Id = eleId;

        if (requiredCheck())
            updateContact(eleId, contact);
    }
}
function addContact(contact) {
    $.ajax({
        url: "/api/Contacts",
        type: 'POST',
        contentType:
            "application/json;charset=utf-8",
        data: JSON.stringify(contact),
        success: function (contact) {
            alert("New Contact Added");
            $('#contactinfo').children("tr").remove();
            getContactInformation();
            formClear();
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}
function getContact(id) {
    var id = $(id).data("id");
    $.ajax({
        url: "/api/Contacts/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (contact) {
            contactToFields(contact);
            $("#btnAddUpdate").text("Update");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function updateContact(id, contact) {
    $.ajax({
        url: "/api/Contacts/" + id,
        type: 'PUT',
        contentType:
            "application/json;charset=utf-8",
        data: JSON.stringify(contact),
        success: function (contact) {
            $('#contactinfo').children("tr").remove();
            getContactInformation();
            $("#btnAddUpdate").text("Add");
            formClear();
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}
function deleteContacts(selected) {
    var id = $(selected).data("id");
    $.ajax({
        url: "/api/Contacts/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (contact) {
            deleteContact(contact);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}
function deleteContact(delContact) {
    contact.Id = delContact.Id;
    contact.First_Name = delContact.First_Name;
    contact.Last_Name = delContact.Last_Name;
    contact.Email = delContact.Email;
    contact.Phone_Number = delContact.Phone_Number;
    contact.Status = "Inactivate";
    updateContact(contact.Id, contact);
}

function contactSearch() {
    var id = $("#search").val();
    $.ajax({
        url: "/api/Contacts/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (contact) {
            contactToFields(contact);
            $("#btnAddUpdate").text("Update");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function Cancel() {
    $("#btnAddUpdate").text("Add");
    formClear();
}

function contactToFields(contact) {
    $("#id").val(contact.Id);
    $("#firstname").val(contact.First_Name);
    $("#lastname").val(contact.Last_Name);
    $("#email").val(contact.Email);
    $("#phonenumber").val(contact.Phone_Number);
    $("#status").val(contact.Status);
}

function formClear() {
    $("#id").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#phonenumber").val("");
}