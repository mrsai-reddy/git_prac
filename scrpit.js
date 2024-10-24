document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : null;
    
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(input => input.value);
    
    const bio = document.getElementById('bio').value;
    
    // Check if any of the fields are empty or null
    if (!name || !email || !gender || interests.length === 0 || !bio) {
        alert("Please enter all data before submitting the form.");
        return;  // Stop further execution if any field is empty
    }

    // If all fields are filled, log the data and show success message
    console.log({ name, email, gender, interests, bio });
    alert('Successfully Submitted!');
});
