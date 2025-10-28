function changeLanguage(lang) {
    // Kontentlarni boshqarish
    document.getElementById('content-uz').classList.toggle('hidden', lang !== 'uz');
    document.getElementById('content-ru').classList.toggle('hidden', lang !== 'ru');
    
    // Tugmalarni aktiv holatga keltirish
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Sarlavhalarni o'zgartirish
    if (lang === 'uz') {
        document.getElementById('name').textContent = 'Shamshodbek O\'ngboyev';
        document.getElementById('title').textContent = 'Matematika va Informatika Talabasi';
    } else {
        document.getElementById('name').textContent = 'Шамшодбек Унгбоев';
        document.getElementById('title').textContent = 'Студент Математики и Информатики';
    }
}

// Dastlab o'zbekcha ko'rsatish
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('uz');
});