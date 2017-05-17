<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>home</title>
	<link rel="stylesheet" type="text/css" href="jquery.mobile-1.4.5.min.css">
	<link rel="stylesheet" type="text/css" href="jquery-ui.min.css">
	<script src="jquery-1.7.2.min.js"></script>
	<script src="jquery.mobile-1.4.5.min.js"></script>
	<script src="jquery-ui.min.js"></script>
</head>
<?php include("home.css");?>
<body>
	<div data-role="page" id="pageone">
		<header class="h1">
			<nav>
				<div class="n_left">
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle"></div>
					<div class="circle"></div>
					&nbsp;中国联通&nbsp;4G
				</div>
				<div class="electirc">
					100%<div class="dian"></div>
				</div>
			</nav>
			<p class="time">12:54</p>
			<p class="data">3月06 星期一</p>
			<p class="clock">>> 滑动解锁</p>
			<div class="l_cover"></div>
		</header>
	</div>
	<div data-role="page" id="pagetwo">
		<header class="h1">
			<nav>
				<div class="n_left">
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle"></div>
					<div class="circle"></div>
					&nbsp;中国联通&nbsp;4G
				</div>
				<div class="electirc">
					100%<div class="dian"></div>
				</div>
			</nav>
			<div class="cover"></div>
			<p class="code">输 入 密 码</p>
			<ul class="yanzhen">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div class="num n1" val="1">1</div>
			<div class="num n2">2<br><span>A B C</span></div>
			<div class="num n3">3<br><span>D E F</span></div>
			<div class="num n4">4<br><span>G H I</span></div>
			<div class="num n5">5<br><span>J K L</span></div>
			<div class="num n6">6<br><span>M N O</span></div>
			<div class="num n7">7<br><span>P Q R S</span></div>
			<div class="num n8">8<br><span>T U V</span></div>
			<div class="num n9">9<br><span>W X Y Z</span></div>
			<div class="num n0">0</div>
			<div class="jinji">紧急情况</div>
			<a href="#pageone" data-transition="slide">
				<div class="del">取消</div>
			</a>
		</header>
	</div>
	<div data-role="page" id="pagethree">
		<header class="h3">
			<nav>
				<div class="n_left">
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle c"></div>
					<div class="circle"></div>
					<div class="circle"></div>
					&nbsp;中国联通&nbsp;4G
				</div>
				<div class="n_center">08:57</div>
				<div class="electirc">
					100%<div class="dian"></div>
				</div>
			</nav>
			<footer>
			</footer>
			<div class="icon i1">
				<span>电话</span>
			</div>
			<div class="icon i2">
				<span>信息</span>
			</div>
			<div class="icon i3">
				<span>相机</span>
			</div>
			<div class="icon i4">
				<span>Safari</span>
			</div>
			<a href="#pagephoto" data-transition="pop">
				<div class="icon i5">
					<span>照片</span>
				</div>
			</a>
			<div class="icon i6">
				<span>游戏中心</span>
			</div>
			<div class="icon i7">
				<span>视频</span>
			</div>
			<div class="icon i8">
				<span>App store</span>
			</div>
			<div class="icon i9">
				<span>天气</span>
			</div>
			<div class="icon i10">
				<span>设置</span>
			</div>
			<a href="#pagevideo" data-transition="pop">
				<div class="icon i11">
					<span>万能播放</span>
				</div>
			</a>
			<a href="#pageh5" data-transition="pop">
				<div class="icon i12">
					<span>h5</span>
				</div>
			</a>
			<a href="#pagethree" data-transition="pop">
				<div class="anniu"></div>
			</a>
		</header>
	</div>
	<?php include("viedo.html");?>
	<?php include("photo.html");?>
	<?php include("h5.html");?>
</body>
</html>
<?php include("home.js");?>