
// --- 1. DATA ---
const erpData = [
    {
        title: "Login to ERP",
        category: "Login",
        module: "login",
        path: "https://vision.ieverp.com:8443/ERP/WEB",
        description: "<strong>Process to Access the System:</strong><ol style='margin-left: 20px; margin-top: 8px;'><li>Open the above URL link in your web browser.</li><li>Select / Enter the company name VISIONINFRA LIVE 2526.</li><li>Enter your existing User ID.</li><li>Enter the same password that you use in the current ERP system.</li><li>Click on Login to access the new .NET ERP interface.</li></ol>",
        note: "Remember to use your already existing credentials (Username, Password) to login.",
        imageURL: "Images/login.png"
    },
    {
        title: "Purchase Requisition (PR)",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Purchase → Indent → (Select As per Dept.) → Create",
        description: "<p style='margin-bottom: 12px;'>User will create a Purchase Requisition for required materials or services. Mandatory details such as Item Description, Quantity, Required Date, Department, and Justification must be entered. After submission, the PR will move to the approval workflow.</p><strong>Transition Process (Standard Procedure):</strong><ol style='margin-left: 20px; margin-top: 8px;'><li>Select the Department.</li><li>Select the Document Date.</li><li>Enter the Employee / Operator Name.</li><li>Select the Location / Site Code.</li><li>Enter the CPC correctly as per the actual requirement.</li><li><strong>Narration:</strong> Provide proper justification, spare item life details, and any additional information required for approval. (Maximum 260 characters allowed).</li><li><strong>C-Hook:</strong> Select the required Asset and specify the Project / Site Location address.</li><li>Select the Item Code / Part Code.</li><li><strong>Due Date:</strong> Enter the required date when the material is needed at the site.</li><li><strong>Quantity:</strong> Enter the required quantity.</li><li>Click “+ Add Line Item” to add additional items, if required.</li><li>Click the Save button to record and submit the entry in the system.</li></ol>",
        note: "Ensure the 'Narration' includes the specific Asset Code if the request is for a machine repair to speed up approval.",
        imageURL: "/Images/AssetCode.png"
    },
    {
        title: "Purchase Requisition Grid (Status Tracking)",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Purchase → Indent → (Select As per Dept.)",
        description: "Use this task to record items received at the gate from a vendor before they move to inventory. Ensure delivery quantities match the challan.<br><br><strong>Grid Features:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>This screen provides a grid view of all PR entries.</li><li>Users can Expand / Collapse records to check details.</li><li>Helps in tracking status: Pending, Approved, or Converted to PO.</li></ul><strong>Important Notes:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>The Purchase Grid search option is available on a universal basis for easy data search.</li><li>Expand All / Collapse All options are available as per requirement.</li><li><strong>Status Indicators:</strong><br>– <i>Unposted:</i> Approval Pending<br>– <i>Posted:</i> Approved</li><li>Once the Purchase Order (PO) is created, it will appear in the system grid for tracking.</li><li><strong>Export to Excel:</strong> Data can be exported in Excel format. (Note: Asset Code, Make, and Model details are currently under development).</li></ul>",
        note: "Check the 'Unposted' status daily to ensure your urgent requests aren't stuck waiting for local department head approval.",
        imageURL: "/Images/grid.png"
    },
    {
        title: "Purchase Requisition Approval Screen (Auto-Dash Board)",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Auth Dashboard → Document Auth → (Select As per Dept.)",
        description: "Use this task to record items received at the gate from a vendor before they move to inventory. Ensure delivery quantities match the challan.<br><br><strong>Approval Process:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>Authorized approvers can review PR details.</li><li>Approver may Approve / Reject / Send Back for Correction with remarks.</li><li>Once approved, the PR will be available for Purchase Order creation.</li></ul><strong>Grid Features:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>This screen provides a grid view of all PR entries.</li><li>Users can Expand / Collapse records to check details.</li><li>Helps in tracking status: Pending, Approved, or Converted to PO.</li></ul><strong>Important Notes:</strong><ol style='margin-left: 20px; margin-top: 8px;'><li><strong>System Provisions:</strong> Available options include Send Back, PR Authorization, and PR Print.</li><li><strong>Status Indicators:</strong><br>– <i>Unposted:</i> Approval Pending<br>– <i>Posted:</i> Approved</li><li><strong>Export to Excel:</strong> Data can be exported in Excel format. (Note: Asset Code, Make, and Model details are under development).</li><li><strong>Update:</strong> PR Edit Option at the Approval Level is currently unavailable. We are awaiting a response from the PCSOFT team and will share updates soon.</li></ol>",
        note: "Use the 'Send Back' feature instead of Rejecting if you only need the user to clarify the quantity or CPC code.",
        imageURL: "/Images/authdash2.png"
    },
    {
        title: "Purchase Order Display Grid",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Auth Dashboard → Document Auth → (Select As per Dept.)",
        description: "Use this task to record items received at the gate from a vendor before they move to inventory. Ensure delivery quantities match the challan.<br><br><strong>PO Tracking & Details:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>Displays all Purchase Orders generated against approved PRs.</li><li>Users can view details like Vendor, Item, Quantity, Rate, and Order Status.</li></ul><strong>Approval Process:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>Authorized approvers can review PR details.</li><li>Approver may Approve / Reject / Send Back for Correction with remarks.</li><li>Once approved, the PR will be available for Purchase Order creation.</li></ul><strong>Grid Features:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>The grid displays all Purchase Orders; users can Expand / Collapse records to check details.</li><li><strong>Universal Search:</strong> A search provision is available to filter data as per requirements.</li><li>Helps in tracking status: Pending, Approved, or Converted to PO.</li></ul><strong>Important Notes:</strong><ol style='margin-left: 20px; margin-top: 8px;'><li><strong>System Provisions:</strong> Available options include Send Back, PR Authorization, and PR Print.</li><li><strong>Status Indicators:</strong><br>– <i>Unposted:</i> Approval Pending<br>– <i>Posted:</i> Approved</li><li><strong>Development Status:</strong> PR Type–wise grids and full Excel export details (Asset Code, Make, Model) are currently under process and will be available soon.</li><li><strong>PR Edit Update:</strong> PR Edit Option at the Approval Level is currently unavailable while we await a response from the PCSOFT team.</li></ol>",
        note: "You can use the 'Universal Search' to filter by Vendor Name to see all open orders currently out for delivery.",
        imageURL: "Images/pogrid2.png"
    },
    {
        title: "Gate Entry",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Store → Gate Entry",
        description: "When material arrives at the site, the Gate Entry must be created in the system. Required details include PO Number, Vendor Name, Vehicle Details, Material Description, and Quantity received.<br><br><strong>Gate Entry Transition Process:</strong><ol style='margin-left: 20px; margin-top: 8px;'><li><strong>Document Details:</strong> Select the Department / Document Series and the Date as per the process date.</li><li><strong>Reference Type:</strong> Select <strong>PO (Purchase Order)</strong> only as the Reference Document Type.</li><li><strong>Vendor & Location:</strong> Select the Party / Vendor (as per supplier invoice) and the receiving Location.</li><li><strong>PO Selection:</strong> Select the relevant <strong>Reference Document Number</strong> (PO Number).</li><li><strong>Quantity:</strong> Select the PO line item, enter the actual received quantity, and click <strong>Save</strong>.</li><li><strong>Vendor/Invoice Details:</strong><ul style='margin-left: 20px; list-style-type: circle;'><li><i>Ref. No.:</i> Enter the Invoice Number.</li><li><i>Ref. Date:</i> Enter the Invoice Date.</li><li><i>Remarks:</i> Mention Asset Number, Site Location, or any other details required for the GRN process.</li></ul></li><li><strong>Finalize:</strong> Save the entry to complete the GRN / Gate Entry transition process.</li></ol><strong>Important System Notes:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li><strong>Universal Search:</strong> A search provision is available to filter grid data as per requirements.</li><li><strong>Status Indicators:</strong> <i>Unposted</i> (Approval Pending) and <i>Posted</i> (Approved).</li><li><strong>Update:</strong> PR Type-wise grids and full Excel export details (Asset/Make/Model) are currently under development.</li></ul>",
        note: "Double-check the Vehicle Number and Driver Mobile—these are essential for security audit trails.",
        imageURL: "Images/gateentr.png"
    },
    {
        title: "Gate Entry Grid",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Store → Gate Entry",
        description: "This screen provides a centralized list view of all gate entries recorded in the system. It serves as the primary tool for monitoring incoming material flow and verifying documentation.<br><br><strong>Grid Capabilities:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li><strong>Entry Verification:</strong> Provides a comprehensive list view to verify pending or completed entries.</li><li><strong>PO Cross-Checking:</strong> Allows users to cross-check received material details against the original Purchase Order for accuracy.</li><li><strong>Status Tracking:</strong> Easily identify which consignments are at the gate, which are in the GRN process, and which are completed.</li></ul><strong>Grid Features:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li><strong>Universal Search:</strong> Use the global search bar to quickly locate entries by Vendor Name, PO Number, or Invoice Number.</li><li><strong>Data Export:</strong> All visible grid data can be exported to Excel for reporting and external audits.</li><li><strong>Expandable Records:</strong> Click to expand individual rows to see item-level details without leaving the main list.</li></ul>",
        note: "Export to Excel if you need to share a list of today's incoming materials with the Site Supervisor.",
        imageURL: "/Images/gateentry.png"
    },
    {
        title: "Goods Receipt Note (GRN)",
        category: "P&M Transaction",
        module: "Day-to-Day Transactions",
        path: "Store → GRN",
        description: "The Goods Receipt Note (GRN) is the final step in the material inward process, officially acknowledging the receipt of goods into the company's inventory.<br><br><strong>Inventory Confirmation:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li><strong>Physical Verification:</strong> Once material is physically inspected and verified at the site, the GRN is generated against the corresponding <strong>Gate Entry</strong> and <strong>Purchase Order</strong>.</li><li><strong>System Posting:</strong> Saving the GRN confirms the receipt of material and automatically updates the inventory stock levels.</li></ul><strong>Standard Procedure:</strong><ul style='margin-left: 20px; margin-top: 8px;'><li>Ensure that the quantity verified physically matches the quantity entered in the GRN.</li><li>All quality checks should be completed before finalized posting.</li><li>Linked documents (PO and Gate Entry) are automatically closed or updated upon successful GRN creation.</li></ul>",
        note: "Once you click Save, stock levels are updated immediately. Verify the physical count one last time before posting.",
        imageURL: "/Images/GRN2.png"
    },
    // --- NEW: Sample PDF SOP added here ---
    {
        title: "Petty Cash Purchase SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Petty Cash Purchases (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for Petty Cash Purchases.",
        note: "Read all steps carefully to ensure with petty cash purchases.",
        pdfURL: "/SOP/SOP1.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "Revision of SOP-01 – Petty Cash Purchase Order",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Revision of SOP-01 – Petty Cash Purchase Order (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for Petty Cash Purchases.",
        note: "Read all steps carefully to ensure with Revision of SOP-01 – Petty Cash Purchase Order.",
        pdfURL: "/SOP/revision.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "GRN Locking System ERP Transaction Flow",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → GRN Locking System SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the GRN Locking System.",
        note: "Read all steps carefully to ensure proper implementation of the GRN Locking System.",
        pdfURL: "/SOP/ERPFlowChart.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "GRN Locking System (Purchase Department) ",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → GRN Locking System (Purchase Department) (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the GRN Locking System.",
        note: "Read all steps carefully to ensure proper implementation of the GRN Locking System.",
        pdfURL: "/SOP/GRNLockingSystemPO.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "New Equipment Tools and Tackles SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → New Equipment Tools and Tackles SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the GRN Locking System.",
        note: "Read all steps carefully to identify purpose, scope and responsibilities for the new equipment tools and tackles.",
        pdfURL: "/SOP/EquipmentToolsandTackles.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "New Equipment Service Manual SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → New Equipment Service Manual SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the GRN Locking System.",
        note: "Read all steps carefully to understand the service procedures for the new equipment.",
        pdfURL: "/SOP/NewEquipmentServiceManual.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "Standardized Procedure for third party services (Hiring Services) ",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Standardized Procedure for third party services (Hiring Services) (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for third party services (Hiring Services).",
        note: "Read all steps carefully to understand the standardized procedure for third party services (Hiring Services).",
        pdfURL: "/SOP/HiringService.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "ERP Scrap Receipt Entry Process and Report SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → ERP Scrap Receipt Entry Process and Report SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the ERP Scrap Receipt Entry Process and Report.",
        note: "Read all steps carefully to understand the ERP Scrap Receipt Entry Process and Report.",
        pdfURL: "/SOP/ERPScrapReceipt.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "Daily Consumption Report SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Daily Consumption Report SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the Daily Consumption Report.",
        note: "Read all steps carefully to understand the daily consumption report procedure.",
        pdfURL: "/SOP/DailyConsumptionRSOP.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "Party Return Note (PRN) Process – In Place of Return Purchase Order SOP",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Party Return Note (PRN) Process – In Place of Return Purchase Order SOP (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the Party Return Note (PRN) Process.",
        note: "Read all steps carefully to understand the party return note process.",
        pdfURL: "/SOP/PRNReport.pdf" // Simply provide the path to your PDF here
    },
    {
        title: "Revieved Party Return Note (PRN)",
        category: "Other SOP",
        module: "other-sop",
        path: "Documents → Other SOPs → Revieved Party Return Note (PRN) (Downloadable PDF)",
        description: "This PDF contains the standard operating procedure for the Party Return Note (PRN) Process.",
        note: "Read all steps carefully to understand the party return note process.",
        pdfURL: "/SOP/PartyReturnNote.pdf" // Simply provide the path to your PDF here
    }
];

// --- 2. DOM ELEMENTS ---
const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const pathCount = document.getElementById('pathCount');
const yearSpan = document.getElementById('year');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalModule = document.getElementById('modalModule');
const modalPath = document.getElementById('modalPath');
const modalDescription = document.getElementById('modalDescription');
const modalNote = document.getElementById('modalNote');
const closeModalBtn = document.getElementById('closeModalBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn'); // Added variable
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

let currentCategory = 'All';
yearSpan.textContent = new Date().getFullYear();

// --- 3. DARK MODE LOGIC ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    if (isDark) {
        themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
    } else {
        themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
    }
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
}

themeToggle.addEventListener('click', toggleDarkMode);

// --- 4. HELPER FUNCTIONS ---
function getModuleClass(moduleName) {
    const mod = moduleName.toLowerCase();
    if (mod.includes('accounts')) return 'tag-accounts';
    if (mod.includes('purchase')) return 'tag-purchase';
    if (mod.includes('login')) return 'tag-login';
    if (mod.includes('other')) return 'tag-other-sop';
    return '';
}

function formatPath(pathString) {
    const steps = pathString.split('→').map(s => s.trim());
    if (steps.length === 1) {
        const stepsAlt = pathString.split('>').map(s => s.trim());
        return stepsAlt.map(step => `<span class="step">${step}</span>`).join('');
    }
    return steps.map(step => `<span class="step">${step}</span>`).join('');
}

// --- 5. RENDER & FILTER LOGIC ---
function setCategory(cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    clearSearchBtn.style.display = searchTerm.length > 0 ? 'flex' : 'none';

    const filteredData = erpData.filter(item => {
        const matchesCategory = currentCategory === 'All' || item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
            item.path.toLowerCase().includes(searchTerm) ||
            item.module.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderCards(filteredData);
}

function renderCards(data) {
    grid.innerHTML = '';
    pathCount.textContent = `${data.length} paths found`;

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-sec);"><h3>No paths found.</h3><p>Try a different search or category.</p></div>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(item);
        const moduleClass = getModuleClass(item.module);

        card.innerHTML = `
                    <div class="card-header">
                        <div class="card-title">${item.title}</div>
                        <span class="module-tag ${moduleClass}">${item.category}</span>
                    </div>
                    <div class="path-display">${formatPath(item.path)}</div>
                    <div class="card-footer"><span>${item.note || ''}</span></div>
                    <div class="click-hint">Click to view full details</div>
                `;
        grid.appendChild(card);
    });
}

// --- 6. MODAL LOGIC ---
let currentPathText = "";
function openModal(item) {
    modalTitle.textContent = item.title;
    modalModule.textContent = item.category + " | " + item.module;
    modalPath.innerHTML = formatPath(item.path);
    currentPathText = item.path;

    // Description logic
    if (item.description) {
        modalDescription.innerHTML = `<strong>Description:</strong> ${item.description}`;
        modalDescription.style.display = 'block';
    } else {
        modalDescription.style.display = 'none';
    }

    // --- Button Swapping Logic ---
    if (item.pdfURL) {
        copyBtn.style.display = 'none';
        downloadBtn.style.display = 'flex';
        downloadBtn.href = item.pdfURL; // Sets the download link
    } else {
        copyBtn.style.display = 'flex';
        downloadBtn.style.display = 'none';
    }

    // --- Media/Note Logic ---
    if (item.note || item.imageURL || item.pdfURL) {
        modalNote.style.display = 'block';
        let htmlContent = "";

        if (item.note) htmlContent += `<strong>Tip:</strong> ${item.note}`;

        // If it has a PDF, show the iframe
        if (item.pdfURL) {
            htmlContent += `
                        <div style="margin-top: 15px; border-top: 1px dashed var(--border); padding-top: 15px;">
                            <iframe src="${item.pdfURL}" type="application/pdf" style="width: 100%; height: 65vh; border-radius: 8px; border: 1px solid var(--border);" frameborder="0"></iframe>
                        </div>
                    `;
        }
        // If it has an image, show the image
        else if (item.imageURL) {
            htmlContent += `
                        <div style="margin-top: 12px; border-top: 1px solid var(--border); padding-top: 12px;">
                            <a href="${item.imageURL}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: none; display: block; margin-bottom: 8px;">
                                🔍 Click to view full screenshot
                            </a>
                            <img src="${item.imageURL}" alt="Screenshot" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);" onerror="this.style.display='none'">
                        </div>
                    `;
        }
        modalNote.innerHTML = htmlContent;
    } else {
        modalNote.style.display = 'none';
    }
    modalOverlay.classList.add('active');
}

function closeModal() { modalOverlay.classList.remove('active'); }
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentPathText).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = "<span>Copied!</span>";
        copyBtn.style.background = "#16a34a";
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = "";
        }, 2000);
    });
});

// --- 7. EVENT LISTENERS ---
searchInput.addEventListener('input', applyFilters);
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    applyFilters();
    searchInput.focus();
});

// Initial render
renderCards(erpData);
