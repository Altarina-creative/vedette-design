const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                form.reset();
            } else {
                alert("Error: " + result.message);
            }

        } catch (err) {
            alert("Error: " + err.message);
        }
    });
}
function scrollToWork() {
    const section = document.getElementById("our-work");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}