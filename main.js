// 1. Maxsus imkoniyatlar (ko'zi ojizlar / kontrast) rejimini yoqib-o'chirish
function toggleAccessibility() {
  document.body.classList.toggle('high-contrast');
}

// 2. Mobil telefonlarda tepadagi menyuni (☰) ochib-yopish
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// 3. Yangiliklar va E'lonlarni saralash (Tab-filtr)
function filterNews(type) {
  const cards = document.querySelectorAll('.news-card');
  const buttons = document.querySelectorAll('.tab-btn');
  
  buttons.forEach(btn => {
    btn.classList.remove('bg-white', 'shadow', 'text-dtpi-navy');
  });

  if (type === 'all') {
    cards.forEach(card => card.style.display = 'block');
    const allBtn = document.getElementById('btn-all');
    if (allBtn) allBtn.classList.add('bg-white', 'shadow', 'text-dtpi-navy');
  } else {
    cards.forEach(card => {
      if (card.classList.contains(type)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    const activeBtn = document.getElementById('btn-' + type);
    if (activeBtn) activeBtn.classList.add('bg-white', 'shadow', 'text-dtpi-navy');
  }
}
// Live Search (Yangiliklar va xabarlar bo'yicha tezkor qidiruv)
function searchContent() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.news-card');

  cards.forEach(card => {
    const title = card.querySelector('h4').innerText.toLowerCase();
    const text = card.querySelector('p').innerText.toLowerCase();

    if (title.includes(input) || text.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
