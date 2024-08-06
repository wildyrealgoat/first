function toggleCard(cardId) {
    var cardDiv = document.getElementById(cardId);
    var servicesDiv = cardDiv.querySelector('.trf-services');
    
    if (servicesDiv.style.maxHeight === "0px" || !servicesDiv.style.maxHeight) {
        // Expand the card and services
        cardDiv.style.maxHeight = cardDiv.scrollHeight + "px";
        servicesDiv.style.maxHeight = servicesDiv.scrollHeight + "px";
        servicesDiv.style.padding = "10px 15px"; // Add padding when expanding
    } else {
        // Collapse the card and services
        cardDiv.style.maxHeight = "0px";
        servicesDiv.style.maxHeight = "0px";
        servicesDiv.style.padding = "0"; // Remove padding when collapsing
    }
}

function handleScroll() {
    const elements = document.querySelectorAll('.room, .review');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Функция для переключения видимости карточки
function toggleCardd(cardId) {
    const card = document.getElementById(cardId);
    const services = document.getElementById(`services-${cardId}`);
    if (services.style.display === 'none' || services.style.display === '') {
        services.style.display = 'block';
    } else {
        services.style.display = 'none';
    }
}

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});