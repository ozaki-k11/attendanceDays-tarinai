var tab_list = document.getElementById("tab_list");
var tabs = tab_list.getElementsByTagName("input");
var tab_content = document.getElementById("tab_content");
var tab_item = tab_content.getElementsByClassName("tab_item");

changed();

for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("change", changed);
}
function changed() {
	for (var i = 0; i < tab_item.length; i++) {
		tab_item[i].style.display="none";
		if (tabs[i].checked) {
			tab_item[i].style.display="block";
		}
	}
}

var move_items = document.getElementsByClassName("move_img");
var display_check = document.getElementById("item4_val");
var dis_num = display_check.dis_check;
dis_num[0].onchange = function() {
	dis_change(0);
}
dis_num[1].onchange = function() {
	dis_change(1);
}
dis_num[2].onchange = function() {
	dis_change(2);
}
function dis_change(i) {
	if (dis_num[i].checked) {
		move_items[i].style.display = "block";
	} else {
		move_items[i].style.display = "none"
	}
}