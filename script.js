const estado = {};
document.querySelectorAll('.ramo').forEach(ramo => {
  const id = ramo.dataset.id;
  estado[id] = false;

  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;

    estado[id] = !estado[id];
    ramo.classList.toggle('aprobado');
    desbloquearRamos();
  });
});

function desbloquearRamos() {
  document.querySelectorAll('.ramo.bloqueado').forEach(ramo => {
    const prereq = ramo.dataset.prereq;
    if (estado[prereq]) {
      ramo.classList.remove('bloqueado');
    }
  });
}
