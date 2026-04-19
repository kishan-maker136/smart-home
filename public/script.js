// API base URL: use same origin for Railway and local deployment
const API = window.location.origin || "http://localhost:3000";

// Load devices
fetch(API + "/devices")
  .then(res => res.json())
  .then(data => {
    let html = "";

    data.forEach(d => {
      html += `
        <div>
          <h3>${d.device_name}</h3>
          <p>Status: ${d.status ? "ON" : "OFF"}</p>
          <button onclick="toggle(${d.device_id}, ${!d.status})">
            Toggle
          </button>
        </div>
      `;
    });

    document.getElementById("devices").innerHTML = html;
  })
  .catch(err => {
    console.error("Error loading devices:", err);
  });

// Toggle device
function toggle(id, status) {
  fetch(API + "/devices/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
  .then(() => location.reload())
  .catch(err => {
    console.error("Toggle failed:", err);
  });
}

// Chart
const ctx = document.getElementById("chart");

if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [{
        label: "Temperature (°C)",
        data: [22, 30, 28, 35, 32],
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true
    }
  });
}