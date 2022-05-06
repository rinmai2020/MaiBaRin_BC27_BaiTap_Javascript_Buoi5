/**
 * Input: Nhập vào số điện tiêu thụ hàng tháng
 * bac1: 50kw đầu: 500d/kw
 * bac2: 50kw kế: 650d/kw
 * bac3: 100kw kế: 850d/kw
 * bac4: 100kw kế: 1100d/kw
 * bac5: Còn lại: 1200d/kw
 * Output: Hiển thị số tiền cần phải đóng
 */

function tienDien() {
  var fullName = document.getElementById("fullName").value;
  var numberKW = +document.getElementById("numberKW").value;
  var result2 = document.getElementById("result2");
  result2.style.display = "block";
  result2.style.background = "light";
  var bac1 = 500;
  var bac2 = 650;
  var bac3 = 850;
  var bac5 = 1300;
  if (numberKW <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
    result2.innerHTML =
      "Họ tên: " + "; " + " " + fullName + "Tiền điện: " + "0";
  } else if (numberKW <= 50) {
    result2.innerHTML =
      "Họ tên: " +
      fullName +
      ";" +
      " " +
      "Tiền điện: " +
      (numberKW * bac1).toLocaleString();
  } else if (numberKW <= 100) {
    result2.innerHTML =
      "Họ tên: " +
      fullName +
      "; " +
      " " +
      "Tiền điện: " +
      (50 * bac1 + (numberKW - 50) * bac2).toLocaleString();
  } else if (numberKW <= 200) {
    result2.innerHTML =
      "Họ tên: " +
      fullName +
      "; " +
      " " +
      "Tiền điện: " +
      (50 * bac1 + 50 * bac2 + (numberKW - 100) * bac3).toLocaleString();
  } else if (numberKW <= 350) {
    result2.innerHTML =
      "Họ tên: " +
      fullName +
      "; " +
      " " +
      "Tiền điện: " +
      (
        50 * bac1 +
        50 * bac2 +
        100 * bac3 +
        (numberKW - 200) * bac4
      ).toLocaleString();
  } else {
    result2.innerHTML =
      "Họ tên: " +
      fullName +
      "; " +
      " " +
      "Tiền điện: " +
      (
        50 * bac1 +
        50 * bac2 +
        100 * bac3 +
        150 * bac4 +
        (numberKW - 350) * bac5
      ).toLocaleString();
  }
}
