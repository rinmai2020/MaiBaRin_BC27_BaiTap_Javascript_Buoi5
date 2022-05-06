function addmissionManager() {
  var diemChuan = +document.getElementById("diemChuan").value;
  var khuVuc = +document.getElementById("khuVuc").value;
  var doiTuong = +document.getElementById("doiTuong").value;
  var mon1 = +document.getElementById("mon1").value;
  var mon2 = +document.getElementById("mon2").value;
  var mon3 = +document.getElementById("mon3").value;
  var result = document.getElementById("result");
  result.style.display = "block";
  result.style.background = "light";
  var tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;
  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    result.style.color = "red";
    result.innerHTML = " Bạn bị rớt vì 1 môn có điểm 0";
  } else if (tongDiem >= diemChuan) {
    result.innerHTML = "Bạn đã đậu " + " Tổng điểm: " + tongDiem;
  } else {
    result.style.color = "red";
    result.innerHTML = "Bạn đã rớt " + "Tổng điểm: " + tongDiem;
  }
}
