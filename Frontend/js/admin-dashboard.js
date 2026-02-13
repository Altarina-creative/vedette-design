const token = localStorage.getItem("adminToken");

if (!token) {
  window.location.href = "admin-login.html";
}

async function loadEnquiries() {
  const res = await fetch("http://localhost:5000/api/enquiry", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  const data = await res.json();

  const tbody = document.querySelector("#enquiryTable tbody");
  const cards = document.getElementById("enquiryCards");

  tbody.innerHTML = "";
  cards.innerHTML = "";

  data.forEach(e => {

    // TABLE
    tbody.innerHTML += `
      <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td class="message-cell">${e.message}</td>
        <td>${new Date(e.createdAt).toLocaleString()}</td>
        <td>
          <button class="delete-btn" onclick="deleteEnquiry('${e._id}')">
            Delete
          </button>
        </td>
      </tr>
    `;

    // CARD (🔥 fixed)
    cards.innerHTML += `
      <div class="card">
        <p><strong>Name:</strong> ${e.name}</p>
        <p><strong>Email:</strong> ${e.email}</p>
        <p class="message"><strong>Message:</strong> ${e.message}</p>
        <p><strong>Date:</strong> ${new Date(e.createdAt).toLocaleString()}</p>
        <button class="delete-btn" onclick="deleteEnquiry('${e._id}')">
          Delete
        </button>
      </div>
    `;
  });
}

async function deleteEnquiry(id) {
  if (!confirm("Delete this enquiry?")) return;

  await fetch(`http://localhost:5000/api/enquiry/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token
    }
  });

  loadEnquiries();
}

function logout() {
  localStorage.removeItem("adminToken");
  window.location.href = "admin-login.html";
}

loadEnquiries();
