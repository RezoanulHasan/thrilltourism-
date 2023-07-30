//  handle form submission 
 const form = document.getElementById('contact-form');
 form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Reset the form after submission
    form.reset();
    alert('Message sent successfully!');
  });
