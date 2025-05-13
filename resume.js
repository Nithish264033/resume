function generateResume() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const projects = document.getElementById('projects').value;
    const experience = document.getElementById('experience').value;

    const resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = `
        <div class="resume-container">
            <header class="resume-header">
                <h1>${name}</h1>
                <h2>${title}</h2>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </header>
            <hr>
            <section class="resume-section">
                <h3>Professional Summary</h3>
                <p>A results-driven ${title} with a strong background in ${skills.join(', ')}. Adept at problem-solving, innovation, and delivering high-quality solutions. Passionate about leveraging technology to drive efficiency and success.</p>
            </section>
            <hr>
            <section class="resume-section">
                <h3>Core Competencies</h3>
                <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </section>
            <hr>
            <section class="resume-section">
                <h3>Key Projects</h3>
                <p>${projects.replace(/\n/g, '<br>')}</p>
            </section>
            <hr>
            <section class="resume-section">
                <h3>Professional Experience</h3>
                <p>${experience.replace(/\n/g, '<br>')}</p>
            </section>
            <hr>
            <footer class="resume-footer">
                <p><strong>Contact:</strong> <a href="mailto:${email}">${email}</a></p>
            </footer>
            <button onclick="downloadPDF()">Download as PDF</button>
        </div>
    `;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
    const projects = document.getElementById('projects').value;
    const experience = document.getElementById('experience').value;

    // Set document styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(name, 20, 20);
    
    doc.setFont("helvetica", "italic");
    doc.setFontSize(18);
    doc.text(title, 20, 30);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text(`Email: ${email}`, 20, 40);
    
    // Add horizontal line for separation
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);

    // Professional Summary
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Professional Summary", 20, 55);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`A results-driven ${title} with expertise in ${skills}. Passionate about delivering innovative solutions and contributing to impactful projects.`, 20, 65, { maxWidth: 170 });

    // Core Competencies
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Core Competencies", 20, 85);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(skills, 20, 95, { maxWidth: 170 });

    // Key Projects
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Key Projects", 20, 115);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(projects, 20, 125, { maxWidth: 170 });

    // Professional Experience
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Professional Experience", 20, 145);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(experience, 20, 155, { maxWidth: 170 });

    // Contact Information
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Contact Information", 20, 175);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Email: ${email}`, 20, 185);

    // Save the PDF
    doc.save(`${name}_Resume.pdf`);
}


