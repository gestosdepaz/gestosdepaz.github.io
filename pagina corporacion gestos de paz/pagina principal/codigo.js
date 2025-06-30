const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.noticia').forEach(noticia => {
noticia.addEventListener('click', () => {
    modalImg.src = noticia.dataset.img;
    modalTitle.textContent = noticia.dataset.titulo;
    modalText.textContent = noticia.dataset.texto;

    modal.classList.add('show');
});
});

closeBtn.addEventListener('click', () => {
modal.classList.remove('show');
});

window.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
    modal.classList.remove('show');
}
});

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.classList.remove('show');
}
});
