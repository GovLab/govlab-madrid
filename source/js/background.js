(function(){
  const img2 = document.getElementsByClassName('img2');
  const img3 = document.getElementsByClassName('img3');
  const img4 = document.getElementsByClassName('img4');

  $(img2).css("display", "none");
  $(img3).css("display", "none");
  $(img4).css("display", "none");

  function fadeIn(image, time, animate) {
    setTimeout(function(){
      $(image).fadeIn(animate);
    }, time);
  };

  fadeIn(img2, 2800, 800);
  fadeIn(img3, 6800, 800);
  fadeIn(img4, 11000, 800);

})();
