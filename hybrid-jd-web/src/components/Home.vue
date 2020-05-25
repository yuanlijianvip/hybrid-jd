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
      <seconds :dataSource="secondsDatas"></seconds>
    </div>
  </div>
</template>

<script>
import MySwiper from '@c/swiper/MySwiper.vue';
import Activity from '@c/currency/Activity.vue';
import ModeOptions from '@c/currency/ModeOptions.vue';
import Seconds from '@c/seconds/Seconds.vue';

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
      ],
      secondsDatas: [
        {
          id: 1,
          icon: require('@img/jingDongMiaoSha-1.jpg'),
          oldPrice: '169.9',
          price: '119'
        },
        {
          id: 2,
          icon: require('@img/jingDongMiaoSha-2.jpg'),
          oldPrice: '1900',
          price: '1191'
        },
        {
          id: 3,
          icon: require('@img/jingDongMiaoSha-3.jpg'),
          oldPrice: '289.8',
          price: '199.9'
        },
        {
          id: 4,
          icon: require('@img/jingDongMiaoSha-4.jpg'),
          oldPrice: '108',
          price: '79'
        },
        {
          id: 5,
          icon: require('@img/jingDongMiaoSha-5.jpg'),
          oldPrice: '1950',
          price: '1588'
        },
        {
          id: 6,
          icon: require('@img/jingDongMiaoSha-6.jpg'),
          oldPrice: '316',
          price: '299'
        },
        {
          id: 7,
          icon: require('@img/jingDongMiaoSha-7.jpg'),
          oldPrice: '278',
          price: '239'
        },
        {
          id: 8,
          icon: require('@img/jingDongMiaoSha-8.jpg'),
          oldPrice: '2199',
          price: '1499'
        },
        {
          id: 9,
          icon: require('@img/jingDongMiaoSha-9.jpg'),
          oldPrice: '4299',
          price: '3999'
        },
        {
          id: 10,
          icon: require('@img/jingDongMiaoSha-10.jpg'),
          oldPrice: '245',
          price: '138.5'
        }
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
        this.$http.get('/activitys'),
        this.$http.get('/seconds')
      ]).then(this.$http.spread((swiperData, activityData, secondsData) => {
        console.log(swiperData, activityData, secondsData);
        // this.activityDatas = activityData.list;
        // this.secondsData = secondsData.list;
      }));
    }
  },
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    Seconds
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