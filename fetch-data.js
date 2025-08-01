 fetchUserData =async() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
       const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
       });
       const users = await response.json();
       await console.log(users);
       dataContainer.textContent = "";
       const userList = document.createElement('ul');
       users.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = `${element.name}`;
        userList.appendChild(listItem);
       });
    dataContainer.appendChild(userList);
          
    } catch (error) {
        dataContainer.innerHTML = '';
        console.error('Error fetching user data:', error);
        dataContainer.textContent = 'Failed to load user data.';
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
})