// $('#contact-form').submit(function (e) {
//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
//     let message = document.getElementById('message');

//     if (!name.value || !email.value || !message.value) {
//         document.write('Please check your entries');
//     } else {
//         $.ajax({
//             url: "https://formspree.io/zakia_afrin@yahoo.com",
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         })
//         e.preventDefault();
//         $(this).get(0).reset();
//         document.write('Message sent');
//     }
// })