(function () {
  const ziel = new Date('2026-11-02T18:00:00');

  function update() {
    const diff = ziel - new Date();
    if (diff <= 0) {
      document.querySelector('.countdown-banner').textContent = '🎉 Es geht los!';
      return;
    }
    const tage = Math.floor(diff / 86400000);
    const std  = Math.floor((diff % 86400000) / 3600000);
    const min  = Math.floor((diff % 3600000)  / 60000);

    document.getElementById('cd-days').textContent  = String(tage).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(std).padStart(2, '0');
    document.getElementById('cd-mins').textContent  = String(min).padStart(2, '0');
  }

  setInterval(update, 1000);
  update();
})();