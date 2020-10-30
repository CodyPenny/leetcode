function divisibility( s, t) {
  if (s.length % t.length) return -1;
  if (!validatePattern) return -1;
  if (t.length === 1) return 1;
  // find substring in t, size less than t
  let slowRunner = 0;
  let fastRunner = 1;
  let counter = 0;

  while (fastRunner < t.length) {
    if(t[slowRunner] === t[fastRunner]) {
      ++counter;
      ++slowRunner;
    }
    ++fastRunner;
  }
  return counter;
}

let s = 'bcdbcdbcdbcd';
let t = 'bcdbcd';
let u = 'lrbblrbb';
let v = 'lrbb'
let r = 'rbrb';
let rr = 'rbrb'

function validatePattern( u, v) {
  return t.repeat(s.length/t.length) === s;
}


console.log(divisibility(r, rr));