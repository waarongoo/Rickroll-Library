var test = function (opt) {
  if (!opt) {
	  window.onclick = test.showup;
	  window.ontouchmove = test.showup;
  };
  if (opt) {
	if (typeof(opt) !== 'object') {
		throw new TypeError("The 'option' argument must be type of object, Received instead of "+typeof(opt));
		return false;
	};
	if (opt.click) {
		window.onclick = test.showup;
		window.onclick = test.showup;
	};
	if (opt.scroll) window.onscroll = test.showup;
	if (opt.mousemove) window.onmousemove = test.showup;
	if (opt.mouseenter) window.onmouseenter = test.showup;
	if (opt.mouseleave) window.onmouseleave = test.showup;
	if (opt.mousewheel) window.onmousewheel = test.showup;
	if (opt.drag) window.ondrag = test.showup;
	if (opt.select) {
		window.onselect = test.showup;
		window.onselectstart = test.showup;
		window.onselectionchange = test.showup;
	};
	if (opt.input) {
		window.oninput = test.showup;
		window.onkeydown = test.showup;
		window.onkeypress = test.showup;
		window.onkeyup = test.showup;
	};
	if (opt.resize) window.onresize = test.showup;
  };
  console.log("[test.js] Now listening to some click event....");
};
test.video = "https://replit.club/movie.mp4";
test.showup = function () {
  console.log("[test.js] test.showup() called. hahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahahhahahahhahahahahahhahahahahahahhahahah");
  
  var video = document.createElement("video");
  video.load();
  video.src = test.video;
  video.style.display = "block";
  video.style.width = "100%";
  video.style.height = "auto";
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.bottom = "0";
  video.style.left = "0";
  video.style.right = "0";
  video.loop = true;
  video.play().then(() => {
	document.open();
	document.appendChild(video);
	document.close();
  }).catch(console.error);
};