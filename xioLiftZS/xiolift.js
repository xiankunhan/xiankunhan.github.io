var btn =document.querySelectorAll(".XL-LPT");
var btndiv=document.querySelectorAll(".XL-right");
var icont =document.querySelectorAll(".XL-left i");
var Abtn =document.querySelectorAll(".XL-rightLeftContent01");
var Acontent =document.querySelectorAll(".XL-rightRight01");
var Gbtn =document.querySelectorAll(".secondLevel-title07");
var Gcontent =document.querySelectorAll(".secondLevel-content07");
var Gyin =document.querySelectorAll(".secondLevel-content07>div");
var Gimg =document.querySelectorAll(".secondLevel-content07 i");
var Gright =document.querySelectorAll(".XL-rightright07");
var gunTiao =document.querySelectorAll(".XL-AllDecorateRfoot div");
for (var i = 0; i < btn.length; i++){
	btn[i].index = i;
	btn[i].onmouseover=function(){
		this.style.cursor='pointer';
	}
	btn[i].onmouseout=function(){
		this.style.cursor='';
	}

	btn[i].onclick=function(e){
		var even = e||evetnt;
        even.preventDefault();
			
		for (var k = 0; k < btn.length; k++) {
            icont[k].style.color="#b3b3b3"
			btn[k].style.backgroundImage="url(xioimg/btnQ.png)";
			btn[k].style.color="";
			btndiv[k].style.display="none";
		}
		this.style.backgroundImage="url(xioimg/btnH.png)";
		this.style.color="#2C7AD9";
        icont[this.index].style.color="#2C7AD9";
	    btndiv[this.index].style.display="inline-block";
	    
	    $('.scroll-pane').jScrollPane();
}	
}

//点击二级显示三级
  function erChangeSan(two,three){
  	for (var l = 0; l < two.length; l++) {
	two[l].index = l;
	two[l].onclick=function(){
		for (var j = 0; j < two.length; j++) {
			two[j].style.backgroundColor="#475f96";
			
			three[j].style.display="none";
		}
		this.style.backgroundColor="#fa8346";
	
		three[this.index].style.display="inline-block";
	
}
}
  }
 erChangeSan($('.erji01 div'),$('.sanji01'));
 erChangeSan($('.erji03 div'),$('.sanji03'));
 erChangeSan($('.erji04 div'),$('.sanji04'));
 erChangeSan($('.erji05 div'),$('.sanji05'));



//888
var Hbtn =document.querySelectorAll(".secondLevel-title08");
var Hcont =document.querySelectorAll(".secondLevel-content08");
var Hbtnioc =document.querySelectorAll(".secondLevel-title08 i");
for (var i = 0; i < Hbtn.length; i++) {
	Hbtn[i].index = i;
	Hbtn[i].onclick=function(){
		if(this.style.backgroundColor=='rgb(250, 131, 70)'){
			for (var j = 0; j < Hbtn.length; j++) {
			Hbtn[j].style.backgroundColor='#475f96';
            Hbtnioc[j].innerHTML='&#xe606';
            Hcont[j].style.display="none";
	              }
		$('.scroll-pane').jScrollPane();

		}else{		
			for (var j = 0; j < Hbtn.length; j++) {
			Hbtn[j].style.backgroundColor='#475f96';
             Hbtnioc[j].innerHTML='&#xe606';
             Hcont[j].style.display="none";
	              }
			 Hcont[this.index].style.display="inline-block";
			 Hbtnioc[this.index].innerHTML='&#xe603';
			 this.style.backgroundColor='#fa8346'; 
				$('.scroll-pane').jScrollPane();
		}	
	}
}
var dingArr=['顶部第一','顶部第二','顶部第三','顶部第四','顶部第五'];
var dingImg=['xioimg/decoration/DIY/shinei/ding/Amian/ding-A01.png','xioimg/decoration/DIY/shinei/ding/Amian/ding-A02.png','xioimg/decoration/DIY/shinei/ding/Amian/ding-A03.png','xioimg/decoration/DIY/shinei/ding/Amian/ding-A04.png','xioimg/decoration/DIY/shinei/ding/Amian/ding-A05.png'];
var dingImgFan=['xioimg/decoration/DIY/shinei/ding/Bmian/ding-B01.png','xioimg/decoration/DIY/shinei/ding/Bmian/ding-B02.png','xioimg/decoration/DIY/shinei/ding/Bmian/ding-B03.png','xioimg/decoration/DIY/shinei/ding/Bmian/ding-B04.png','xioimg/decoration/DIY/shinei/ding/Bmian/ding-B05.png'];

var biArr=['jiaobi第一','jiaobi第二','jiaobi第三','jiaobi第四','jiaobi第五'];
var biImg=['xioimg/decoration/DIY/shinei/bi/Amian/bi-A01.png','xioimg/decoration/DIY/shinei/bi/Amian/bi-A02.png','xioimg/decoration/DIY/shinei/bi/Amian/bi-A03.png','xioimg/decoration/DIY/shinei/bi/Amian/bi-A04.png','xioimg/decoration/DIY/shinei/bi/Amian/bi-A05.png'];
var biImgFan=['xioimg/decoration/DIY/shinei/bi/Bmian/bi-B01.png','xioimg/decoration/DIY/shinei/bi/Bmian/bi-B02.png','xioimg/decoration/DIY/shinei/bi/Bmian/bi-B03.png','xioimg/decoration/DIY/shinei/bi/Bmian/bi-B04.png','xioimg/decoration/DIY/shinei/bi/Bmian/bi-B05.png'];

var diArr=['di第一','di第二','di第三','di第四','di第五','di第66','di第777'];
var diImg=['xioimg/decoration/DIY/shinei/di/Amian/di-A01.png','xioimg/decoration/DIY/shinei/di/Amian/di-A02.png','xioimg/decoration/DIY/shinei/di/Amian/di-A03.png','xioimg/decoration/DIY/shinei/di/Amian/di-A04.png','xioimg/decoration/DIY/shinei/di/Amian/di-A05.png','xioimg/decoration/DIY/shinei/di/Amian/di-A06.png','xioimg/decoration/DIY/shinei/di/Amian/di-A07.png'];
var diImgFan=['xioimg/decoration/DIY/shinei/di/Bmian/di-B01.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B02.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B03.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B04.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B05.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B06.png','xioimg/decoration/DIY/shinei/di/Bmian/di-B07.png'];

var menArr=['men第一','men第二','men第三','men第四','men第五'];
var menImg=['xioimg/decoration/DIY/shinei/men/men-Z01.png','xioimg/decoration/DIY/shinei/men/men-Z02.png','xioimg/decoration/DIY/shinei/men/men-Z03.png','xioimg/decoration/DIY/shinei/men/men-Z04.png','xioimg/decoration/DIY/shinei/men/men-Z05.png'];

var shouArr=['扶手金手第一','扶手银手第二'];
var shouImg=['xioimg/decoration/DIY/shinei/shou/shou-jin.png','xioimg/decoration/DIY/shinei/shou/shou-yin.png'];

var xiangArr=['箱第一','箱第二','箱第三','箱第四','箱第五'];
var xiangImg=['xioimg/decoration/DIY/shinei/xiang/xiang-01.png','xioimg/decoration/DIY/shinei/xiang/xiang-02.png','xioimg/decoration/DIY/shinei/xiang/xiang-03.png','xioimg/decoration/DIY/shinei/xiang/xiang-04.png','xioimg/decoration/DIY/shinei/xiang/xiang-05.png'];

var ceBtnArr=['按钮第一','按钮第二','按钮第三','按钮第四','按钮第五'];
var ceBtnImg=['xioimg/decoration/DIY/shinei/ceBtn/ceBtn-01.png','xioimg/decoration/DIY/shinei/ceBtn/ceBtn-02.png','xioimg/decoration/DIY/shinei/ceBtn/ceBtn-03.png','xioimg/decoration/DIY/shinei/ceBtn/ceBtn-04.png','xioimg/decoration/DIY/shinei/ceBtn/ceBtn-05.png'];

var qianBtnArr=['右前第一','右前第二','右前第三','右前第四','右前第五'];
var qianBtnImg=['xioimg/decoration/DIY/shinei/qianBtn/qianBtn01.png','xioimg/decoration/DIY/shinei/qianBtn/qianBtn02.png','xioimg/decoration/DIY/shinei/qianBtn/qianBtn03.png','xioimg/decoration/DIY/shinei/qianBtn/qianBtn04.png','xioimg/decoration/DIY/shinei/qianBtn/qianBtn05.png'];

	for (var i = 0; i < $('.dingDIY div').length; i++) {
		$('.dingDIY div')[i].index = i;
		$('.dingDIY div')[i].onclick=function(){
			for (var j = 0; j < $('.dingDIY div').length; j++) {
				$('.dingDIY i')[j].innerHTML='&#xe61d';
			}
			$('.dingDIY i')[this.index].innerHTML='&#xe61a';
			$('.DIY-showZheng img')[0].src= dingImg[this.index];
			$('.DIY-showFan img')[0].src=dingImgFan[this.index];;
			$('.DIY-textureContent p')[0].innerHTML=dingArr[this.index];
		}
}
for (var i = 0; i < $('.biDIY div').length; i++) {
		$('.biDIY div')[i].index = i;
		$('.biDIY div')[i].onclick=function(){
			for (var j = 0; j < $('.biDIY div').length; j++) {
				$('.biDIY i')[j].innerHTML='&#xe61d';
			}
			$('.biDIY i')[this.index].innerHTML='&#xe61a';
		
			$('.DIY-showZheng img')[1].src=biImg[this.index];
			$('.DIY-showFan img')[1].src=biImgFan[this.index];
			$('.DIY-textureContent p')[1].innerHTML=biArr[this.index];
		}
}
for (var i = 0; i < $('.diDIY div').length; i++) {
		$('.diDIY div')[i].index = i;
		$('.diDIY div')[i].onclick=function(){
			for (var j = 0; j < $('.diDIY div').length; j++) {
				$('.diDIY i')[j].innerHTML='&#xe61d';
			}
			$('.diDIY i')[this.index].innerHTML='&#xe61a';
		
			$('.DIY-showZheng img')[2].src=diImg[this.index];
			$('.DIY-showFan img')[2].src=diImgFan[this.index];
			$('.DIY-textureContent p')[2].innerHTML=diArr[this.index];
		}
}
for (var i = 0; i < $('.menDIY div').length; i++) {
		$('.menDIY div')[i].index = i;
		$('.menDIY div')[i].onclick=function(){
			if( $('.DIY-orientation div')[0].style.backgroundColor!=='rgba(120,150,247,1)'){
				$('.DIY-orientation div')[0].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[0].style.display='none';
			    $('.DIY-orientation div')[1].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[1].style.display='inline-block';
			}
			for (var j = 0; j < $('.menDIY div').length; j++) {
				$('.menDIY i')[j].innerHTML='&#xe61d';
			}
			$('.menDIY i')[this.index].innerHTML='&#xe61a';
		
			$('.DIY-showZheng img')[3].src=menImg[this.index];
			$('.DIY-textureContent p')[3].innerHTML=menArr[this.index];
		}
}
for (var i = 0; i < $('.shouDIY div').length; i++) {
		$('.shouDIY div')[i].index = i;
		$('.shouDIY div')[i].onclick=function(){
			if( $('.DIY-orientation div')[0].style.backgroundColor!=='rgba(120,150,247,1)'){
				$('.DIY-orientation div')[0].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[0].style.display='none';
			    $('.DIY-orientation div')[1].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[1].style.display='inline-block';
			}
			for (var j = 0; j < $('.shouDIY div').length; j++) {
				$('.shouDIY i')[j].innerHTML='&#xe61d';
			}
			$('.shouDIY i')[this.index].innerHTML='&#xe61a';
		
			$('.DIY-showZheng img')[4].src=shouImg[this.index];
			$('.DIY-textureContent p')[4].innerHTML=shouArr[this.index];
		}
}
for (var i = 0; i < $('.xiangDIY div').length; i++) {
		$('.xiangDIY div')[i].index = i;
		$('.xiangDIY div')[i].onclick=function(){
			if( $('.DIY-orientation div')[0].style.backgroundColor!=='rgba(120,150,247,1)'){
				$('.DIY-orientation div')[0].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[0].style.display='none';
			    $('.DIY-orientation div')[1].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[1].style.display='inline-block';
			}
			for (var j = 0; j < $('.xiangDIY div').length; j++) {
				$('.xiangDIY i')[j].innerHTML='&#xe61d';
			}
			$('.xiangDIY i')[this.index].innerHTML='&#xe61a';
			$('.DIY-showZheng img')[5].style.display='inline-block';
			$('.DIY-showZheng img')[6].style.display='inline-block';
			$('.DIY-showZheng img')[7].style.display='none';
			
			$('.DIY-textureContent p')[5].style.display='block';
			$('.DIY-textureContent span')[5].style.display='inline-block';
			$('.DIY-textureContent p')[6].style.display='block';
			$('.DIY-textureContent span')[6].style.display='inline-block';
			$('.DIY-textureContent p')[7].style.display='none';
			$('.DIY-textureContent span')[7].style.display='none';
		
			$('.DIY-showZheng img')[5].src=xiangImg[this.index];
			$('.DIY-textureContent p')[5].innerHTML=xiangArr[this.index];
			$('.scroll-pane').jScrollPane();
		}
}

for (var i = 0; i < $('.ceBtnDIY div').length; i++) {
		$('.ceBtnDIY div')[i].index = i;
		$('.ceBtnDIY div')[i].onclick=function(){
			if( $('.DIY-orientation div')[0].style.backgroundColor!=='rgba(120,150,247,1)'){
				$('.DIY-orientation div')[0].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[0].style.display='none';
			    $('.DIY-orientation div')[1].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[1].style.display='inline-block';
			}
			for (var j = 0; j < $('.ceBtnDIY div').length; j++) {
				$('.ceBtnDIY i')[j].innerHTML='&#xe61d';
			}
			$('.ceBtnDIY i')[this.index].innerHTML='&#xe61a';
			$('.DIY-showZheng img')[5].style.display='inline-block';
			$('.DIY-showZheng img')[6].style.display='inline-block';
			$('.DIY-showZheng img')[7].style.display='none';
			
			$('.DIY-textureContent p')[5].style.display='block';
			$('.DIY-textureContent span')[5].style.display='inline-block';
			$('.DIY-textureContent p')[6].style.display='block';
			$('.DIY-textureContent span')[6].style.display='inline-block';
			$('.DIY-textureContent p')[7].style.display='none';
			$('.DIY-textureContent span')[7].style.display='none';
		
			$('.DIY-showZheng img')[6].src=ceBtnImg[this.index];
			$('.DIY-textureContent p')[6].innerHTML=ceBtnArr[this.index];
			$('.scroll-pane').jScrollPane();
		}
}
for (var i = 0; i < $('.qianBtnDIY div').length; i++) {
		$('.qianBtnDIY div')[i].index = i;
		$('.qianBtnDIY div')[i].onclick=function(){
			if( $('.DIY-orientation div')[0].style.backgroundColor!=='rgba(120,150,247,1)'){
				$('.DIY-orientation div')[0].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[0].style.display='none';
			    $('.DIY-orientation div')[1].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[1].style.display='inline-block';
			}
			for (var j = 0; j < $('.qianBtnDIY div').length; j++) {
				$('.qianBtnDIY i')[j].innerHTML='&#xe61d';
			}
			$('.qianBtnDIY i')[this.index].innerHTML='&#xe61a';
			
		    $('.DIY-showZheng img')[5].style.display='none';
		    $('.DIY-showZheng img')[6].style.display='none';
		    $('.DIY-showZheng img')[7].style.display='inline-block';
		    $('.DIY-showZheng img')[7].src=qianBtnImg[this.index];
		    
			$('.DIY-textureContent p')[5].style.display='none';
			$('.DIY-textureContent span')[5].style.display='none';
			$('.DIY-textureContent p')[6].style.display='none';
			$('.DIY-textureContent span')[6].style.display='none';
			$('.DIY-textureContent p')[7].style.display='block';
			$('.DIY-textureContent span')[7].style.display='inline-block';
			$('.DIY-textureContent p')[7].innerHTML=qianBtnArr[this.index];
			$('.scroll-pane').jScrollPane();
		}
}
for (var i = 0; i < $('.DIY-orientation div').length; i++) {
	$('.DIY-orientation div')[i].index = i;
	$('.DIY-orientation div')[i].onclick=function(){
			for (var j = 0; j < $('.DIY-orientation div').length; j++) {
				$('.DIY-orientation div')[j].style.backgroundColor='rgba(0,0,0,0.3)';
				$('.DIY-show')[j].style.display='none';
			}
			    $('.DIY-orientation div')[this.index].style.backgroundColor='rgba(120,150,247,1)';
			    $('.DIY-show')[this.index].style.display='inline-block';
	
		}
	
}

//999
var tingArr=['厅门第一','厅门第二','厅门第三','厅门第四','厅门第五'];
var tingImg=['xioimg/decoration/DIY/shinei/ting/tingmen01.png','xioimg/decoration/DIY/shinei/ting/tingmen02.png','xioimg/decoration/DIY/shinei/ting/tingmen03.png','xioimg/decoration/DIY/shinei/ting/tingmen04.png','xioimg/decoration/DIY/shinei/ting/tingmen05.png'];
for (var i = 0; i < $('.ting-two div').length; i++) {
	$('.ting-two div')[i].index=i;
	$('.ting-two div')[i].onclick=function(){
		for (var j = 0; j <  $('.ting-two div').length; j++) {
		 $('.ting-two i')[j].innerHTML='&#xe61d';
	    }
		 $('.ting-two i')[this.index].innerHTML='&#xe61a';
		 $('.ting-smaill img')[0].src=tingImg[this.index];
		 $('.ting-show img')[0].src=tingImg[this.index];
		 $('.ting-box p')[0].innerHTML=tingArr[this.index];
		 
	}
	
}


//公司简介视频

function openOne(){
	$('.pic-One')[0].style.display='none';
	$('.video-One')[0].style.display='block';
	$('.video-One video')[0].play();
}
function closeOne(){
	$('.pic-One')[0].style.display='block';
	$('.video-One')[0].style.display='none';
	$('.video-One video')[0].pause();

}


//屏保轮播图
//var timer;
//window.onload = document.onmousemove = document.onkeydown = function () {
//  clearTimeout(timer);
//  timer = setTimeout(function () {
//     $('#pingbao')[0].style.display='block';
//     
//  }, 60*1000);
//}
//
//function xiao(){
//	$('#pingbao')[0].style.display='none';
//}


//sind 轮播
for (var i = 0; i < $('#zturn2 img').length; i++) {
 	$('#zturn2 img')[i].index = i;	
 	$('#zturn2 img')[i].onclick=function(){
 		$('#zturn2')[0].style.display='none';
		$('.Sind-lunbo')[this.index].style.display='block';
		$(".sind-i")[0].style.display='block';
		$('.sind-left')[0].style.display='block';
		$('.sind-right')[0].style.display='block';
		var aa=this.index;
		$('.sind-left')[0].onclick=function(){		 
			 for (var k = 0; k <  $('.Sind-lunbo').length; k++) {
			 	 $('.Sind-lunbo')[k].style.display='none';
			 }			 
			if(aa==0){
				aa=3;
                $('.Sind-lunbo')[aa].style.display='block';
			}else {
				aa--;
				$('.Sind-lunbo')[aa].style.display='block';
			}
		}
		$('.sind-right')[0].onclick=function(){		 
			 for (var k = 0; k <  $('.Sind-lunbo').length; k++) {
			 	 $('.Sind-lunbo')[k].style.display='none';
			 }			 
			if(aa==3){
				aa=0;
                $('.Sind-lunbo')[aa].style.display='block';
			}else {
				aa++;
				$('.Sind-lunbo')[aa].style.display='block';
			}
		}
	}
 }	
function sindYC(){
	$('#zturn2')[0].style.display='block';
 	for (var i = 0; i < $('.Sind-lunbo').length; i++) {
		 for (var k = 0; k <  $('.Sind-lunbo').length; k++) {
			 	 $('.Sind-lunbo')[k].style.display='none';
			 }		
		$(".sind-i")[0].style.display='none';
		$('.sind-left')[0].style.display='none';
		$('.sind-right')[0].style.display='none';
 }	
};


//smart 轮播
 for (var i = 0; i < $('#zturn3 img').length; i++) {
 	$('#zturn3 img')[i].index = i;	
 	$('#zturn3 img')[i].onclick=function(){
 		$('#zturn3')[0].style.display='none';
		$('.samrt-lunbo')[this.index].style.display='block';
		$(".samrt-i")[0].style.display='block';
		$('.samrt-left')[0].style.display='block';
		$('.samrt-right')[0].style.display='block';
		var aa=this.index;
		$('.samrt-left')[0].onclick=function(){		 
			 for (var k = 0; k <  $('.samrt-lunbo').length; k++) {
			 	 $('.samrt-lunbo')[k].style.display='none';
			 }			 
			if(aa==0){
				aa=4;
                $('.samrt-lunbo')[aa].style.display='block';
			}else {
				aa--;
				$('.samrt-lunbo')[aa].style.display='block';
			}
		}
		$('.samrt-right')[0].onclick=function(){		 
			 for (var k = 0; k <  $('.samrt-lunbo').length; k++) {
			 	 $('.samrt-lunbo')[k].style.display='none';
			 }			 
			if(aa==4){
				aa=0;
                $('.samrt-lunbo')[aa].style.display='block';
			}else {
				aa++;
				$('.samrt-lunbo')[aa].style.display='block';
			}
		}
	}
 }	
function samrtYC(){
	$('#zturn3')[0].style.display='block';
 	for (var i = 0; i < $('.samrt-lunbo').length; i++) {
		 for (var k = 0; k <  $('.samrt-lunbo').length; k++) {
			 	 $('.samrt-lunbo')[k].style.display='none';
			 }		
		$(".samrt-i")[0].style.display='none';
		$('.samrt-left')[0].style.display='none';
		$('.samrt-right')[0].style.display='none';
 }	
};




//777
 $('.sind-btn').click(function(){
 	if($('.sind-btn').css("background-color") =='rgb(250, 131, 70)'){
 		$('.sind-btn').css('background','');
 		$('.sind-btn i').html("&#xe606;");
   		$('.sind-title').css('display','none');

 	}else{
 		$('.sind-btn').css('background','rgb(250, 131, 70)');
 		$('.sind-btn i').html("&#xe603;");
   		$('.sind-title').css('display','block');
   		$('.sind-content').css('display','block');
   		$('.smart-content').css('display','none');
   		
   		$('.smart-btn').css('background','');
 		$('.smart-btn i').html("&#xe606;");
   		$('.smart-title').css('display','none');
 
 	}
 });
  $('.smart-btn').click(function(){
 	if($('.smart-btn').css("background-color") =='rgb(250, 131, 70)'){
 		$('.smart-btn').css('background','');
 		$('.smart-btn i').html("&#xe606;");
   		$('.smart-title').css('display','none');

 	}else{
 		$('.smart-btn').css('background','rgb(250, 131, 70)');
 		$('.smart-btn i').html("&#xe603;");
   		$('.smart-title').css('display','block');
   		$('.smart-content').css('display','block');
   		$('.sind-content').css('display','none');
   		
   		$('.sind-btn').css('background','');
 		$('.sind-btn i').html("&#xe606;");
   		$('.sind-title').css('display','none');

 	}
 });
 
for (var i = 0; i < $('.secondLevel-title07').length; i++) {
	$('.secondLevel-title07')[i].index = i;
	$('.secondLevel-title07')[i].onclick=function(){
       if($('.secondLevel-content07')[this.index].style.display=='none'){
		for (var k = 0; k < $('.secondLevel-title07').length; k++) {
			$('.secondLevel-title07 i')[k].innerHTML='&#xe606';
			$('.secondLevel-content07')[k].style.display='none';
		}
		$('.secondLevel-title07 i')[this.index].innerHTML='&#xe603;';
		$('.secondLevel-content07')[this.index].style.display='block';		
	}else{
		for (var k = 0; k < $('.secondLevel-title07').length; k++) {
			$('.secondLevel-title07 i')[k].innerHTML='&#xe606';
			$('.secondLevel-content07')[k].style.display='none';
		}

	}
	}
}


for (var i = 0; i < $('.PAF-xuanze').length; i++) {
	$('.PAF-xuanze')[i].index=i;
	$('.PAF-xuanze')[i].onclick=function(e){
		        var even = e || evetnt;
                even.preventDefault();
                
		for (var k = 0; k < $('.PAF-xuanze i').length; k++) {
			$('.PAF-xuanze i')[k].innerHTML='&#xe61d;';
			$('.XL-rightright07')[k].style.display='none';
			$('.content')[k].style.display='none';
		}
		    $('.PAF-xuanze i')[this.index].innerHTML='&#xe61a;';
		    $('.XL-rightright07')[this.index].style.display='block';
		    $('.content')[this.index].style.display='block';
		    $('.scroll-pane').jScrollPane();
		
	}
}


function changePicture(changeQ,changeH){
	for (var l = 0; l <changeQ.length; l++) {
	changeQ[l].index = l;
	changeQ[l].onclick=function(){
		for (var j = 0; j < changeQ.length; j++) {
			changeQ[j].style.backgroundColor="rgba(0,0,0,0.3)";
			changeH[j].style.display="none";
		}
		changeQ[this.index].style.backgroundColor="rgba(120,150,247,1)";
		changeH[this.index].style.display="inline-block";
		$('.scroll-pane').jScrollPane();
}
}
}
changePicture($('.XL-AllDecorate-change01'),$('.XL-AllDecorateM-change01 img'));
changePicture($('.XL-AllDecorate-change02'),$('.XL-AllDecorateM-change02 img'));
changePicture($('.XL-AllDecorate-change03'),$('.XL-AllDecorateM-change03 img'));
changePicture($('.XL-AllDecorate-change04'),$('.XL-AllDecorateM-change04 img'));
changePicture($('.XL-AllDecorate-change05'),$('.XL-AllDecorateM-change05 img'));
changePicture($('.XL-AllDecorate-change06'),$('.XL-AllDecorateM-change06 img'));
changePicture($('.XL-AllDecorate-change07'),$('.XL-AllDecorateM-change07 img'));
changePicture($('.XL-AllDecorate-change08'),$('.XL-AllDecorateM-change08 img'));
changePicture($('.XL-AllDecorate-change09'),$('.XL-AllDecorateM-change09 img'));

changePicture($('.XL-AllDecorate-change10'),$('.XL-AllDecorateM-change10 img'));
changePicture($('.XL-AllDecorate-change11'),$('.XL-AllDecorateM-change11 img'));
changePicture($('.XL-AllDecorate-change12'),$('.XL-AllDecorateM-change12 img'));
changePicture($('.XL-AllDecorate-change13'),$('.XL-AllDecorateM-change13 img'));
