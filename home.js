<script type="text/javascript">
	$("p").on("swiperight",function(){
		window.location.href="#pagetwo";
	});
	$(".anniu").on("taphold",function(){
		window.location.href="#pageone";
		// $("#video").get(0).pause();
	});

	$(function(){
		var a=300;
		function lock() {
			if(a==300){
				$(".l_cover").animate({left:a},1000);
				a=2;
			}else{
				$(".l_cover").animate({left:"50"},0);
				a=300;
			}
		}
		lock();
		setInterval(lock,1200);

		//获得本地时间
		function time() {
			var day = new Date()
			var Hday = day.getHours();
			var Mday = day.getMinutes();
			if(Hday<10){
				Hday = "0"+Hday;
			}
			if(Mday<10){
				Mday = "0"+Mday;
			}
			$(".time").text(Hday+":"+Mday);
			$(".n_center").text(Hday+":"+Mday);
		}
		time();
		setInterval(time,1000);

		//获取密码
		function num() {
			var b=-1;
			var i=0;
			var CodeArray=new Array();
			var answer=[1,1,0,9,true];
			$(".num").click(function(){
				var code = $(this).index()-3;
				if(code==10){
					code=0;
				}
				b++;
				$(".yanzhen > li").eq(b).addClass("white");
				CodeArray[i]=code;//将code存入素组
					if(i==3){
						for(var j=0;j<CodeArray.length;j++) {
							if(CodeArray[j]!=answer[j]){
								answer[4]=false;
								i=-1;
							}
						}
						if(answer[4]==true){
							window.location.href="#pagethree";
							$(".yanzhen > li").removeClass("white");
							b=-1;
							i=-1;
						}else{
							answer[4]=true;//重置
							$(".yanzhen > li").removeClass("white");
				 			b=-1;
							$(".yanzhen").effect("shake",500);
						}
					}
					i++;
			})
		};
		num();

		$(".video_anniu").tap(function(){
			$("audio").get(0).pause();
			$("#video").get(0).pause();
		});


		//循环播放不同视频
		function selectvideo() {
			$(".list1").click(function(){
				$("#video").attr({"src":"images/movie1.mp4","autoplay":"true"});
				// $("#video").get(0).play();
			});
			$(".list2").click(function(){
				$("#video").attr("src","images/movie2.mp4");
				$("#video").get(0).play();
			});
			$(".list3").click(function(){
				$("#video").attr("src","images/movie3.mp4");
				$("#video").get(0).play();
			});

				//点击返回暂停视频
			$(".play_back").tap(function(){
				$("#video").get(0).pause();
			});
		}
		selectvideo();

		//视频双击暂停或开始
		function dblvideo() {
			var touchtime = new Date().getTime();
			var staus = 0;
	    	$("#video").on("click", function(){
	    		//判断两次点击的时间差
		        if( new Date().getTime() - touchtime < 500 ){
		        	 if(staus==0) {
		            	$(this).get(0).pause();
		            	staus = 1;
		            }else{
		            	$(this).get(0).play();
		            	staus = 0;
		            }   
		        }else{
		            touchtime = new Date().getTime();
		        }
	   		})
    	};
    	dblvideo();

    	//设置照片墙旋转时间，及角度
    	var loop = 0;
    	function photoStage() {
    		if(loop==0) {
    			$(".stage").css("transform","rotateY(360deg) rotateX(360deg)");
    			loop=1;
    		}else{
    			$(".stage").css("transform","rotateY(0deg) rotateX(0deg)");
    			loop=0;
    		}
    	}
    	setInterval(photoStage,8000);

    	//点击图片换背景图
    	$(".stage > div").click(function(){
    		var b = $(this).index()+1;
    		for(var i=1;i<=12;i++){
    			$(".h5").removeClass("bg"+i);
    		}
    		$(".h5").addClass("bg"+b);
    	});

    	//隐藏、显示
    	$(".photo_hide").click(function(){
    		$(".photo_stage").hide("puff",2000);
    	});
    	$(".photo_show").click(function(){
    		$(".photo_stage").show("clip",2000);
    	});

    	//创建进度条
    	$(".i12").click(function(){
    		$(".h5_title").css("-webkit-animation","2s h5_1 infinite");
    		$(".h5_1").css({"-webkit-animation": "1.2s bg"});
    		$("audio").get(0).play();
    		var h=0;
    		function progress() {
    			$(".progressbar span").text(h+"%");
    			h++;
    			if(h>100){
    				clearInterval(pro);
    				$(".progressbar span").text("Click Me").effect("pulsate",1500);
    			}
    		}
    		var pro = setInterval(progress,50);
	    });

    	//h5第二个页面的动画
	    $(".progressbar").click(function(){
	    	$(".h5_2").css({"-webkit-animation": "1.2s bg"});
	    	$(".h5_2_font").toggle("explode",1000).animate({top:"260px"},1000).effect("bounce",1000);
	    });

	    //h5第三个页面的动画
	    $(".k1").click(function(){
	    	$(".h5_3").css({"-webkit-animation": "1.2s bg"});
	    	$(".f1").animate({left:"20px"},2000);
	    	$(".f2").animate({right:"20px"},3000);
	    });

	    //h5第四个页面的动画
	    $(".km1").click(function(){
	    	$(".h5_4").css({"-webkit-animation": "1.2s bg"});
	    	$(".h5_4_font2").show(2000).animate({top:"130px"},2000);
	    });
	    
	    //h5第五个页面的动画
	    $(".km2").click(function(){
	    	$(".h5_5").css({"-webkit-animation": "1.2s bg"});
	    });

	    //h5第六个页面的动画
	    $(".km3").click(function(){
	    	$(".h5_6").css({"-webkit-animation": "1.2s bg"});
	    	$(".h5_6_font").show("drop",1500);
	    });

	    //h5第七个页面的动画
	    $(".km4").click(function(){
	    	$(".h5_7").css({"-webkit-animation": "1.2s bg"});
	    });

	     //h5第八个页面的动画
	    $(".km5").click(function(){
	    	$(".h5_8").css({"-webkit-animation": "1.2s bg"});
	    	$(".h5_8_font").css("-webkit-animation","14s h5_4 infinite linear alternate");
	    });

	    //背景音乐的相关动画及事件
	    var play = 1;
	    $(".music").click(function(){
	    	if(play==1){
	    		$(this).css({"background":"url(images/music2.png) no-repeat","background-size": "100%"});
	    		$("audio").get(0).pause();
	    		play = 0;
	    	}else {
	    		$(this).css({"background":"url(images/music1.png) no-repeat","background-size": "100%"});
	    		$("audio").get(0).play();
	    		play = 1;
	    	}
	    })
	});



	//$('#videoPlayer')给你一个jQuery对象和jQuery对象没有一个play方法。您正在寻找的播放方法是在jQuery对象中的本机dom元素。要访问元素里面只需使用数组语法或.get()。例如$('#videoPlayer')[0].play();或$('#videoPlayer').get(0).play();
</script>