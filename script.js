const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', function() {
    // Toggle the 'hidden' class on the menu
    menu.classList.toggle('hidden');
});