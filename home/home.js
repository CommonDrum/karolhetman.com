document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.circle-btn');
    const displayName = document.getElementById('displayName');
    const bgContainer = document.querySelector('.bg-container'); // Select the background container
    const containerSize = 200;
    const numButtons = buttons.length;
    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    const radius = 250;
    let angle = -11;
    const angleStep = (2 * Math.PI) / numButtons;

    buttons.forEach((button, i) => {
        // Position buttons in a circle
        const x = centerX + radius * Math.cos(angle) - button.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - button.offsetHeight / 2;
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        angle += angleStep;

        // Add initial animation
        setTimeout(() => {
            button.classList.add('visible');
        }, i * 450);

        // Display button name and change background color on hover
        button.addEventListener('mouseover', () => {
            const color = button.getAttribute('data-color'); // Get the color from data-color attribute
            buttons.forEach(btn => btn.classList.add('not-hovered'));
            button.classList.remove('not-hovered');
            button.classList.add('hovered');
            displayName.innerText = button.getAttribute('data-name');
            bgContainer.style.backgroundColor = color; // Change the background color
            bgContainer.style.backgroundImage = url();
        });

        // Reset when mouseout
        button.addEventListener('mouseout', () => {
            buttons.forEach(btn => btn.classList.remove('not-hovered', 'hovered'));
            displayName.innerText = '';
            bgContainer.style.backgroundColor = ""; // Reset the background color
        });

        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url'); // Get the URL from data-url attribute
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });
});
