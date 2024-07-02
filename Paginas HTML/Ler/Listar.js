document.addEventListener('DOMContentLoaded', function () {
    const editModal = document.getElementById('edit-modal');
    const deleteModal = document.getElementById('delete-modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const dropdown = event.target.nextElementSibling;
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            editModal.style.display = 'block';
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            deleteModal.style.display = 'block';
        });
    });

    document.getElementById('cancel-delete-btn').addEventListener('click', () => {
        deleteModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        } else if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    });
});
