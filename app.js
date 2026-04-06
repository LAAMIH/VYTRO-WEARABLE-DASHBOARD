// Initialize Icons
lucide.createIcons();

// DOM Elements
const views = {
    login: document.getElementById('login-view'),
    app: document.getElementById('app-view')
};

const tabs = {
    dashboard: document.getElementById('tab-dashboard'),
    profile: document.getElementById('tab-profile'),
    faq: document.getElementById('tab-faq')
};

const navBtns = document.querySelectorAll('.nav-btn');

// --- 1. NAVIGATION, VIEWS & AVATAR GENERATION ---

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Process Initials & Name
    const rawName = document.getElementById('username').value.trim();
    if(rawName) {
        document.getElementById('prof-name').innerText = rawName;
        document.getElementById('edit-name').value = rawName;
        
        let initials = rawName.split(' ')
                              .map(n => n[0])
                              .join('')
                              .substring(0, 2)
                              .toUpperCase();
        if(!initials) initials = 'U';
        document.getElementById('avatar-initials').innerText = initials;
    }

    views.login.classList.remove('active');
    setTimeout(() => {
        views.login.classList.add('hidden');
        views.app.classList.remove('hidden');
        requestAnimationFrame(() => {
            views.app.classList.add('active');
        });
    }, 500);
});

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        Object.values(tabs).forEach(tab => {
            tab.classList.add('hidden');
            tab.style.opacity = '0';
        });
        
        const target = btn.getAttribute('data-target');
        const activeTab = tabs[target];
        activeTab.classList.remove('hidden');
        requestAnimationFrame(() => {
            activeTab.style.opacity = '1';
        });
    });
});

// --- 2. FAQ ACCORDION & SEARCH ---
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => item.style.display = 'none');

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

document.getElementById('faq-search').addEventListener('keyup', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if(q.length === 0) {
        faqItems.forEach(item => item.style.display = 'none');
        return;
    }
    const terms = q.split(' ').filter(t => t.length > 0);
    
    faqItems.forEach(item => {
        const keywordsStr = item.getAttribute('data-keywords');
        const titleStr = item.querySelector('.q-left span').innerText.toLowerCase(); 
        const searchSpace = keywordsStr + " " + titleStr;
        
        // Narrow down: ALL terms entered must be found in the search space
        const matches = terms.every(term => searchSpace.includes(term));
        
        item.style.display = matches ? 'block' : 'none';
        item.classList.remove('active'); 
    });
});

// --- 3. CLOCK ---
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}, 1000);

// --- 4. PROFILE EDITING ---
const profileContainer = document.getElementById('profile-container');
const editBtn = document.getElementById('profile-edit-toggle');
const saveBtn = document.getElementById('profile-save-btn');
let isEditing = false;

editBtn.addEventListener('click', () => {
    isEditing = true;
    profileContainer.classList.add('edit-mode');
    saveBtn.style.display = 'block';
    editBtn.style.display = 'none';
});

saveBtn.addEventListener('click', () => {
    const hInput = document.getElementById('edit-height');
    const wInput = document.getElementById('edit-weight');
    
    if(hInput.value && (hInput.value < 50 || hInput.value > 250)) { showToast("Height must be between 50 and 250 cm", "warning"); return; }
    if(wInput.value && (wInput.value < 5 || wInput.value > 300)) { showToast("Weight must be between 5 and 300 kg", "warning"); return; }
    
    const phoneVal = document.getElementById('edit-doc-phone').value;
    if(phoneVal && phoneVal.length !== 10) { showToast("Doctor Phone must be exactly 10 digits", "warning"); return; }
    
    const em1PhoneVal = document.getElementById('edit-em1-phone').value;
    if(em1PhoneVal && em1PhoneVal.length !== 10) { showToast("Emergency Contact 1 Phone must be exactly 10 digits", "warning"); return; }

    const em2PhoneVal = document.getElementById('edit-em2-phone').value;
    if(em2PhoneVal && em2PhoneVal.length !== 10) { showToast("Emergency Contact 2 Phone must be exactly 10 digits", "warning"); return; }

    const em3PhoneVal = document.getElementById('edit-em3-phone').value;
    if(em3PhoneVal && em3PhoneVal.length !== 10) { showToast("Emergency Contact 3 Phone must be exactly 10 digits", "warning"); return; }

    isEditing = false;
    profileContainer.classList.remove('edit-mode');
    saveBtn.style.display = 'none';
    editBtn.style.display = 'inline-flex';
    
    document.getElementById('prof-name').innerText = document.getElementById('edit-name').value || '--';
    document.getElementById('prof-age').innerText = document.getElementById('edit-age').value || '--';
    
    const h = hInput.value;
    const w = wInput.value;
    document.getElementById('prof-height').innerText = h || '--';
    document.getElementById('prof-weight').innerText = w || '--';
    
    // BMI Calculation
    if(h && w) {
        let heightM = h / 100;
        let bmi = (w / (heightM * heightM)).toFixed(1);
        document.getElementById('prof-bmi').innerText = bmi;
        
        let statusEl = document.getElementById('prof-bmi-status');
        statusEl.style.display = 'inline-block';
        if(bmi < 18.5) { statusEl.innerText = "Underweight"; statusEl.style.color = "var(--accent-orange)"; }
        else if(bmi >= 18.5 && bmi <= 24.9) { statusEl.innerText = "Normal"; statusEl.style.color = "var(--accent-green)"; }
        else if(bmi >= 25 && bmi <= 29.9) { statusEl.innerText = "Overweight"; statusEl.style.color = "var(--accent-orange)"; }
        else { statusEl.innerText = "Obese"; statusEl.style.color = "var(--accent-red)"; }
    } else {
        document.getElementById('prof-bmi').innerText = '--';
        document.getElementById('prof-bmi-status').style.display = 'none';
    }

    document.getElementById('prof-blood').innerText = document.getElementById('edit-blood').value || 'Unset';
    document.getElementById('prof-conditions').innerText = document.getElementById('edit-conditions').value || 'None';
    
    // Contacts Updates
    const dName = document.getElementById('edit-doc-name').value || 'Unset';
    document.getElementById('prof-doc-name').innerText = dName;
    document.getElementById('call-doc-name').innerText = dName;
    document.getElementById('prof-doc-phone').innerText = phoneVal || '--';
    
    // Emergency 1
    document.getElementById('prof-em1-name').innerText = document.getElementById('edit-em1-name').value || 'Unset';
    document.getElementById('prof-em1-rel').innerText = document.getElementById('edit-em1-rel').value || '--';
    document.getElementById('prof-em1-phone').innerText = em1PhoneVal || '--';

    // Emergency 2
    document.getElementById('prof-em2-name').innerText = document.getElementById('edit-em2-name').value || 'Unset';
    document.getElementById('prof-em2-rel').innerText = document.getElementById('edit-em2-rel').value || '--';
    document.getElementById('prof-em2-phone').innerText = em2PhoneVal || '--';

    // Emergency 3
    document.getElementById('prof-em3-name').innerText = document.getElementById('edit-em3-name').value || 'Unset';
    document.getElementById('prof-em3-rel').innerText = document.getElementById('edit-em3-rel').value || '--';
    document.getElementById('prof-em3-phone').innerText = em3PhoneVal || '--';
    
    const tagsDiv = document.getElementById('prof-allergies-tags');
    tagsDiv.innerHTML = '';
    const rawTags = document.getElementById('edit-allergies').value.split(',');
    let hasTags = false;
    rawTags.forEach(t => {
        let clean = t.trim();
        if(clean) {
            hasTags = true;
            let sp = document.createElement('span');
            sp.className = 'tag warning';
            sp.innerText = clean;
            tagsDiv.appendChild(sp);
        }
    });
    if(!hasTags) {
        let sp = document.createElement('span');
        sp.className = 'tag';
        sp.innerText = 'None';
        tagsDiv.appendChild(sp);
    }

    showToast('Profile updated locally', 'info');
});


// --- 5. DATA ENGINE (MODAL & HARDWARE) ---

let hrChart;
const maxDataPoints = 20;
let hrData = Array(maxDataPoints).fill(null);
let isSosActive = false;

function initChart() {
    const ctx = document.getElementById('chart-hr').getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(255, 51, 102, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 51, 102, 0.0)');

    hrChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(maxDataPoints).fill(''),
            datasets: [{
                data: hrData,
                borderColor: '#FF3366',
                borderWidth: 2,
                backgroundColor: gradient,
                fill: true,
                pointRadius: 0,
                tension: 0.4,
                spanGaps: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
                x: { display: false },
                y: { display: false, min: 40, max: 180 }
            }
        }
    });
}
initChart();

function updateDashboard(vitals) {
    if(isSosActive) return;

    document.getElementById('val-hr').innerText = Math.round(vitals.hr);
    document.getElementById('val-o2').innerText = Math.round(vitals.o2);
    document.getElementById('val-temp').innerText = parseFloat(vitals.temp).toFixed(1);
    
    const stressStr = vitals.stress < 30 ? 'Low' : vitals.stress < 70 ? 'Med' : 'High';
    document.getElementById('val-stress').innerText = stressStr;
    document.getElementById('bar-stress').style.width = `${vitals.stress}%`;

    hrData.push(vitals.hr);
    hrData.shift();
    hrChart.update();

    evaluateVitals(vitals);
}

function evaluateVitals(vitals) {
    const hrCard = document.getElementById('card-hr');
    if (vitals.hr > 120 || vitals.hr < 50) hrCard.classList.add('warning-state');
    else hrCard.classList.remove('warning-state');

    const tempCard = document.getElementById('card-temp');
    if (vitals.temp > 38.0 || vitals.temp < 35.0) tempCard.classList.add('warning-state');
    else tempCard.classList.remove('warning-state');

    const o2Card = document.getElementById('card-o2');
    if (vitals.o2 < 92) o2Card.classList.add('warning-state');
    else o2Card.classList.remove('warning-state');

    const fallStatus = document.getElementById('fall-status');
    const fallIcon = document.getElementById('fall-icon');
    const fallText = fallStatus.querySelector('p');
    
    if (vitals.fall) {
        fallStatus.classList.add('alert');
        fallIcon.setAttribute('data-lucide', 'alert-triangle');
        lucide.createIcons();
        fallText.innerText = "IMPACT DETECTED! Processing severity...";
        
        let isAbnormal = (vitals.hr > 120 || vitals.hr < 50 || vitals.temp > 38.0 || vitals.temp < 35.0 || vitals.o2 < 92);
        if (isAbnormal) {
            triggerSOS("Fall Detected + Abnormal Vitals");
        } else {
            triggerSOS("Fall Detected"); 
        }
    } else {
        fallStatus.classList.remove('alert');
        fallIcon.setAttribute('data-lucide', 'shield-check');
        lucide.createIcons();
        fallText.innerText = "No sudden impacts or falls detected.";
    }

    if (vitals.hr > 140 && vitals.o2 < 90) {
         triggerSOS("Critical Tachycardia & Hypoxia Detected");
    }
}

// --- 6. FLOATING ACTION BUTTON CALL MODALS & TOASTS ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = type === 'warning' ? 'alert-circle' : type === 'danger' ? 'alert-triangle' : 'info';
    toast.innerHTML = `<i data-lucide="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

const callDocModal = document.getElementById('call-doc-modal');
const callEmModal = document.getElementById('call-em-modal');
let simulatedCallTimeout = null;

document.getElementById('fab-doctor-dial').addEventListener('click', () => {
    const docName = document.getElementById('prof-doc-name').innerText;
    if(docName === 'Unset' || docName === '--') {
        showToast('No doctor registered. Please update your profile.', 'warning');
        return;
    }
    
    callDocModal.classList.remove('hidden');
    simulatedCallTimeout = setTimeout(() => { showToast('Doctor did not answer. Leave a message.', 'warning'); callDocModal.classList.add('hidden'); }, 8000);
});
document.getElementById('end-call-btn').addEventListener('click', () => {
    clearTimeout(simulatedCallTimeout);
    callDocModal.classList.add('hidden');
});

document.getElementById('fab-emergency-dial').addEventListener('click', () => {
    callEmModal.classList.remove('hidden');
    simulatedCallTimeout = setTimeout(() => { showToast('Emergency Dispatch Connected', 'danger'); callEmModal.classList.add('hidden'); }, 5000);
});
document.getElementById('end-em-btn').addEventListener('click', () => {
    clearTimeout(simulatedCallTimeout);
    callEmModal.classList.add('hidden');
    showToast('Emergency call aborted', 'info');
});

const sosModal = document.getElementById('sos-modal');
document.getElementById('cancel-sos').addEventListener('click', () => {
    sosModal.classList.add('hidden');
    isSosActive = false;
    showToast('SOS Aborted by User', 'info');
});

function triggerSOS(reason) {
    if (isSosActive) return;
    isSosActive = true;
    document.getElementById('sos-message').innerText = reason;
    
    // Dynamic contacting list
    const docName = document.getElementById('prof-doc-name').innerText;
    const em1Name = document.getElementById('prof-em1-name').innerText;
    const em2Name = document.getElementById('prof-em2-name').innerText;
    const em3Name = document.getElementById('prof-em3-name').innerText;

    let alertQueue = ['Nearest Hospital'];
    if (docName !== 'Unset' && docName !== '--') alertQueue.push(docName);
    if (em1Name !== 'Unset' && em1Name !== '--') alertQueue.push(em1Name);
    if (em2Name !== 'Unset' && em2Name !== '--') alertQueue.push(em2Name);
    if (em3Name !== 'Unset' && em3Name !== '--') alertQueue.push(em3Name);
    
    document.getElementById('sos-alerting-text').innerText = `Contacting: ${alertQueue.join(', ')}...`;
    
    sosModal.classList.remove('hidden');
}

// --- 7. MANUAL SIMULATION OVERLAY ---
const simBtn = document.getElementById('sim-btn');
const simModal = document.getElementById('sim-modal');
const simClose = document.getElementById('sim-close-btn');

const sHr = document.getElementById('sim-hr');
const sO2 = document.getElementById('sim-o2');
const sTemp = document.getElementById('sim-temp');
const sStress = document.getElementById('sim-stress');
let isSimFall = false;

sHr.oninput = () => document.getElementById('sim-hr-val').innerText = sHr.value;
sO2.oninput = () => document.getElementById('sim-o2-val').innerText = sO2.value;
sTemp.oninput = () => document.getElementById('sim-temp-val').innerText = sTemp.value;
sStress.oninput = () => document.getElementById('sim-stress-val').innerText = sStress.value;

document.getElementById('sim-fall-btn').onclick = (e) => {
    isSimFall = !isSimFall;
    if(isSimFall) {
        e.target.style.background = 'white';
        e.target.style.color = 'var(--accent-red)';
        e.target.innerText = 'Fall Active';
    } else {
        e.target.style.background = 'var(--accent-red)';
        e.target.style.color = 'white';
        e.target.innerText = 'Simulate Fall';
    }
}

document.getElementById('sim-normal-btn').addEventListener('click', () => {
    sHr.value = 72;
    sO2.value = 98;
    sTemp.value = 36.6;
    sStress.value = 20;
    
    document.getElementById('sim-hr-val').innerText = 72;
    document.getElementById('sim-o2-val').innerText = 98;
    document.getElementById('sim-temp-val').innerText = 36.6;
    document.getElementById('sim-stress-val').innerText = 20;

    isSimFall = false;
    const fb = document.getElementById('sim-fall-btn');
    fb.style.background = 'var(--accent-red)';
    fb.style.color = 'white';
    fb.innerText = 'Simulate Fall';

    updateDashboard({ hr: 72, o2: 98, temp: 36.6, stress: 20, fall: false });
    showToast('All manually simulated vitals set back to normal.', 'info');
});

simBtn.addEventListener('click', () => { simModal.classList.remove('hidden'); });
simClose.addEventListener('click', () => { simModal.classList.add('hidden'); });

document.getElementById('sim-push-btn').addEventListener('click', () => {
    document.getElementById('status-text').innerHTML = `<span class="dot" style="background:var(--accent-blue)"></span> Manual Override Active`;
    
    updateDashboard({
        hr: parseFloat(sHr.value), o2: parseFloat(sO2.value),
        temp: parseFloat(sTemp.value), stress: parseFloat(sStress.value), fall: isSimFall
    });
    showToast('Manual data payload pushed successfully', 'info');
    simModal.classList.add('hidden');
    
    if(isSimFall) {
        isSimFall = false;
        const fb = document.getElementById('sim-fall-btn');
        fb.style.background = 'var(--accent-red)';
        fb.style.color = 'white';
        fb.innerText = 'Simulate Fall';
        setTimeout(()=> {
            updateDashboard({
                hr: parseFloat(sHr.value), o2: parseFloat(sO2.value), temp: parseFloat(sTemp.value),
                stress: parseFloat(sStress.value), fall: false
            });
        }, 5000);
    }
});


// --- 8. HARDWARE WEB SERIAL (USB) ---
document.getElementById('connect-btn').addEventListener('click', async () => {
    if (!('serial' in navigator)) {
        showToast('Web Serial API is not supported in this browser.', 'danger');
        return;
    }
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        const statusText = document.getElementById('status-text');
        statusText.innerHTML = `<span class="dot"></span> Hardware Connected via USB`;
        statusText.className = "status-indicator connected";
        showToast('Connected to ESP32 Wearable successfully', 'info');

        const textDecoder = new TextDecoderStream();
        port.readable.pipeTo(textDecoder.writable);
        const reader = textDecoder.readable.getReader();

        let buffer = "";
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += value;
            let lines = buffer.split('\n');
            buffer = lines.pop();
            for(let line of lines) {
                line = line.trim();
                if(line) {
                    try {
                        const data = JSON.parse(line);
                        updateDashboard(data);
                    } catch(e) { }
                }
            }
        }
    } catch (e) {
        showToast('USB Connection failed or aborted.', 'warning');
    }
});

// --- 9. HARDWARE WEB BLUETOOTH (BLE) ---
document.getElementById('ble-btn').addEventListener('click', async () => {
    if (!('bluetooth' in navigator)) {
        showToast('Web Bluetooth API is not supported in this browser.', 'danger');
        return;
    }
    try {
        showToast('Requesting BLE Device...', 'info');
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e'] // Standard Nordic UART Service for ESP32
        });
        
        showToast(`Connecting to ${device.name || 'Device'}...`, 'info');
        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
        
        // Listen to the TX characteristic from the ESP32
        const characteristic = await service.getCharacteristic('6e400003-b5a3-f393-e0a9-e50e24dcca9e');
        await characteristic.startNotifications();
        
        const statusText = document.getElementById('status-text');
        statusText.innerHTML = `<span class="dot"></span> Connected via Bluetooth`;
        statusText.className = "status-indicator connected";
        showToast('Bluetooth Connection Established!', 'info');

        let bleBuffer = "";
        characteristic.addEventListener('characteristicvaluechanged', (event) => {
            const value = new TextDecoder().decode(event.target.value);
            bleBuffer += value;
            let lines = bleBuffer.split('\n');
            bleBuffer = lines.pop(); 
            for(let line of lines) {
                line = line.trim();
                if(line) {
                    try {
                        const data = JSON.parse(line);
                        updateDashboard(data);
                    } catch(e) { }
                }
            }
        });
        
        device.addEventListener('gattserverdisconnected', () => {
             const statusText = document.getElementById('status-text');
             statusText.innerHTML = `<span class="dot"></span> Awaiting Data...`;
             statusText.className = "status-indicator disconnected";
             showToast('Bluetooth device disconnected', 'warning');
        });

    } catch (error) {
        console.error(error);
        if(!error.toString().includes("User cancelled")) {
            showToast('BLE Connection Failed. Ensure ESP32 uses Nordic UART Service.', 'warning');
        }
    }
});
