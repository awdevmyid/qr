var text_json;
var video = document.getElementById('capture');
var canvasElement = document.getElementById('canvas');
var canvas = canvasElement.getContext('2d'); // для QR
var qr_edit;
var qr_open;
var qr_size = document.documentElement.clientWidth * 0.75;
var qrcode = new QRCode(document.getElementById('qrcode'), {
	width:qr_size,
	height:qr_size
});
var copyText = document.getElementById("text");
// переключение камер
var videoSelect = document.getElementById('videoSource');
var device_platform = 'browser';
var languare = 'en';

var img_file = document.getElementById('img_file');
img_file.addEventListener('change', loadFiles);

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	device_platform = device.platform;
}
function getLang()
{
	if (navigator.languages != undefined) {
		languare = navigator.languages[0].substring(0,2); 
	} else {
		languare = navigator.languagesubstring(0,2)
	}
	if (languare != 'ru' && languare != 'en' && languare != 'ja'){
		languare = 'en'
	}
	texts()
}
function next_camera() {
	var select_id = videoSelect.options.selectedIndex;
	if (select_id + 1 >= videoSelect.length){
		videoSelect.options[0].selected = true;
		document.getElementById("camera_icon").src = 'img/camera_front.svg';
	} else {
		videoSelect.options[select_id + 1].selected = true;
		document.getElementById("camera_icon").src = 'img/camera_back.svg';
	}
	getStream();
}
videoSelect.onchange = getStream;
getStream().then(getDevices).then(gotDevices);
function getDevices() {
  return navigator.mediaDevices.enumerateDevices();
}
// определение камер
function gotDevices(deviceInfos) {
  window.deviceInfos = deviceInfos;
  for (const deviceInfo of deviceInfos) {
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
	if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
      videoSelect.appendChild(option);
    }
  }
  videoSelect.options[1].selected = true;
  getStream();
}
function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const videoSource = videoSelect.value;
  const constraints = {
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  };
  return navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream);
}
function gotStream(stream) {
  window.stream = stream;
	video.srcObject = stream;
	requestAnimationFrame(tick);
}
// QR декодер
function tick() {
	  if (video.readyState === video.HAVE_ENOUGH_DATA && !qr_edit) {
		canvasElement.height = video.videoHeight;
		canvasElement.width = video.videoWidth;
		canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
		var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
		var code = jsQR(imageData.data, imageData.width, imageData.height);
		if (code && code.data != '') {
			caught(code.data);
		} 
	}
	requestAnimationFrame(tick);
}
function caught(data) {
	window_open();
	if (data != ''){
	copyText.value = data
	}
	qrcode.makeCode(data);
	document.getElementById('qr_img').className = 'qr_close'
	creation_qr();
	
}
function window_open() {
	qr_edit = true;
	document.getElementById('window').className = 'window_open shadow'
	video.className = 'blur_on'
}
function window_close() {
	if (qr_open) {fill_qr();}
	qr_edit = false;
	document.getElementById('window').className = 'window_close shadow'
	video.className = 'blur_off'
}
// создание qr па нажатию
function creation_qr(){
	qrcode.makeCode(copyText.value, {
	});
	document.getElementById('qr_img').className = 'qr_close'
}
// увеличение qr
function fill_qr() {
	var landscape = (window.innerWidth > window.innerHeight);
	if (qr_open){
		qr_open = false;
		document.getElementById('qr_img').className = 'qr_close'
		document.getElementById('shirm').className = 'shirm_off'
	} else {
		qr_open = true;
		document.getElementById('shirm').className = 'shirm_on'
		if (landscape){
			document.getElementById('qr_img').className = 'qr_h_open'
		} else {
			document.getElementById('qr_img').className = 'qr_w_open'
		}
	}
}
makeCode();
function copy() {
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	creation_qr();
	window.navigator.vibrate(150);
}
function paste() {
	copyText.focus();
	copyText.value = document.execCommand("Paste"); 
	creation_qr();
	window.navigator.vibrate(150);
}
function browser() {
	window.open(copyText.value ,'_system');
}
	
function texts(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			text_json = JSON.parse(this.responseText);
			document.getElementById('copu').innerHTML = text_json.copu[languare];
			document.getElementById('past').innerHTML = text_json.past[languare];
			document.getElementById('in_browser').innerHTML = text_json.in_browser[languare];
			document.getElementById('save').innerHTML = text_json.save[languare];
			document.getElementById('close').innerHTML = text_json.close[languare];
			document.getElementById('open_file').innerHTML = text_json.open_file[languare];
		}
	};
	xmlhttp.open("GET", 'lakit.json', true);
	xmlhttp.send();
}

//save image
function file_image() {
	if (device_platform == 'browser'){download_image()}
	else (save_image())
}
function download_image() {
	var d = new Date();
	var fileEntry = 'qr_' + d.getFullYear() + d.getMonth() + d.getDay() +'_'+ d.getHours() + d.getMinutes() + d.getSeconds() +'.png';
	var base = document.getElementById('qr_img').src
	download(base, fileEntry,'image/png')
	toast( text_json.save_file[languare] + ' ' + fileEntry); 
}
function save_image() {
	var d = new Date();
	var fileDir = '/Pictures/'; //cordova.file.externalDataDirectory.replace(cordova.file.externalRootDirectory, ''); ios cordova.file.documentsDirectory;
	var base = document.getElementById('qr_img').src
	var content = base.replace('data:image/png;base64,', '');
	var contentType = 'image/png';
	var fileEntry = 'qr_' + d.getFullYear() + d.getMonth() + d.getDay() +'_'+ d.getHours() + d.getMinutes() + d.getSeconds() +'.png';
	var filePath = fileDir + fileEntry;
	toast( text_json.save_file[languare] + ' ' + fileEntry); 
	savebase64AsImageFile(fileDir,filePath,content,contentType);
}
function savebase64AsImageFile(folderpath,filename,content,contentType){
	var DataBlob = b64toBlob(content,contentType,512);

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
		fs.root.getFile(filename, {create: true, exclusive: false }, function(file) {
			file.createWriter(function(fileWriter) {
				fileWriter.write(DataBlob);
			}, function(){
			});
		});
	});
}
function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;
	var byteCharacters = atob(b64Data);
	var byteArrays = [];
	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		var slice = byteCharacters.slice(offset, offset + sliceSize);
		var byteNumbers = new Array(slice.length);
		for (var i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}
		var byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
function toast (message) {
	var x = document.getElementById("toast");
	x.classList.remove("toast_anim");
	document.getElementById('toast_message').innerHTML = message
	void x.offsetParent;
	x.classList.add("toast_anim");
	
}
//Загрузка из файла
function openFiles() {
	img_file.click();
}
function loadFiles(e) {
    var ctx = document.getElementById('canvas_img').getContext('2d');
    var qr_photo = document.getElementById('qr_photo');
    qr_photo.src = URL.createObjectURL(e.target.files[0]);
    qr_photo.onload = function() {
        ctx.drawImage(qr_photo, 0,0, qr_photo.width, qr_photo.height);
		var imageData = ctx.getImageData(0, 0, 512, 512);
		var code = jsQR(imageData.data, imageData.width, imageData.height);
		if (code) {
			caught(code.data);
		} else {toast(text_json.error_scan[languare]); }
    }
}
