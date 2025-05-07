document.getElementById('open-all-img').onclick = function() {
  document.getElementById('open-all-img').style.display = 'none'
  document.getElementById('all-img-parent').style.display = 'flex'
}
document.getElementById('close-all-img').onclick = function() {
  document.getElementById('open-all-img').style.display = 'flex'
  document.getElementById('all-img-parent').style.display = 'none'
}