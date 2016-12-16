$(function() {
    // 新闻菜单切换
    switchNewsMenu();

    var Tags05 = document.getElementById('pat05_menu').getElementsByTagName('p');
    var TagsCnt05 = document.getElementById('tabox05').getElementsByTagName('ul');
    var len05 = Tags05.length;
    var flag05 = 1; //修改默认值
    for (i = 1; i < len05; i++) {
        Tags05[i].value = i;
        Tags05[i].onmouseover = function() {
            changeNav05(this.value)
        };
        TagsCnt05[i].className = 'undis';
    }
    Tags05[flag05].className = 'topC1';
    TagsCnt05[flag05].className = 'dis';
    function changeNav05(v) {
        Tags05[flag05].className = 'topC0';
        TagsCnt05[flag05].className = 'undis';
        flag05 = v;
        Tags05[v].className = 'topC1';
        TagsCnt05[v].className = 'dis';
    }
    function changeNav06(v) {
        Tags06[flag06].className = 'topC0';
        TagsCnt06[flag06].className = 'undis';
        flag06 = v;
        Tags06[v].className = 'topC1';
        TagsCnt06[v].className = 'dis';
    }
});

function chooseZhikuType(s_id) {
    for (i = 1; i < 9; i++) {
        if (i == s_id) {
            document.getElementById("s" + i).className = "block"; //内容的样式
            document.getElementById("m" + i).className = "c_" + i + " c_1"; //头部的样式
            //document.getElementById("uid_"+i).focus();
        } else {
            document.getElementById("s" + i).className = "none"; //内容不显示
            document.getElementById("m" + i).className = "c_0"; //
        }
    }
}
function Marquee() {
    if (demo.scrollLeft >= marquePic1.scrollWidth) {
        demo.scrollLeft = 0
    } else {
        demo.scrollLeft++
    }
}
function switchNewsMenu() {
	var Tags = document.getElementById('notice_hd').getElementsByTagName('p');
	var TagsCnt = document.getElementById('notice_bd').getElementsByTagName('ul');
	var len = Tags.length;
	var flag = 1; //修改默认值
	for (i = 1; i < len; i++) {
	    Tags[i].value = i;
	    Tags[i].onmouseover = function() {
	        changeNav(this.value)
	    };
	    TagsCnt[i].className = 'undis';
	}
	Tags[flag].className = 'notice_on';
	TagsCnt[flag].className = 'dis';

	function changeNav(v) {
	    Tags[flag].className = 'notice_p';
	    TagsCnt[flag].className = 'undis';
	    flag = v;
	    Tags[v].className = 'notice_on';
	    TagsCnt[v].className = 'dis';
	}
}