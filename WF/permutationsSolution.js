function p(a, b, res) {
  var b = b || [], res = res || [], len = a.length;
  if (!len)
    res.push(b)
  else
    for (var i = 0; i < len; i++)
         // recursive call to `p` here
    {
      p(a.slice(0, i).concat(a.slice(i + 1, len)), b.concat(a[i]), res);
    }
  return res;
}

console.log(p(["a", "b", "c", "d"]));
