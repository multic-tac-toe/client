function checkWinner(obj) {
  let arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  arr[0][1] = obj['1']
  arr[0][2] = obj['2']
  arr[0][3] = obj['3']
  arr[1][0] = obj['4']
  arr[1][1] = obj['5']
  arr[1][2] = obj['6']
  arr[2][0] = obj['7']
  arr[2][1] = obj['8']
  arr[2][2] = obj['9']

  let all = '';
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (!arr[i][j]) {
              all += '-';
          } else {
              all += arr[i][j];
          }
      }
  }
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (!arr[j][i]) {
              all += '-';
          } else {
              all += arr[j][i];
          }
      }
  }
  for (let i = 0; i < 3; i++) {
      if (!arr[i][i]) {
          all += '-';
      } else {
          all += arr[i][i];
      }
  }
  if (!arr[2][0]) {
      all += '-';
  } else {
      all += arr[2][0];
  }
  if (!arr[1][1]) {
      all += '-';
  } else {
      all += arr[1][1];
  }
  if (!arr[0][2]) {
      all += '-';
  } else {
      all += arr[0][2];
  }
  
  for (let i = 0; i < all.length - 3; i += 3) {
      if (all[i] + all[i + 1] + all[i + 2] === 'XXX') {
          return 'X';
      } else if (all[i] + all[i + 1] + all[i + 2] === 'OOO') {
          return 'O';
      }
  }
  return 'DRAW'
}

export default checkWinner