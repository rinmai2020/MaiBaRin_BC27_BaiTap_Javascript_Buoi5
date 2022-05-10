// function tinhTienDien() {
//   var fullName = document.getElementById("fullName").value;
//   var numberKW = +document.getElementById("numberKW").value;
//   var result2 = document.getElementById("result2");
//   result2.style.display = "block";
//   result2.style.background = "light";
//   var bac1 = 500;
//   var bac2 = 650;
//   var bac3 = 850;
//   var bac5 = 1300;
//   if (numberKW <= 0) {
//     alert("Số kw không hợp lệ! Vui lòng nhập lại");
//     tienDien = "0";
//   } else if (numberKW <= 50) {
//     tienDien = (numberKW * bac1).toLocaleString();
//   } else if (numberKW <= 100) {
//     tienDien = (50 * bac1 + (numberKW - 50) * bac2).toLocaleString();
//   } else if (numberKW <= 200) {
//     tienDien = (
//       50 * bac1 +
//       50 * bac2 +
//       (numberKW - 100) * bac3
//     ).toLocaleString();
//   } else if (numberKW <= 350) {
//     tienDien = (
//       50 * bac1 +
//       50 * bac2 +
//       100 * bac3 +
//       (numberKW - 200) * bac4
//     ).toLocaleString();
//   } else {
//     tienDien = (
//       50 * bac1 +
//       50 * bac2 +
//       100 * bac3 +
//       150 * bac4 +
//       (numberKW - 350) * bac5
//     ).toLocaleString();
//   }
//   result2.innerHTML =
//     "Họ tên: " + fullName + "; " + " " + "Tiền điện: " + tienDien;
// }
function tongTienDien() {
  var fullName = $("fullName").value;
  var numberKW = +$("numberKW").value;
  var tienDien = tinhTienDien(numberKW, 500, 650, 850, 1100, 1300);
  var result2 = $("result2");
  result2.style.display = "block";
  result2.innerHTML =
    "Họ tên: " +
    fullName +
    "; " +
    " " +
    "Tiền điện: " +
    tienDien.toLocaleString();
}
function tinhTienDien(
  numberKW,
  kw_50,
  kw_50_100,
  kw_100_200,
  kw_200_350,
  kw_350
) {
  var tienDien = 0;
  if (numberKW <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else if (numberKW <= 50) {
    tienDien = numberKW * kw_50;
  } else if (numberKW <= 100) {
    tienDien = 50 * kw_50 + (numberKW - 50) * kw_50_100;
  } else if (numberKW <= 200) {
    tienDien = (
      50 * kw_50 +
      50 * kw_50_100 +
      (numberKW - 100) * kw_100_200
    ).toLocaleString();
  } else if (numberKW <= 350) {
    tienDien = (
      50 * kw_50 +
      50 * kw_50_100 +
      100 * kw_100_200 +
      (numberKW - 200) * kw_200_350
    ).toLocaleString();
  } else {
    tienDien =
      50 * kw_50 +
      50 * kw_50_100 +
      100 * kw_100_200 +
      150 * kw_200_350 +
      (numberKW - 350) * kw_350;
  }
  return tienDien;
}
function $(x) {
  return document.getElementById(x);
}
