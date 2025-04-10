// applying script for the page 
// grabing the form for the opreationg
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('file');
    if (fileInput.files.length === 0) {
        alert('Please select a file before submitting.');
        return;
    }

    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('results').style.display = 'block';
            document.getElementById('detected-genre').textContent = data.genre;
            document.getElementById('confidence').textContent = data.confidence;
        } else {
            alert(data.error || 'An error occurred while processing your request.');
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
});
