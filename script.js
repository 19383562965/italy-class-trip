document.getElementById('open-all-img').onclick = function() {
  document.getElementById('open-all-img').style.display = 'none'
  document.getElementById('all-img-parent').style.transition = '0.5s'
  document.getElementById('all-img-parent').style.right = '-15px'
}
document.getElementById('close-all-img').onclick = function() {
  document.getElementById('open-all-img').style.display = 'flex'
  document.getElementById('all-img-parent').style.transition = '0.5s'
  document.getElementById('all-img-parent').style.right = '-1000px'
}
