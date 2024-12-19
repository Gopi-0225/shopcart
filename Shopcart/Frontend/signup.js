const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("http://192.168.0.120:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        } else {
            const errorData = await response.json();
            alert(`Error: ${JSON.stringify(errorData)}`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again later.");
    }
});
