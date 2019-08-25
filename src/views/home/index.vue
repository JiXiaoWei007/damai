<template>
  <f7-page :page-content="false">
   
   <!-- <f7-navbar title="3D Coverflow Effect" back-link="Back"></f7-navbar> -->
    <f7-toolbar :position="toolbarPosition" tabbar scrollable>
      <f7-link
        v-for="(tab, index) in tabs"
        :key="tab"
        :tab-link="`#tab-${tab}`"
        :tab-link-active="index === 0"
        >Tab {{tab}}</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab
        v-for="(tab, index) in tabs"
        :key="tab"
        :id="`tab-${tab}`"
        class="page-content"
        :tab-active="index === 0"
      >
        <f7-block>
			<div class="bjt">
				<a class="bj">北京</a>
				<input type="text" />
				<div class="mz">
					<a href="">张韶涵</a>
					<a href="">篮球世界杯</a>
					<a href="">初音未来</a>
					<a href="">张杰</a>
					<a href="">王力宏</a>
				</div>
				<div id="container">
				            <div id="list" style="left: -600px;">
				                <img src="../../assets/logo.png" alt="1" />
				                <img src="" alt="2" />
				                <img src="" alt="3" />
				                <img src="" alt="4" />
				                <img src="" alt="5" />
				                <img src="" alt="6" />
								<img src="" alt="7" />
								<img src="" alt="8" />
								<img src="" alt="9" />
								<img src="" alt="10" />
				            </div>
				            <div id="buttons">
				                <span index="1" class="on"></span>
				                <span index="2"></span>
				                <span index="3"></span>
				                <span index="4"></span>
				                <span index="5"></span>
								<span index="6"></span>
								<span index="7"></span>
								<span index="8"></span>
								<span index="9"></span>
								<span index="10"></span>
				            </div>
				           <a href="javascript:;" id="prev" class="arrow">&lt;</a>
				            <a href="javascript:;" id="next" class="arrow">&gt;</a>
				 </div>
					
		</div>
				<ul class="xm">
					<li>
						<img src="../../assets/img/yanchanghui_03.png" alt="">
						<a href="">演唱会</a>
					</li>
					<li>
						<img src="../../assets/img/gejv.png" alt="">
						<a href="">话剧歌剧</a>
						
					</li>
					<li>
						<img src="../../assets/img/yinyuehui.png" alt="">
						<a href="">音乐会</a>
					</li>
					<li>
						<img src="../../assets/img/tiyu.png" alt="">
						<a href="">体育</a>
					</li>
					<li>
						<img src="../../assets/img/quyuezatan.png" alt="">
						<a href="">曲苑杂坛</a>
					</li>
					<li>
						<img src="../../assets/img/ertongqinzi.png" alt="">
						<a href="">儿童亲子</a>
					</li>
					<li>
						<img src="../../assets/img/zhanlanxiuxian.png" alt="">
						<a href="">展览休闲</a>
					</li>
					<li>
						<img src="../../assets/img/wudao.png" alt="">
						<a href="">舞蹈芭蕾</a>
					</li>
					<li><a href="">暑期大促</a></li>
					<li>
						<img src="../../assets/img/bawangpiao.png" alt="">
						<a href="">霸王票</a>
					</li>
				</ul>	
			
				<div class="hz">
					<p class="bo">抢票播报站</p>
					<div class="qp">
						<a href=""></a>
					</div>
					<div class="dz">
						<a href="">【北京】同城乐享卡-北京站</a></br>
						<a href="">  4.8万人参与抢票</a>
						<p class="ys">￥66起</p>
						<a href="" class="qx">去抢票</a>
					</div>
				</div>
				<div class="dhl">
					<a href="">精选榜</a>
					<a href="">人气榜</a>
					<a href="">上新榜</a>
					<div class="zj"></div>
					<a href="" class="ly">未来有你.初音未来2019中...</a>
					<div class="cs"></div>
					<a href="" class="bl">法语原版音乐剧《巴黎圣母院》</a>
					<div class="yb"></div>
					<a href="" class="jy">国家大剧院2019国庆音...</a>
				</div>
				
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
		<link rel="stylesheet" type="" href=""/>
		<script src="jquery.js"></script>
		<script type="text/javascript" src="js.js"></script>

<script>
  import { f7Navbar, f7Page, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar, f7NavRight } from 'framework7-vue';
export default {
    data() {
      return {
        tabs: [1, 2, 3, 4, 5, 6, 7, 8,9,10],
        toolbarPosition: 'bottom',
      };
    },
    methods: {
      toggleToolbarPosition() {
        this.toolbarPosition = this.position === 'top' ? 'bottom' : 'top';
      },
    },
  };
	    window.onload = function() {
	        var list = document.getElementById('list');
	        var prev = document.getElementById('prev');
	        var next = document.getElementById('next');
	
	        function animate(offset) {
	            /*获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
	            且style.left获取的是字符串，需要用parseInt()取整转化为数字。*/
	            var newLeft = parseInt(list.style.left) + offset;
	            list.style.left = newLeft + 'px';
	            if(newLeft < -3000) {
	                list.style.left = -600 + 'px';
	            }
	            if(newLeft > -600) {
	                list.style.left = -3000 + 'px';
	            }
	        }
	        /*需要定位到按钮的样式*/
	        var buttons = document.getElementById('buttons').getElementsByTagName('span');
	        var index = 1;
	
	        function buttonShow() {
	            /*console.log(buttons.length);*/
	            /*清除之前的样式*/
	            for(var i = 0; i < buttons.length; i++) {
	                if(buttons[i].className === 'on') {
	                    buttons[i].className = '';
	                }
	            }
	            /*数组从0开始，temp从-1开始*/
	            buttons[index - 1].className = 'on';
	        }
	        /*上一步*/
	        prev.onclick = function() {
	                index = index - 1;
	                if(index < 1) {
	                    index = 10;
	                }
	                buttonShow();
	                animate(600);
	            }
	            /*下一步*/
	        next.onclick = function() {
	                index = index + 1;
	                if(index > 10) {
	                    index = 1;
	                }
	                buttonShow();
	                animate(-600);
	            }
	            /*自动循环播放*/
	        var timer;
	
	        function play() {
	            timer = setInterval(function() {
	                next.onclick();
	            }, 1500)
	        }
	        play();
	        /*鼠标放上（离开）对应轮播暂停（播放）*/
	        var container = document.getElementById('container');
	
	        function stop() {
	            clearInterval(timer);
	        }
	        container.onmouseover = stop;
	        container.onmouseout = play;
	
	        /*小圆点的点击事件*/
	        for(var i = 0; i < buttons.length; i++) {
	            /*使用立即函数*/
	            (function(i) {
	                buttons[i].onclick = function() {
	                    console.log(i);
	                    /*偏移量的获取：获取鼠标的小圆点的位置，用this把index绑定到对象buttons[i]上*/
	                    /*由于index是自定义属性，需要用到getAttribute()这个dom的2级方法，去获取自定义的index属性*/
	                    var clickIndex = parseInt(this.getAttribute('index'));
	                    var offset = 600 * (index - clickIndex);
	                    animate(offset);
	                    index = clickIndex;
	                    buttonShow();
	                }
	            })(i)
	        }
	    }
	
</script>


<style>
	
	
	           #container {
	                position: relative;
	                width: 340px;
	                height: 200px;
	                border: 3px solid #333;
	                overflow: hidden;
	            }
	            
	            #list {
	                position: absolute;
	                z-index: 1;
	                width:340px;
	                height: 200px;
	            }
	            
	            #list img {
	                /* float: left; */
	                width: 200px;
	                height: 200px;
					
	            }
	            
	            #buttons {
	                position: absolute;
	                left: 100px;
	                bottom:10px;
	                z-index: 2;
	                height: 10px;
	                width: 200px;
					display: inline-block;
	            }
	            
	            #buttons span {
	                float: left;
	                margin-right: 5px;
	                width: 10px;
	                height: 10px;
	                border: 1px solid #fff;
	                border-radius: 50%;
	                background: #333;
	                cursor: pointer;
					
	            }
	            
	            #buttons .on {
	                background: orangered;
	            }
	            
	            .arrow {
	                position: absolute;
	                top: 180px;
	                z-index: 2;
	                display: none;
	                width: 40px;
	                height: 40px;
	                font-size: 36px;
	                font-weight: bold;
	                line-height: 35px;
	                text-align: center;
	                color: #fff;
	                background-color: RGBA(0, 0, 0, .3);
	                cursor: pointer;
	            }
	            
	            .arrow:hover {
	                background-color: RGBA(0, 0, 0, .7);
	            }
	            
	            #container:hover .arrow {
	                display: block;
	            }
	            
	            #prev {
	                left: 20px;
	            }
	            
	            #next {
	                right: 20px;
	            } 
	 .swiper-wrapper{
		display:inline-block;
		height:800px;
		width:800px;
		z-index: 1;
	}
	 ul {		
		 
	          list-style:none;
	        }
	        .loop{
	            position: relative;
	            margin:30px auto;
	           
	        }
			.xm {
				width:340px;
				height:100px;
				
			}
			.xm li{
				display: inline-block;
			}
			.xm img{
				width:30px;
				height:30px;
				margin-left:-50px;
				margin-top:5px;
			}
			.xm a{
				height:50px;
				width:65px;
				display: inline-block;
				float: left;
				text-align:center;
				line-height: 80px;
			}
			.hz{
				border:1px solid #ccc;
				width:340px;
				height:100px;
				margin-top:20px;
			}
			.bo{
				margin-left:5px;
			}
			.qp{
				width:60px;
				height:60px;
				border:1px solid #ccc;
				float: left;
				margin-left:5px;
				margin-top:-12px;
			}
			.dz{
				width:260px;
				height:60px;
				float: left;
				margin-top:-15px;
				margin-left:5px;
			}
			.ys{
				color:#ff1268;
				margin-top:-1px;
				
			}
			.qx{
				display: block;
				width:60px;
				height:25px;
				line-height:25px;
				text-align: center;
				border:1px solid #ccc;
				border-radius:25px;
				background-color:#ff1268;
				float: right;
				margin-top:-35px;
			}
			.dhl{
				width:100%;
				font-size: 20px;
				margin-top:20px;
			}
			.dhl a{
				width:70px;
				
			}
			.zj{
				width:100px;
				height:130px;
				border:1px solid #ccc;
				display:block;
				margin-top:10px;
			}
			.ly{
				display:inline-block;
				font-size:10px;
				text-align: center;
				margin-top:10px;
			}
			.cs{
				width:100px;
				height:130px;
				border:1px solid #ccc;
				display:block;
				text-align: center;
				margin-left:120px;
				margin-top:-174px;
			}
			.bl{
				display:inline-block;
				font-size:10px;
				text-align: center;
				margin-left:130px;
				margin-top:10px;
			}
			.yb{
				width:100px;
				height:130px;
				display:block;
				border:1px solid #ccc;
				margin-left:240px;
				margin-top:-173px;
			}
			.jy{
				display:inline-block;
				font-size:10px;
				text-align: center;
				margin-left:260px;
				margin-top:10px;
			}
			
			
			
</style>

