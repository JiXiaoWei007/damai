<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main View -->

  <f7-views tabs>
     <div class="toolbar tabbar-labels toolbar-bottom">
        <div class="toolbar-inner">
          <a href="#view-home" class="tab-link tab-link-active">
            <!-- <i class="icon f7-icons ios-only">home</i> -->
			<i class="icon f7-icons ios-only icon-ios-fill">home_fill</i>
			<i class="icon material-icons md-only">home</i>
            <span class="tabbar-label">首页</span>
          </a>
          <a href="#view-whole" class="tab-link">
			<!-- <i class="icon f7-icons ios-only">data</i> -->
			<i class="icon f7-icons ios-only icon-ios-fill">data</i>
			<i class="icon material-icons md-only">view_list</i>
            <span class="tabbar-label">全部</span>
          </a>
          <a href="#view-find" class="tab-link">
			<!-- <i class="icon f7-icons ios-only">homr</i> -->
			<i class="icon f7-icons ios-only icon-ios-fill">eye</i>
			<i class="icon material-icons md-only">eye</i>
            <span class="tabbar-label">发现</span>
          </a>
          <a href="#view-ticketholder" class="tab-link">
			<!-- <i class="icon f7-icons ios-only">homr</i> -->
			<i class="icon f7-icons ios-only icon-ios-fill">ticket</i>
			<i class="icon material-icons md-only">ticket</i>
            <span class="tabbar-label">票夹</span>
          </a>
          <a href="#view-me" class="tab-link">
			<!-- <i class="icon f7-icons ios-only">homr</i> -->
			<i class="icon f7-icons ios-only icon-ios-fill">person</i>
			<i class="icon material-icons md-only">person</i>
            <span class="tabbar-label">我的</span>
          </a>
		 
        </div>
      </div>
	
	
	
    <f7-view tab tab-active id="view-home" url="/" main></f7-view>
    <f7-view tab id="view-whole" url="/whole/" main></f7-view>
    <f7-view tab id="view-find" url="/find/" main></f7-view>
    <f7-view tab id="view-ticketholder" url="/ticketholder/" main></f7-view>
    <f7-view tab id="view-me" url="/me/" main></f7-view>
  </f7-views>

  </f7-app>

</template>

<script>
// Import Routes
import routes from './routes.js'
 
export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'com.stsys.damai', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes:routes,
      },
    }
  },
  mounted(){
    this.$f7ready((f7) => {
         //f7.dialog.alert('Component mounted'+JSON.stringify(this.$device));
    });
  }
};
</script>
