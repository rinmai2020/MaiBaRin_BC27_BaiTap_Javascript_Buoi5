// function incomeTax() {
//   var fullName2 = document.getElementById("fullName2").value;
//   var tongThuNhapNam = +document.getElementById("tongThuNhapNam").value;
//   var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
//   var result3 = document.getElementById("result3");
//   var thuNhapChiuThue = tongThuNhapNam - 4e6 - nguoiPhuThuoc * 16e5;
//   result3.style.display = "block";
//   var thue1 = 0.05,
//     thue2 = 0.1,
//     thue3 = 0.15,
//     thue4 = 0.2,
//     thue5 = 0.25,
//     thue6 = 0.3,
//     thue7 = 0.35;
//   var tongThuNhapChiuThue = 0;
//   if (thuNhapChiuThue <= 0) {
//     alert("Số tiền thu nhập không hợp lệ");
//   } else if (thuNhapChiuThue <= 6e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue1;
//   } else if (thuNhapChiuThue <= 120e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue2;
//   } else if (thuNhapChiuThue <= 210e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue3;
//   } else if (thuNhapChiuThue <= 384e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue4;
//   } else if (thuNhapChiuThue <= 624e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue5;
//   } else if (thuNhapChiuThue <= 960e6) {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue6;
//   } else {
//     tongThuNhapChiuThue += thuNhapChiuThue * thue7;
//   }
//   result3.innerHTML =
//     "Họ tên: " +
//     fullName2 +
//     ";" +
//     " " +
//     "Tiền thuế thu nhập cá nhân: " +
//     tongThuNhapChiuThue.toLocaleString() +
//     " VND";
// }
function baiTap3() {
  var fullName2 = document.getElementById("fullName2").value;
  var thuNhapNam = +document.getElementById("tongThuNhapNam").value;
  var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
  var result3 = document.getElementById("result3");
  //thu nhập chịu thuế
  var tongThuNhapChiuThue = tinhThuNhapChiuThue(
    thuNhapNam,
    4e6,
    nguoiPhuThuoc,
    16e5
  );
  //dieu kien bị tinh thuế
  var tongChiuThue = dieuKienTinhThue(tongThuNhapChiuThue);
  result3.style.display = "block";
  result3.innerHTML =
    "Họ tên: " +
    fullName2 +
    ";" +
    " " +
    "Tiền thuế thu nhập cá nhân: " +
    tongChiuThue.toLocaleString() +
    " VND";
}
//tính thu nhập chiu thuế
function tinhThuNhapChiuThue(
  thuNhapNam,
  luongCoBan,
  nguoiPhuThuoc,
  tienPhuThuoc
) {
  return thuNhapNam - luongCoBan - nguoiPhuThuoc * tienPhuThuoc;
}
//Điều kiện tính thuế
function dieuKienTinhThue(tongThuNhapChiuThue) {
  var tongThuNhapChiuThue1 = 0;
  if (tongThuNhapChiuThue <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
  } else if (tongThuNhapChiuThue <= 6e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.05;
  } else if (tongThuNhapChiuThue <= 120e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.1;
  } else if (tongThuNhapChiuThue <= 210e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.15;
  } else if (tongThuNhapChiuThue <= 384e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.2;
  } else if (tongThuNhapChiuThue <= 624e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.25;
  } else if (tongThuNhapChiuThue <= 960e6) {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.3;
  } else {
    tongThuNhapChiuThue1 += tongThuNhapChiuThue * 0.35;
  }
  return tongThuNhapChiuThue1;
}
