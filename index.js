AFRAME.registerComponent("refresh", {
    init: function() {
      this.el.addEventListener('click', function (evt) {
        window.location.reload();
        });
    }
  });

var x = document.getElementById("bgSound");
function mute() { 
x.volume = 0;
}