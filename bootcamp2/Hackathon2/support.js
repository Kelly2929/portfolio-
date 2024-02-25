





document.addEventListener('DOMContentLoaded', () => {
    fetchSupportInfo();
    fetchContactMethods();
});
async function fetchSupportInfo() {
    try {
        const response = await fetch('/api/support-info');
        if (!response.ok) throw new Error('Failed to fetch support info');
        const data = await response.json();
        const supportList = document.querySelector('#support-info ul');
       
        for (const key in data) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${data[key]}`;
            supportList.appendChild(li);
        }
    } catch (error) {
        console.error('Error fetching support info:', error);
    }
}
async function fetchContactMethods() {
    try {
        const response = await fetch('/api/contact-methods');
        if (!response.ok) throw new Error('Failed to fetch contact methods');
        const data = await response.json();
        const getSupportSection = document.querySelector('#get-support');
     
        getSupportSection.innerHTML += `<h5>Email: ${data.email}</h5><h5>Phone: ${data.phone}</h5>`;
    } catch (error) {
        console.error('Error fetching contact methods:', error);
    }
}












