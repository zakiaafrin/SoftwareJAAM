$('#contact-form').submit(function (e) {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
        alerttify.error('Please check your entries');
    } else {
        e.preventDefault();
        $(this).get(0).reset();
        alerttify.success('Message sent');
    }
})