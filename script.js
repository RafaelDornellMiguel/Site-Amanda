document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);

    alert("Formulário enviado! (Simulação)");
});

emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(() => {
            alert("Email enviado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao enviar email:", error);
            alert("Erro ao enviar email.");
        });
});


// formulario

document.getElementById('sendEmail').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Erro ao enviar mensagem.');
    }
});
