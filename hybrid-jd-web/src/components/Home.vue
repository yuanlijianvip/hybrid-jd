<template>
  <div class="home">
    <div class="home-content"> 
      <my-swiper :swiperImgs="swiperImgs" :height="swiperHeight"></my-swiper>
      <activity>
        <div class="activity-520">
          <img v-for="(item, index) in activityDatas" :key="index" :src="item" alt="">
        </div>
      </activity>
      <mode-options></mode-options>
    </div>
  </div>
</template>

<script>
import MySwiper from '@c/swiper/MySwiper.vue';
import Activity from '@c/currency/Activity.vue';
import ModeOptions from '@c/currency/ModeOptions.vue';

export default {
  data() {
    return {
      swiperImgs: [
        require('@img/swiper-1.jpg'),
        require('@img/swiper-2.jpg'),
        require('@img/swiper-3.jpg'),
        require('@img/swiper-4.jpg'),
        require('@img/swiper-5.jpg'),
        require('@img/swiper-6.jpg'),
        require('@img/swiper-7.jpg'),
        require('@img/swiper-8.jpg')
      ],
      swiperHeight: '184px',
      activityDatas: [
        require('@img/520-1.gif'),
        require('@img/520-2.gif'),
        require('@img/520-3.gif')
      ]
    }
  },
  methods: {
    initData() {
      //this.$http = axios;
      // this.$http.get('/swiper')
      //   .then(data => {
      //     console.log(data);
      //   }).catch(err => {
      //     console.log(err);
      //   });
      // this.$http.get('/activitys')
      //   .then(data => {
      //     console.log(data);
      //     // this.activityDatas = data.list;
      //   }).catch(err => {
      //     console.log(err);
      //   });

      this.$http.all([
        this.$http.get('/swiper'),
        this.$http.get('/activitys')
      ]).then(this.$http.spread((swiperData, activityData) => {
        console.log(swiperData, activityData);
        // this.activityDatas = activityData.list;
      }));
    }
  },
  components: {
    MySwiper,
    Activity,
    ModeOptions
  },
  mounted() {
    this.initData();
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
  .home {
    width: 100%;
    height: 100%;
    background-color: $bgColor;
    &-content {
      height: 100%;
      .activity-520 {
        margin-top: px2rem(-8);
        border-top-left-radius: px2rem(8);
        border-top-right-radius: px2rem(8);

        img {
          display: inline-block;
          width: 33.33%;
        }
      }
    }
  }
</style>