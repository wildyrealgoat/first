function toggleCard(card) {
    var content = card.getElementsByClassName('card-content')[0];
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
