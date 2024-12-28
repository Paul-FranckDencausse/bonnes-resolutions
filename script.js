document.getElementById('resolution-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const resolutionInput = document.getElementById('resolution-input');
    const resolutionText = resolutionInput.value.trim();
    
    if (resolutionText !== '') {
        addResolution(resolutionText);
        resolutionInput.value = '';
    }
});

function addResolution(text) {
    const resolutionList = document.getElementById('resolution-list');
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    listItem.textContent = text;
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        resolutionList.removeChild(listItem);
    });
    
    listItem.appendChild(deleteButton);
    resolutionList.appendChild(listItem);
}
