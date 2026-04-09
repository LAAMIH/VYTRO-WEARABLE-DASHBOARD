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

const eliteDoctors = [
    // Cardiology
    { id: 1, name: "Dr. Barry Allen", specialty: "Cardiology", bio: "Renowned for rapid-response cardiac telemetry and ultra-speed rhythmic analysis.", exp: "12 Years" },
    { id: 2, name: "Dr. Tony Stark", specialty: "Cardiology", bio: "Leading researcher in arc-reactor cardiac sync and biomechanical heart health.", exp: "15 Years" },
    { id: 3, name: "Dr. Clark Kent", specialty: "Cardiology", bio: "Exceptional diagnostic capability through advanced structural pulse monitoring.", exp: "10 Years" },
    { id: 4, name: "Dr. Bruce Lee", specialty: "Cardiology", bio: "Specialist in fluid rhythmic synchronization and metabolic cardiac efficiency.", exp: "20 Years" },
    { id: 5, name: "Dr. Finn Mertens", specialty: "Cardiology", bio: "Expert in heroic-scale endurance analysis and adventure-ready vitals tracking.", exp: "8 Years" },
    // Gastroenterology
    { id: 6, name: "Dr. Jake Dog", specialty: "Gastroenterology", bio: "Specialist in elastic gut monitoring and high-capacity digestive telemetry.", exp: "14 Years" },
    { id: 7, name: "Dr. Rigby Racoon", specialty: "Gastroenterology", bio: "Expert in snack-induced metabolic anomalies and rapid calorie processing.", exp: "7 Years" },
    { id: 8, name: "Dr. Mordecai Blue", specialty: "Gastroenterology", bio: "Specialist in balanced dietary diagnostics and chronic caffeine sync.", exp: "9 Years" },
    { id: 9, name: "Dr. Peter Griffin", specialty: "Gastroenterology", bio: "Researcher in high-volume nutritional intake and laughter-based gut health.", exp: "18 Years" },
    { id: 10, name: "Dr. Homer Simpson", specialty: "Gastroenterology", bio: "Leading authority on donut-linked glucose spikes and metabolic resilience.", exp: "25 Years" },
    // E.N.T
    { id: 11, name: "Dr. Ben Tennyson", specialty: "ENT", bio: "Specialist in multi-form respiratory analysis and omni-vocal diagnostics.", exp: "10 Years" },
    { id: 12, name: "Dr. Sterling Archer", specialty: "ENT", bio: "Expert in tinnitus management and high-decibel auditory protection.", exp: "12 Years" },
    { id: 13, name: "Dr. Jack Sparrow", specialty: "ENT", bio: "Vocal health specialist for high-seas communication and rum-based sinus care.", exp: "20 Years" },
    { id: 14, name: "Dr. Bugs Bunny", specialty: "ENT", bio: "Specialist in rapid carrot-based auditory health and tunnel-sync diagnostics.", exp: "30 Years" },
    { id: 15, name: "Dr. Daffy Duck", specialty: "ENT", bio: "Expert in speech pattern analytics and bill-based respiratory monitoring.", exp: "30 Years" },
    // Neurology
    { id: 16, name: "Dr. Bruce Wayne", specialty: "Neurology", bio: "World-class expert in trauma-based neuro-response and tactical brain health.", exp: "22 Years" },
    { id: 17, name: "Dr. Sherlock Holmes", specialty: "Neurology", bio: "Precision expert in cognitive pattern recognition and deductive brain mapping.", exp: "15 Years" },
    { id: 18, name: "Dr. Tony Soprano", specialty: "Neurology", bio: "Specialist in stress-induced panic-neuralgy and family-linked anxiety sync.", exp: "12 Years" },
    { id: 19, name: "Dr. Rick Sanchez", specialty: "Neurology", bio: "Interdimensional authority on brain-computer interfaces and multiverse neuro-vitals.", exp: "40 Years" },
    { id: 20, name: "Dr. Walter White", specialty: "Neurology", bio: "Expert in chemical-neurotransmission and oncology-linked brain monitoring.", exp: "18 Years" },
    // Dermatology
    { id: 21, name: "Dr. Norrin Radd", specialty: "Dermatology", bio: "Elite expert in cosmic-scale dermal shielding and silver-skin resilience.", exp: "100+ Years" },
    { id: 22, name: "Dr. Pamela Isley", specialty: "Dermatology", bio: "Specialist in plant-derived dermal treatments and pheromonal health.", exp: "14 Years" },
    { id: 23, name: "Dr. Wade Wilson", specialty: "Dermatology", bio: "Expert in rapid dermal regeneration and extreme scarring management.", exp: "15 Years" },
    { id: 24, name: "Dr. Logan Howlett", specialty: "Dermatology", bio: "Specialist in adamantium-link tissue health and hyper-regenerative skin care.", exp: "150 Years" },
    { id: 25, name: "Dr. Raven Darkhölme", specialty: "Dermatology", bio: "Authority on cellular shape-shifting and adaptive dermal pigmentation.", exp: "60 Years" }
];

let hiredDoctors = [];

function establishSession(rawName, tier = 'free') {
    document.body.setAttribute('data-tab', 'dashboard');
    document.body.classList.remove('tier-premium');
    if(tier === 'premium') document.body.classList.add('tier-premium');

    if(tier === 'premium') {
        refreshDoctorSlots();
        document.getElementById('premium-doc-area').style.display = 'block';
        document.getElementById('premium-dashboard-header').style.display = 'block';
        updateDashboardCareTeam();
    } else {
        document.getElementById('premium-doc-area').style.display = 'none';
        document.getElementById('premium-dashboard-header').style.display = 'none';
    }

    document.getElementById('prof-name').innerText = rawName;
    document.getElementById('edit-name').value = rawName;
    
    let initials = rawName.split(' ')
                          .map(n => n[0])
                          .join('')
                          .substring(0, 2)
                          .toUpperCase();
    if(!initials) initials = 'U';
    document.getElementById('avatar-initials').innerText = initials;

    views.login.classList.remove('active');

    // Reset all tabs
    Object.values(tabs).forEach(t => {
        if(t) t.classList.add('hidden');
    });
    const startupTab = 'dashboard';
    if(tabs[startupTab]) tabs[startupTab].classList.remove('hidden');

    // Update nav buttons
    navBtns.forEach(b => {
        b.classList.remove('active');
        if(b.dataset.target === startupTab) b.classList.add('active');
    });

    setTimeout(() => {
        views.login.classList.add('hidden');
        views.app.classList.remove('hidden');
        requestAnimationFrame(() => {
            views.app.classList.add('active');
        });
    }, 500);
}

const healthQuotes = [
    "\"The greatest wealth is health.\" — Virgil",
    "\"Let food be thy medicine and medicine be thy food.\" — Hippocrates",
    "\"To keep the body in good health is a duty.\" — Buddha",
    "\"An ounce of prevention is worth a pound of cure.\" — Benjamin Franklin",
    "\"Health is a crown that the healthy wear, but only the sick can see.\" — Imam Shafi'i",
    "\"Take care of your body. It's the only place you have to live.\" — Jim Rohn",
    "\"A fit body, a calm mind, a house full of love. These things cannot be bought.\" — Naval Ravikant",
    "\"He who has health, has hope; and he who has hope, has everything.\" — Thomas Carlyle",
    "\"Physical fitness is the first requisite of happiness.\" — Joseph Pilates",
    "\"It is health that is real wealth and not pieces of gold and silver.\" — Mahatma Gandhi",
    "\"The human body has been designed to resist an infinite number of changes and attacks brought about by its environment.\" — Dr. Hans Kraus",
    "\"Sleep is that golden chain that ties health and our bodies together.\" — Thomas Dekker",
    "\"Every human being is the author of his own health or disease.\" — Swami Sivananda",
    "\"Walking is man's best medicine.\" — Hippocrates",
    "\"To insure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.\" — William Londen"
];

// Check Session on Load
window.addEventListener('DOMContentLoaded', () => {
    // Generate Moving Ambient Particles
    const pContainer = document.createElement('div');
    pContainer.className = 'particles-bg';
    document.body.appendChild(pContainer);
    const colors = ['', 'red', 'blue', '', ''];
    for(let i=0; i<60; i++) {
        const p = document.createElement('div');
        p.className = 'particle ' + colors[Math.floor(Math.random() * colors.length)];
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * -30) + 's';
        pContainer.appendChild(p);
    }

    // Inject Random Quote
    const quoteEl = document.getElementById('health-quote');
    if(quoteEl) {
        quoteEl.innerText = healthQuotes[Math.floor(Math.random() * healthQuotes.length)];
    }

    const activeSession = sessionStorage.getItem('vytroUser');
    const activeTier = sessionStorage.getItem('vytroTier') || 'free';
    if (activeSession) {
        document.documentElement.classList.add('session-active');
        establishSession(activeSession, activeTier);
    } else {
        views.login.classList.add('active');
    }
});

// Select Role -> Step 2
let selectedRole = '';
let selectedTier = '';

document.querySelectorAll('.select-role-btn').forEach(card => {
    card.addEventListener('click', () => {
        selectedRole = card.dataset.role;
        selectedTier = card.dataset.tier;
        
        document.getElementById('login-step-selection').classList.add('hidden');
        document.getElementById('login-step-auth').classList.remove('hidden');
        document.getElementById('auth-role-title').innerText = `${selectedRole} Authentication`;
        document.getElementById('auth-username').value = ''; // No default values
        document.getElementById('auth-password').value = '';
        sessionStorage.setItem('vytroRole', selectedTier); // Reusing tier as role for now
    });
});

document.getElementById('back-to-roles').addEventListener('click', () => {
    document.getElementById('login-step-selection').classList.remove('hidden');
    document.getElementById('login-step-auth').classList.add('hidden');
});

document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('auth-username').value.trim();
    if(name) {
        sessionStorage.setItem('vytroUser', name);
        sessionStorage.setItem('vytroTier', selectedTier);
        establishSession(name, selectedTier);
    }
});

// Logout handling
const logoutBtn = document.getElementById('logout-btn');
const logoutModal = document.getElementById('logout-modal');
const confirmLogout = document.getElementById('confirm-logout-btn');
const cancelLogout = document.getElementById('cancel-logout-btn');

logoutBtn.addEventListener('click', () => {
    logoutModal.classList.remove('hidden');
});

cancelLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logoutModal.classList.add('hidden');
});

confirmLogout.addEventListener('click', () => {
    sessionStorage.removeItem('vytroUser');
    sessionStorage.removeItem('vytroTier');
    hiredDoctors = [];
    
    // Reset view
    logoutModal.classList.add('hidden');
    document.documentElement.classList.remove('session-active');
    document.body.classList.remove('tier-premium');
    document.body.setAttribute('data-tab', 'login');
    
    // Reset Login Steps
    document.getElementById('login-step-selection').classList.remove('hidden');
    document.getElementById('login-step-auth').classList.add('hidden');
    
    views.app.classList.remove('active');
    
    setTimeout(() => {
        views.app.classList.add('hidden');
        views.login.classList.remove('hidden');
        
        // Cycle Quote on Logout
        const quoteEl = document.getElementById('health-quote');
        if(quoteEl) {
            quoteEl.innerText = healthQuotes[Math.floor(Math.random() * healthQuotes.length)];
        }
        
        requestAnimationFrame(() => {
            views.login.classList.add('active');
        });
    }, 100);
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
        document.body.setAttribute('data-tab', target);
        
        const activeTab = tabs[target];
        activeTab.classList.remove('hidden');
        requestAnimationFrame(() => {
            activeTab.style.opacity = '1';
        });
    });
});

// --- 2. FAQ ACCORDION & SEARCH ---
const faqListContainer = document.getElementById('faq-list');

function renderSymptoms() {
    faqListContainer.innerHTML = '';
    symptomsDB.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.style.display = 'none'; // Hidden until searched
        div.setAttribute('data-keywords', item.keywords.toLowerCase());
        
        let answerHtml = '';
        if (item.type === 'warning') {
            answerHtml = `<div class="faq-answer"><p><strong style="color:var(--accent-red); font-size: 1.2rem;">${item.criticalWarning || 'CRITICAL WARNING!'}</strong></p></div>`;
        } else {
            let steps = '';
            if (item.recipeSteps && item.recipeSteps.length > 0) {
                steps = `<ul>${item.recipeSteps.map(step => `<li>${step.replace('Instructions:', '<strong>Instructions:</strong>')}</li>`).join('')}</ul>`;
            }
            answerHtml = `
                <div class="faq-answer">
                    <h4>Immediate Action</h4>
                    <p>${item.action}</p>
                    ${item.recipeTitle ? `<h4>Recipe: ${item.recipeTitle}</h4>` : ''}
                    ${steps}
                </div>
            `;
        }

        div.innerHTML = `
            <button class="faq-question">
                <div class="q-left">
                    <i data-lucide="${item.icon}" class="${item.color}"></i>
                    <span class="faq-title">${item.title}</span>
                </div>
                <i data-lucide="chevron-down" class="chevron"></i>
            </button>
            ${answerHtml}
        `;
        faqListContainer.appendChild(div);
    });
    
    // Re-initialize lucide icons for dynamically added elements
    lucide.createIcons();

    // Attach accordion listeners
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;
            parent.classList.toggle('active');
        });
    });
}

// Initial Render
if (typeof symptomsDB !== 'undefined') {
    renderSymptoms();
}

// --- 3. PREMIUM DOCTOR MARKETPLACE & SLOTS ---
const slotsContainer = document.getElementById('doctor-slots-container');
const doctorListEl = document.getElementById('doctor-list');
const marketplaceModal = document.getElementById('marketplace-modal');
const openMarketBtn = document.getElementById('open-marketplace-btn');
const closeMarketBtn = document.getElementById('close-marketplace-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

function refreshDoctorSlots() {
    slotsContainer.innerHTML = '';
    const slots = 3;
    const slotsLeft = slots - hiredDoctors.length;
    document.getElementById('doc-slots-left').innerText = `${slotsLeft} Slot${slotsLeft !== 1 ? 's' : ''} Available`;

    for (let i = 0; i < slots; i++) {
        const doc = hiredDoctors[i];
        const card = document.createElement('div');
        card.className = `doctor-slot-card ${doc ? 'filled' : ''}`;
        
        if (doc) {
            card.innerHTML = `
                <i data-lucide="award"></i>
                <h4>${doc.name}</h4>
                <p>${doc.specialty}</p>
                <button class="btn btn-outline mt-1" style="font-size: 0.7rem; padding: 4px 8px;" onclick="fireDoctor(${doc.id})">Remove</button>
            `;
        } else {
            card.innerHTML = `
                <i data-lucide="user-plus"></i>
                <h4>Empty Slot</h4>
                <p>Recruit Specialist</p>
            `;
        }
        slotsContainer.appendChild(card);
    }
    lucide.createIcons();
    updateDashboardCareTeam();
}

function updateDashboardCareTeam() {
    const container = document.getElementById('mini-care-team');
    if(!container) return;
    container.innerHTML = '';
    
    if(hiredDoctors.length === 0) {
        container.innerHTML = '<span style="font-size: 0.8rem; opacity: 0.5;">No specialists recruited</span>';
        return;
    }

    hiredDoctors.forEach(doc => {
        const dot = document.createElement('div');
        dot.className = 'tag';
        dot.style.background = 'rgba(212, 175, 55, 0.2)';
        dot.style.color = 'var(--accent-primary)';
        dot.style.borderColor = 'rgba(212, 175, 55, 0.4)';
        dot.innerHTML = `<i data-lucide="shield-check" style="width:12px; height:12px; margin-right:4px;"></i> ${doc.name.split(' ').pop()}`;
        container.appendChild(dot);
    });
    lucide.createIcons();
}

function renderMarketplace(category = 'all') {
    doctorListEl.innerHTML = '';
    const filtered = category === 'all' ? eliteDoctors : eliteDoctors.filter(d => d.specialty === category);

    filtered.forEach(doc => {
        const isHired = hiredDoctors.find(h => h.id === doc.id);
        const card = document.createElement('div');
        card.className = 'doc-card-premium';
        card.innerHTML = `
            <div class="doc-info">
                <div class="specialty">${doc.specialty}</div>
                <h4>${doc.name}</h4>
                <p style="font-size: 0.8rem; margin-bottom: 0.5rem; opacity: 0.8;">Experience: ${doc.exp}</p>
                <p class="bio">${doc.bio}</p>
            </div>
            <button class="btn ${isHired ? 'btn-outline' : 'btn-primary'} w-100 hire-btn" 
                ${isHired ? 'disabled' : ''} 
                onclick="hireDoctor(${doc.id})">
                ${isHired ? 'Already Recruited' : 'Recruit Specialist'}
            </button>
        `;
        doctorListEl.appendChild(card);
    });
}

window.hireDoctor = (id) => {
    if (hiredDoctors.length >= 3) {
        showToast("Maximum elite slots reached!", "error");
        return;
    }
    const doc = eliteDoctors.find(d => d.id === id);
    if (doc) {
        hiredDoctors.push(doc);
        showToast(`${doc.name} has been added to your care team.`, "success");
        refreshDoctorSlots();
        renderMarketplace(document.querySelector('.category-btn.active').dataset.cat);
    }
};

window.fireDoctor = (id) => {
    hiredDoctors = hiredDoctors.filter(d => d.id !== id);
    refreshDoctorSlots();
    renderMarketplace(document.querySelector('.category-btn.active').dataset.cat);
};

window.openMarketplace = (cat = 'all') => {
    marketplaceModal.classList.remove('hidden');
    marketplaceModal.style.display = 'flex';
    
    categoryBtns.forEach(btn => {
        if (btn.dataset.cat === cat) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    renderMarketplace(cat);
};

if (closeMarketBtn) {
    closeMarketBtn.addEventListener('click', () => {
        marketplaceModal.classList.add('hidden');
        marketplaceModal.style.display = 'none';
    });
}

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMarketplace(btn.dataset.cat);
    });
});

document.getElementById('faq-search').addEventListener('keyup', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const items = document.querySelectorAll('.faq-item');
    
    if(q.length === 0) {
        items.forEach(item => item.style.display = 'none');
        return;
    }
    const terms = q.split(' ').filter(t => t.length > 0);
    
    items.forEach(item => {
        const keywordsStr = item.getAttribute('data-keywords');
        const titleStr = item.querySelector('.faq-title').innerText.toLowerCase(); 
        const searchSpace = keywordsStr + " " + titleStr;
        
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

document.getElementById('sim-stop-btn').addEventListener('click', () => {
    document.getElementById('val-hr').innerText = '--';
    document.getElementById('val-o2').innerText = '--';
    document.getElementById('val-temp').innerText = '--';
    document.getElementById('val-stress').innerText = '--';
    document.getElementById('bar-stress').style.width = `0%`;
    
    hrData = Array(maxDataPoints).fill(null);
    hrChart.update();

    document.getElementById('card-hr').classList.remove('warning-state');
    document.getElementById('card-temp').classList.remove('warning-state');
    document.getElementById('card-o2').classList.remove('warning-state');
    
    const fallStatus = document.getElementById('fall-status');
    const fallIcon = document.getElementById('fall-icon');
    fallStatus.classList.remove('alert');
    fallIcon.setAttribute('data-lucide', 'shield-check');
    lucide.createIcons();
    fallStatus.querySelector('p').innerText = "No sudden impacts or falls detected.";
    
    document.getElementById('status-text').innerHTML = `<span class="dot"></span> Awaiting Data...`;
    document.getElementById('status-text').className = "status-indicator disconnected";

    showToast('Simulation stopped. Vitals cleared.', 'info');
    simModal.classList.add('hidden');
});

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
// Navigation Event Listeners
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (!tabs[target]) return;

        // Update Nav
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update Tabs
        Object.values(tabs).forEach(t => {
            if(t) t.classList.add('hidden');
        });
        tabs[target].classList.remove('hidden');
    });
});

lucide.createIcons();
