<template>
  <f7-page>
	<f7-nav-title></f7-nav-title>
    
	<f7-block>
		<div class="top">
		     <center> 
		        <ul>
		            <li><a href="#">演出</a></li>
		            <li><a href="#">大咖</a></li>
		            <li><a href="#">品牌</a></li>
					
		        </ul>
		      </center>      
		 </div>
		 <a class="tou">
			 <a href="">
				<img src="../../assets/img/ycbr.png" alt="">
			 </a>
			 <p class="jhy">简弘亦“亦X不染”演唱会北</br>京站</p>
			 <p class="kq">2019.09.27周五19:30</p>
			 <p class="jc">北京|北京展览馆剧场</p>
			 <div class="fs">简弘亦</div>
			 <div class="zs">可选座</div>
			 <p class="jg">￥380</p>
			 <p class="qi">起</p>
		 </a>
		 <a class="sjb">
			 <a href="">
				 <img src="../../assets/img/lqbs.png" alt="">
			 </a>
			 <p class="bjlq">2019年国际篮联篮球世界</br>杯--北京赛区</p>
			 <p class="hd">2019.08.31-09.15</p>
			 <p class="wks">北京|北京五棵松体育馆</p>
			 <div class="qztj">亲子推荐榜TOP1</div>
			 <div class="zw">可选座</div>
			 <p class="qbj">￥80</p>
			 <p class="zd">起</p>
		 </a>
		 <a class="tc">
			 <a href="">
				  <img src="../../assets/img/tclx.png" alt="">
			 </a>
			 <p class="lx">同城乐享卡-北京站</p>
			 <p class="cj">2019.08.16-08.31</p></br>
			 <p class="wz">北京|大麦网北京站</p>
			 <p class="tlj">￥66</p>
			 <p class="bjm">起</p>
		 </a>
		 <a class="cywl">
			 <a href="">
				 <img src="../../assets/img/cywl.png" alt="">
			 </a>
			 <p class="wlyc">未来有你.初音未来2019中国</br>巡回演唱会北京站</p>
			 <p class="zlcg">2019.11.16周六</p>
			 <p class="ckj">北京|M空间</p>
			 <div class="cyyc">演唱会人气榜TOP2</div>
			 <p class="cyjg">￥590</p>
			 <p class="cypqj">起</p>
		 </a>
		 <a class="mh">
			 <a href="">
				 <img src="../../assets/img/cqmyg.png" alt="">
			 </a>
			 <p class="">开心麻花2019爆笑舞台剧《窗前不止明月光》</p>
			 <p class="">2019.09.20-09.22</p>
			 <p class="">北京|北京展览馆剧场</p>
			 <p></p>
		 </a>	
	</f7-block>
    
  
   
  </f7-page>
</template>
<script>
 export default {
 	
}
</script>
<style>
	      .top{
	    /* 设置宽度高度背景颜色 */
	    height: auto; /*高度改为自动高度*/
	    width:100%;
	    margin-left: 0;
	    background:rgb(189, 171, 146);
	    position: fixed; /*固定在顶部*/
	    top: 0;/*离顶部的距离为0*/
	    margin-bottom: 5px;
	}
	.top ul{
	    /* 清除ul标签的默认样式 */
	    width: auto;/*宽度也改为自动*/
	    list-style-type: none;
	    white-space:nowrap;
	    overflow: hidden;
	    margin-left: 5%;
	    /* margin-top: 0;          */
	    padding: 0;
	
	}
	.top li {
	    float:left; /* 使li内容横向浮动，即横向排列  */
	    margin-right:23%;  /* 两个li之间的距离*/
	    position: relative;
	    overflow: hidden;
	}
	
	.top li a{
	   /* 设置链接内容显示的格式*/
	    display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
	    color:white;
	    text-align: center;
	    padding: 3px;
	    overflow: hidden;
	    text-decoration: none;
	    
	}
	.top li a:hover{
	    /* 鼠标选中时背景变为黑色 */
	    background-color: #111;
	}
	.top ul li ul{
	   
	    margin-left: -0.2px;
	    background:rgb(189, 181, 181);
	    position: relative;
	    display: none; 
	
	}
	.top ul li ul li{
	   
	    
	    float:none;
	    text-align: center;
	}
	.top ul li:hover ul{
	  
	    display: block;
	}
	body{
	    background:#eff3f5;
	}
	.tou{
		width:100%;
		height:150px;
		display: inline-block;
	}
	.tou img{
		width:120px;
		height:180px;
		display:inline-block;
	}
	.jhy{
		float: right;
		font-size: 18px;
		margin:0 auto;
	}
	.kq{
		margin-left:140px;
		margin-top:-120px;
	}
	.jc{
		margin-left:140px;
		margin-top:-10px;
	}
	.fs{
		width:45px;
		height:20px;
		margin-left:140px;
		color:#ff1268;
		background-color:#F6CEE3;
		text-align: center;
		display: inline-block;
		border-radius: 4px;
		font-size: 10px;
		line-height: 20px;
	}
	.zs{
		width:45px;
		height:20px;
		margin-left:190px;
		margin-top:-20px;
		color:#8000FF;
		border:1px solid #8000FF;
		text-align: center;
		border-radius: 4px;
		font-size: 10px;
		line-height: 20px;
	}
	.jg{
		font-size: 25px;
		color:#ff1268;
		margin-left:140px;
		margin-top:1px;
	}
	.qi{
		margin-left:210px;
		margin-top:-50px;
	}
	.sjb{
		width:100%;
		height:170px;
		display: inline-block;
		margin-top:20px;
	}
	.sjb img{
		width:120px;
		height:180px;
		
	}
	.bjlq{
		float: right;
		font-size: 18px;
		margin:0 auto;
	}
	.hd{
		margin-left:140px;
		margin-top:-130px;
	}
	.wks{
		margin-left:140px;
		margin-top:-10px;
	}
	.qztj{
		width:90px;
		margin-left:140px;
		border:1px solid #ccc;
		background-color:#DBA901;
		color:white;
		border-radius: 4px;
		text-align: center;
		font-size: 11px;
	}
	.zw{
		width:45px;
		margin-left:240px;
		margin-top:-17px;
		color:#8000FF;
		border:1px solid #8000FF;
		text-align: center;
		border-radius: 2px;
		font-size: 10px;
	}
	.qbj{
		
		font-size:25px;
		color:#ff1268;
		margin-left:140px;
		margin-top:25px;
	}
	.zd{
		margin-left:195px;
		margin-top:-50px;
	}
	.tc{
		width:100%;
		height:170px;
		
	}
	.tc img{
		width:120px;
		height:180px;
		margin-top:15px;
	}
	.lx{
		font-size: 18px;
		margin:-175px 50px 0px 140px;
	}
	.cj{
		display: inline;
		margin-left:140px;
		margin-top:-130px;
	}
	.wz{
		display:inline;
		margin-left:140px;
		margin-top:-5px;
	}
	.tlj{
		color:#ff1268;
		font-size: 25px;
		margin-top:80px;
		margin-left:140px;
	}
	.bjm{
		margin-left:195px;
		margin-top:-48px;
	}
	.cywl{
		width:100%;
		height:170px;
		
	}
	.cywl img{
		height:180px;
		width:120px;
		/* margin-top:10px; */
	}
	.wlyc{
		font-size: 16px;
		margin-left:140px;
		margin-top:-190px;
		
	}
	.zlcg{
		display: inline;
		margin-left:140px;
		margin-top:-20px;
	}
	.ckj{
		margin-top:-5px;
		margin-left:140px;
	}
	.cyyc{
		width:130px;
		border:1px solid #ccc;
		border-radius:5px;
		margin-left:140px;
		background-color:#DBA901;
		color:white;
		text-align: center;
		margin-top:-10px;
	}
	.cyjg{
		color: #ff1268;
		font-size: 25px;
		margin-left:140px;
		margin-top:40px;
	}
	.cypqj{
		margin-left:210px;
		margin-top:-50px;
	}
	.mh{
		width:100%;
		height:180px;
	}
	.mh img{
		width:120px;
		height:180px;
	}
</style>