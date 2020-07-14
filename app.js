window.addEventListener('load', () => {
  const allInputRange = document.querySelectorAll('.input-range');

  allInputRange.forEach((inputRange) => {
    inputRange.addEventListener('input', () => {
      color_box.style.background = `rgb(${r.value},${g.value},${b.value})`;

      hex_text.value = `#${rgbToHex(r.value)}${rgbToHex(g.value)}${rgbToHex(
        b.value
      )}`;

      r_text.value = r.value;
      g_text.value = g.value;
      b_text.value = b.value;
    });
  });

  function rgbToHex(value) {
    const hex = Number(value).toString(16);

    return hex.length == 1 ? '0' + hex : hex;
  }
});
