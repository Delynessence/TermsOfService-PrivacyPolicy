document.addEventListener("DOMContentLoaded", function() {
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdatedDate = new Date(lastUpdatedElement.textContent);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdatedElement.textContent = lastUpdatedDate.toLocaleDateString(undefined, options);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });
});
