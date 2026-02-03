const GAP = 40;
const PAD = 8;
const TOP = 12;
const EXTRA_RIGHT = 12;

function layout() {
  let y = TOP;
  const vw = innerWidth;

  document.querySelectorAll('.node').forEach((el, i) => {
    const w = el.offsetWidth;
    const usable = vw - w - PAD * 2 - EXTRA_RIGHT;

    let x =
      PAD +
      usable / 2 +
      Math.sin(i) * (usable / 2);

    if (i === 0) x = PAD;

    el.style.left = x + 'px';
    el.style.top  = y + 'px';

    y += GAP;
  });

  document.querySelector('.wrap').style.height = y + 'px';
}

layout();
addEventListener('resize', layout);
