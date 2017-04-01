let pemain = ['A','B','C'];
let panjang = 5;
let posisi = 0;

function print_board() {
  for (let i = 0; i < pemain.length; i++) {
    console.log(print_line(pemain[i],posisi));
  }
}

function print_line(player, pos) {
  let pembatas = '| ';
  let passedPembatas = pembatas.repeat(pos);
  let posPemain = `|${player}`;
  let pembatasGame = pembatas.repeat(panjang - pos);
  let lineBoard = `${passedPembatas}${posPemain}${pembatasGame}`;

  return lineBoard;
}

print_board();
// console.log(print_line('A',0));
