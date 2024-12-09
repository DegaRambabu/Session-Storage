document.addEventListener('DOMContentLoaded', 
    function() {
        const nameInput = document.getElementById('nameInput');
        const saveButton = document.getElementById('saveButton');
        const greeting = document.getElementById('greeting');
    
    
        // Save the name to session storage when the button is clicked
        saveButton.addEventListener('click', 
        function() {
            const name = nameInput.value;
            let n = sessionStorage.setItem('name', name)
            greeting.textContent = "Hello " + n;
    
            // Check if a name is stored in session storage and display a greeting
        if (sessionStorage.getItem('name')) {
            greeting.textContent = "Hello " + sessionStorage.getItem('name');
        }
    });
    });
    