function getInputValue(modal, index) {
  const inputs = modal.querySelectorAll('input[type="number"]');
  return parseFloat(inputs[index].value) || 0;
}

function showResult(modal, result, unit) {
  const resultDiv = modal.querySelector('.alert.alert-success');
  const span = resultDiv.querySelector('span');
  span.textContent = parseFloat(result.toFixed(4)) + ' ' + unit;
  resultDiv.classList.remove('d-none');
}

// BANGUN DATAR

// Persegi
document.querySelector('#modalPersegi .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalPersegi');
  const s = getInputValue(modal, 0);
  if (s <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = s * s;
  showResult(modal, luas, 'm²');
});

// Persegi Panjang
document.querySelector('#modalPersegiPanjang .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalPersegiPanjang');
  const p = getInputValue(modal, 0);
  const l = getInputValue(modal, 1);
  if (p <= 0 || l <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = p * l;
  showResult(modal, luas, 'm²');
});

// Segitiga
document.querySelector('#modalSegitiga .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalSegitiga');
  const a = getInputValue(modal, 0);
  const t = getInputValue(modal, 1);
  if (a <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = 0.5 * a * t;
  showResult(modal, luas, 'm²');
});

// Lingkaran
document.querySelector('#modalLingkaran .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalLingkaran');
  const r = getInputValue(modal, 0);
  if (r <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = Math.PI * r * r;
  showResult(modal, luas, 'm²');
});

// Trapesium
document.querySelector('#modalTrapesium .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalTrapesium');
  const a = getInputValue(modal, 0);
  const b = getInputValue(modal, 1);
  const t = getInputValue(modal, 2);
  if (a <= 0 || b <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = 0.5 * (a + b) * t;
  showResult(modal, luas, 'm²');
});

// Jajaran Genjang
document.querySelector('#modalJajaranGenjang .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalJajaranGenjang');
  const a = getInputValue(modal, 0);
  const t = getInputValue(modal, 1);
  if (a <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = a * t;
  showResult(modal, luas, 'm²');
});

// Belah Ketupat
document.querySelector('#modalBelahKetupat .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalBelahKetupat');
  const d1 = getInputValue(modal, 0);
  const d2 = getInputValue(modal, 1);
  if (d1 <= 0 || d2 <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = 0.5 * d1 * d2;
  showResult(modal, luas, 'm²');
});

// Elips
document.querySelector('#modalElips .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalElips');
  const a = getInputValue(modal, 0);
  const b = getInputValue(modal, 1);
  if (a <= 0 || b <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const luas = Math.PI * a * b;
  showResult(modal, luas, 'm²');
});

// BANGUN RUANG

// Kubus
document.querySelector('#modalKubus .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalKubus');
  const s = getInputValue(modal, 0);
  if (s <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = s * s * s;
  showResult(modal, volume, 'm³');
});

// Balok
document.querySelector('#modalBalok .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalBalok');
  const p = getInputValue(modal, 0);
  const l = getInputValue(modal, 1);
  const t = getInputValue(modal, 2);
  if (p <= 0 || l <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = p * l * t;
  showResult(modal, volume, 'm³');
});

// Bola
document.querySelector('#modalBola .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalBola');
  const r = getInputValue(modal, 0);
  if (r <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = (4/3) * Math.PI * r * r * r;
  showResult(modal, volume, 'm³');
});

// Kerucut
document.querySelector('#modalKerucut .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalKerucut');
  const r = getInputValue(modal, 0);
  const t = getInputValue(modal, 1);
  if (r <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = (1/3) * Math.PI * r * r * t;
  showResult(modal, volume, 'm³');
});

// Limas
document.querySelector('#modalLimas .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalLimas');
  const s = getInputValue(modal, 0);
  const t = getInputValue(modal, 1);
  if (s <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = (1/3) * s * s * t;
  showResult(modal, volume, 'm³');
});

// Prisma
document.querySelector('#modalPrisma .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalPrisma');
  const a = getInputValue(modal, 0);
  const ta = getInputValue(modal, 1);
  const t = getInputValue(modal, 2);
  if (a <= 0 || ta <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = 0.5 * a * ta * t;
  showResult(modal, volume, 'm³');
});

// Tabung
document.querySelector('#modalTabung .btn-primary').addEventListener('click', function() {
  const modal = document.getElementById('modalTabung');
  const r = getInputValue(modal, 0);
  const t = getInputValue(modal, 1);
  if (r <= 0 || t <= 0) { alert('Masukkan nilai yang valid!'); return; }
  const volume = Math.PI * r * r * t;
  showResult(modal, volume, 'm³');
});

// Reset modal
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('hidden.bs.modal', function() {
    const form = this.querySelector('form');
    if (form) form.reset();
    const resultDiv = this.querySelector('.alert.alert-success');
    if (resultDiv) resultDiv.classList.add('d-none');
  });
});