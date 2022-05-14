// function addmissionManager() {
//   var diemChuan = +document.getElementById("diemChuan").value;
//   var khuVuc = +document.getElementById("khuVuc").value;
//   var doiTuong = +document.getElementById("doiTuong").value;
//   var mon1 = +document.getElementById("mon1").value;
//   var mon2 = +document.getElementById("mon2").value;
//   var mon3 = +document.getElementById("mon3").value;
//   var result = document.getElementById("result");
//   result.style.display = "block";
//   result.style.background = "light";
//   var tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;
//   if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
//     result.style.color = "red";
//     result.innerHTML = " Bạn bị rớt vì 1 môn có điểm 0";
//   } else if (tongDiem >= diemChuan) {
//     result.innerHTML = "Bạn đã đậu " + " Tổng điểm: " + tongDiem;
//   } else {
//     result.style.color = "red";
//     result.innerHTML = "Bạn đã rớt " + "Tổng điểm: " + tongDiem;
//   }
// }
function addmissionManager() {
  var diemChuan = +$("diemChuan").value;
  var khuVuc = $("khuVuc").value;
  var doiTuong = $("doiTuong").value;
  var mon1 = +$("mon1").value;
  var mon2 = +$("mon2").value;
  var mon3 = +$("mon3").value;
  khuVuc = chonKhuVuc(khuVuc);
  doiTuong = chonDoiTuong(doiTuong);
  var diem3Mon = tongDiem3Mon(mon1, mon2, mon3);
  var diemTongKet = diem3Mon + khuVuc + doiTuong;
  hienThiKetQua(mon1, mon2, mon3, diemChuan, diemTongKet);
}
function chonKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "2":
      return 2;
    case "1":
      return 1;
    case "0.5":
      return 0.5;
    default:
      return 0;
  }
}
function chonDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "2.5":
      return 2.5;
    case "1.5":
      return 1.5;
    case "1":
      return 1;
    case "0.5":
      return 0.5;
    default:
      return 0;
  }
}
function tongDiem3Mon(mon1, mon2, mon3) {
  return mon1 + mon2 + mon3;
}
function hienThiKetQua(mon1, mon2, mon3, diemChuan, diemTongKet) {
  var result = $("result");
  result.style.display = "block";

  if (!mon1 || !mon2 || !mon3) {
    result.style.color = "red";
    result.innerHTML = " Bạn bị rớt vì 1 môn có điểm 0";
  } else if (diemTongKet >= diemChuan) {
    result.style.color = "white";
    result.innerHTML = `Bạn đã đậu; Tổng điểm: ${diemTongKet}`;
  } else {
    result.style.color = "red";
    result.innerHTML = `Bạn đã rớt; Tổng điểm: ${diemTongKet}`;
  }
}
function $(x) {
  return document.getElementById(x);
}
