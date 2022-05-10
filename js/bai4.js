function cableMoney() {
  var soKetNoi = +$("soKetNoi").value;
  var maKH = +$("maKH").value;
  var kenh = +$("kenh").value;
  var loaiKH = onChangeKeNoi();
  var result4 = $("result4");
  result4.style.display = "block";
  var tienCap = 0;
  if (loaiKH === "nhaDan") {
    tienCap = 4.5 + 20.5 + kenh * 7.5;
  } else if (loaiKH === "doanhNghiep") {
    if (soKetNoi <= 10) {
      tienCap = 15 + 75 + kenh * 50;
    } else {
      tienCap = 15 + 75 + (soKetNoi - 10) * 5 + kenh * 50;
    }
  } else {
    alert("Hãy chọn loại khách hàng");
  }

  result4.innerHTML =
    "Mã khách hàng: " +
    maKH +
    " ; " +
    "Tiền cáp:" +
    " " +
    tienCap.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
}
function onChangeKeNoi() {
  var loaiKH = $("loaiKH").value;
  if (loaiKH === "") {
    soKetNoi.style.display = "none";
  } else if (loaiKH === "nhaDan") {
    soKetNoi.style.display = "none";
    return "nhaDan";
  } else {
    soKetNoi.style.display = "block";
    return "doanhNghiep";
  }
}
function $(x) {
  return document.getElementById(x);
}
