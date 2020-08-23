function cal() {
  const data = `(2^3 * 3 + 2) * (2 / 2)`;
  const info = data.replace('^', '**');
  console.log(eval(info));
}
cal();
