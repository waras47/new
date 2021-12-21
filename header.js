//header table
export function header(data) {
  let open = "<thead><tr>";
  let close = "</tr></thead>";

  data.forEach(function (d) {
    open += `<th>${d}</th>`;
  });
  return open + close;
}
