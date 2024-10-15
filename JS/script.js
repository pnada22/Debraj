const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    const preview = item.nextElementSibling; // Get the corresponding preview element

    item.addEventListener('mouseenter', () => {
        preview.textContent = item.getAttribute('data-preview');
        preview.style.display = 'block';
        preview.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        preview.style.opacity = '0';
        setTimeout(() => {
            preview.style.display = 'none';
        }, 300); // Match with the CSS transition duration
    });
});
