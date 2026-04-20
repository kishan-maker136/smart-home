// Navigation Logic
function switchPage(pageId, element) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');
    
    if(pageId === 'admin') loadTuples();
}

// Sending data using relative paths (works locally AND on Railway)
async function submitToBackend() {
    const name = document.getElementById('newDevName').value;
    const roomId = document.getElementById('newDevRoom').value;
    const type = document.getElementById('newDevType').value;

    if(!name) return alert("Please enter a device name.");

    try {
        const res = await fetch('/api/add-device', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, roomId, type })
        });

        if(res.ok) {
            alert(`Success! ${name} added.`);
            document.getElementById('newDevName').value = '';
            updateDashboard(); 
        }
    } catch (error) {
        alert("Connection Failed");
    }
}

async function updateDashboard() {
    const res = await fetch('/api/admin/dataset', { headers: { 'admin-auth': 'kishan-secure-2026' } });
    const data = await res.json();
    
    const container = document.getElementById('dashboard-toggles');
    container.innerHTML = data.slice(0, 4).map(dev => `
        <div class="toggle-btn ${dev.status ? 'on' : ''}" onclick="toggleDevice(${dev.device_id}, ${dev.status})">
            ${dev.device_name} <span class="dot"></span>
        </div>
    `).join('');
}

async function toggleDevice(id, status) {
    await fetch('/api/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: status ? 0 : 1 })
    });
    updateDashboard();
}

async function loadTuples() {
    const res = await fetch('/api/admin/dataset', { headers: { 'admin-auth': 'kishan-secure-2026' } });
    const data = await res.json();
    const tableBody = document.getElementById('tuple-body');
    tableBody.innerHTML = data.map(row => `
        <tr>
            <td>${row.device_id}</td>
            <td><b>${row.device_name}</b></td>
            <td>${row.device_type}</td>
            <td><span style="color:${row.status ? '#10b981':'#ef4444'}">${row.status ? '● ON' : '○ OFF'}</span></td>
        </tr>
    `).join('');
}

window.onload = updateDashboard;