function incomeTax() {
  var fullName2 = document.getElementById("fullName2").value;
  var tongThuNhapNam = +document.getElementById("tongThuNhapNam").value;
  var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
  var result3 = document.getElementById("result3");
  var thuNhapChiuThue = tongThuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;
  result3.style.display = "block";
  var thue1 = 0.05;
  var thue2 = 0.1;
  var thue3 = 0.15;
  var thue4 = 0.2;
  var thue5 = 0.25;
  var thue6 = 0.3;
  var thue7 = 0.35;
  if (thuNhapChiuThue <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
    result3.innerHTML =
      "Họ tên: " +
      "; " +
      " " +
      fullName2 +
      "Tiền thuế thu nhập cá nhân: " +
      "0 VND";
  } else if (thuNhapChiuThue <= 60000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      (thuNhapChiuThue * thue1).toLocaleString() +
      " VND";
  } else if (thuNhapChiuThue <= 120000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      (thuNhapChiuThue * thue2).toLocaleString() +
      " VND";
  } else if (thuNhapChiuThue <= 210000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      (thuNhapChiuThue * thue3).toLocaleString() +
      " VND";
  } else if (thuNhapChiuThue <= 384000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      // thuNhapChiuThue * thue1 +
      // thuNhapChiuThue * thue2 +
      // thuNhapChiuThue * thue3 +
      // (tongThuNhapNam - 210000000)
      (thuNhapChiuThue * thue4).toLocaleString() +
      " VND";
  } else if (thuNhapChiuThue <= 624000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      // thuNhapChiuThue * thue1 +
      // thuNhapChiuThue * thue2 +
      // thuNhapChiuThue * thue3 +
      // thuNhapChiuThue * thue4 +
      // (tongThuNhapNam - 384000000)
      (thuNhapChiuThue * thue5).toLocaleString() +
      " VND";
  } else if (thuNhapChiuThue <= 960000000) {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      // thuNhapChiuThue * thue1 +
      // thuNhapChiuThue * thue2 +
      // thuNhapChiuThue * thue3 +
      // thuNhapChiuThue * thue4 +
      // thuNhapChiuThue * thue5 +
      (thuNhapChiuThue * thue6).toLocaleString() +
      " VND";
  } else {
    result3.innerHTML =
      "Họ tên: " +
      fullName2 +
      ";" +
      " " +
      "Tiền thuế thu nhập cá nhân: " +
      // thuNhapChiuThue * thue1 +
      // thuNhapChiuThue * thue2 +
      // thuNhapChiuThue * thue3 +
      // thuNhapChiuThue * thue4 +
      // thuNhapChiuThue * thue5 +
      (thuNhapChiuThue * thue7).toLocaleString() +
      " VND";
  }
}
