document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: email.value,
    password: password.value
  };

  const res = await fetch("http://localhost:5000/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (res.ok) {
    localStorage.setItem("adminToken", result.token);
    window.location.href = "admin-dashboard.html";
  } else {
    alert(result.message);
  }
});
