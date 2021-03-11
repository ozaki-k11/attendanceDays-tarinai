const interval = 50;

var tab_contents = document.getElementById("tab_content");
var status_ar = tab_contents.getElementsByClassName("forms");

var img_1 = {
	id : "img_1",
	inp_x : 0,
	pos_x : 0,
	inp_y : 0,
	pos_y : 0,
	move_x : 0,
	move_y : 0,
	bool : false,
	def_pass : "https://2.bp.blogspot.com/-ATeK3epKIZ0/XDXbikwtyqI/AAAAAAABRBE/txCvkKGRPA4B5_oeRu0gWjH8WH-65l-ZgCLcBGAs/s400/bird_Takahe.png"
}
var img_2 = {
	id : "img_2",
	inp_x : 0,
	pos_x : 0,
	inp_y : 0,
	pos_y : 0,
	move_x : 0,
	move_y : 0,
	bool : false,
	def_pass : "https://4.bp.blogspot.com/-hBEnxhO8fjc/W8BOGryIf2I/AAAAAAABPVs/TWoScpc8jUonypEy1Fj01n-PrC-9gI5gACLcBGAs/s400/bird_kojukei.png"
}
var img_3 = {
	id : "img_3",
	inp_x : 0,
	pos_x : 0,
	inp_y : 0,
	pos_y : 0,
	move_x : 0,
	move_y : 0,
	bool : false,
	def_pass : "https://4.bp.blogspot.com/-Lw4gLAV0hHU/VSufJN_gDFI/AAAAAAAAs3A/ZmbsCwudDbw/s400/bird_toki.png"
}
var img_4 = false;

var img_ar = [ img_1, img_2, img_3 ];

function change_status(i) {
	img_ar[i].bool = false;
	img_ar[i].pos_x = img_ar[i].inp_x = +status_ar[i].inp_x.value;
	img_ar[i].pos_y = img_ar[i].inp_y = +status_ar[i].inp_y.value;
	img_ar[i].move_x = +status_ar[i].move_x.value;
	img_ar[i].move_y = +status_ar[i].move_y.value;
	console.log(img_ar[i]);
	move(img_ar[i]);
}

function start(x) {
	if ( x === 3 ) {
		if ( img_4 ) {
			img_4 = false;
		} else {
			img_4 = true;
		}
		for (var i = 0; i < img_ar.length; i++) {
			img_ar[i].bool = img_4;
		}
	} else {
		if ( img_ar[x].bool ) {
			img_ar[x].bool = false;
		} else {
			img_ar[x].bool = true;
		}
		if( img_ar[x].bool && img_ar[x].bool && img_ar[x].bool ) {
			img_4 = true;
		} else if ( !img_ar[x].bool && !img_ar[x].bool && !img_ar[x].bool ) {
			img_4 = false;
		}
	}
}

function move(ele) {
	document.getElementById(ele.id).style.left = ele.pos_x + "%";
	document.getElementById(ele.id).style.top = ele.pos_y + "%";
}

function pos() {
	for (var i = 0; i < img_ar.length; i++ ) {
		if ( img_ar[i].bool ) {
			if ( !(img_ar[i].pos_x >= 0) || !(img_ar[i].pos_y >= 0) ) {
				img_ar[i].pos_x = img_ar[i].inp_x;
				img_ar[i].pos_y = img_ar[i].inp_y;
			}
			img_ar[i].pos_x = img_ar[i].pos_x - img_ar[i].move_x;
			img_ar[i].pos_y = img_ar[i].pos_y - img_ar[i].move_y;
			move(img_ar[i]);
		}
	}
}

function disp() {
	pos();
	setTimeout("disp()", interval);
}

status_ar[0].oninput = function() {
	change_status(0);
}
status_ar[1].oninput = function() {
	change_status(1);
}
status_ar[2].oninput = function() {
	change_status(2);
}

/*for (var i = 0; i < status_ar.length; i++) {
	status_ar[i].oninput = function() {
		change_status(0);
	}
	console.log(i);
}*/

for (var i = 0; i < img_ar.length; i++ ) {
	change_status(i);
}

disp();