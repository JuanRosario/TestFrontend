$("#formulary").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    $("#formulary").clear();
    $("#tbodyC").append(`
        <tr>
            <td>` + name + `</td>
            <td>` + lastname + `</td>
            <td>` + email + `</td>
            <td>` + phone + `</td>
        </tr>
    `);
});