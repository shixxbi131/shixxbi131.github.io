<template>
  <div class="container">
    <p class="title">BI -- Vue组件库</p>

    <div class="all-demos">
      <div v-for="(item,index) in componentsNav" :key='index' class="item-container">
        <p class="title">{{item.category}}</p>
        <template v-for="components in item.map">
          <a :href="components.url">{{components.name}}</a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import componentsNav from './common/componentsNav'
	export default {
		name: 'app',
    data: function () {
      return {
        componentsNav: componentsNav
      }
    }
	}
</script>

<style lang="less">
@mainColor: #562788;
.container {
  margin:60px auto;
  width:100%;
  height: 300px;
  text-align: center;

  .title {
    font-size: 30px;
    margin-bottom: 20px!important;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color:#000;
  }

  .all-demos {
    margin-bottom: 20px;

    .item-container {
      float: left;
      width: 300px;
      margin-bottom: 20px;
      .title {
        font-size: 20px;
        color:@mainColor;
      }
      a {
        display: block;
        width:60px;
        margin:0 auto;
        text-align: left;
        color:#000;
        border-radius: 4px;
        margin-bottom: 5px;
      }
    }
  }

}
</style>