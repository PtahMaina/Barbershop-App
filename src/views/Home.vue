<template>
<div class="flex flex-col items-center justify-center">
  <div class="relative top-0">
  <img src="https://i.postimg.cc/yY98bncV/Group-1.png" alt="" class="relative top-0 object-cover w-screen banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Masters of Barbering</h1>
       <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3>
       <!-- <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="px-5 py-3">BOOK NOW</button></h1></router-link> -->
    </div>
  </div>
  <div class="w-full h-40 -m-2 bg-black">
    <div class="grid items-start grid-cols-3 mx-auto text-white maxWidth ">
      <div class="flex flex-col gap-2">
        <h1>HOURS</h1>
        <p class="">Tues-Saturday 9:00am-6:00pm</p>
        <p>Sat 9:00am-3:00p</p>
        <p>Closed Sun & Mon</p>
      </div>
      <div class="">
        <h1 >CONTACT US</h1>
        <p>0761621649</p>
      </div>
      <div class="">
        <h1>LOCATION</h1>
        <p>18 Chukker Road, Kenwyn, Cape Town 7780</p>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col w-full gap-10 mt-10 h-72 maxWidth">
    <h1>Why you should pay us a visit</h1>
    <div class="grid grid-cols-3">
      <div>
        <svg width="50" height="50" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M113.575 30.9063C115.95 27.512 116.88 23.3134 116.161 19.2336C115.441 15.1538 113.131 11.5268 109.738 9.15001L107.175 7.35626L75.0126 53.2938L42.8439 7.35626L40.2813 9.15001C36.8892 11.5277 34.58 15.1552 33.8616 19.235C33.1432 23.3147 34.0742 27.5128 36.4501 30.9063L63.5688 69.6375L52.3189 85.7C46.0004 83.6779 39.1706 83.9544 33.0363 86.4807C26.9021 89.0069 21.8583 93.6203 18.7963 99.5054C15.7342 105.391 14.8512 112.169 16.3031 118.642C17.755 125.115 21.4484 130.867 26.7307 134.881C32.0129 138.894 38.5439 140.911 45.1695 140.576C51.7951 140.24 58.0887 137.573 62.9382 133.046C67.7877 128.519 70.8809 122.423 71.671 115.837C72.4612 109.25 70.8975 102.596 67.2563 97.05L75.0064 85.9875L82.7563 97.0375C79.1123 102.581 77.5449 109.234 78.3312 115.821C79.1175 122.408 82.2069 128.505 87.0534 133.035C91.8999 137.564 98.1916 140.235 104.817 140.575C111.442 140.915 117.974 138.902 123.259 134.892C128.543 130.882 132.24 125.134 133.697 118.662C135.153 112.19 134.275 105.411 131.217 99.524C128.16 93.6369 123.12 89.02 116.987 86.4892C110.855 83.9585 104.026 83.6767 97.7063 85.6938L86.4563 69.6375L113.575 30.9063V30.9063ZM34.3751 112.5C34.3751 111.269 34.6176 110.05 35.0887 108.912C35.5599 107.775 36.2504 106.741 37.121 105.871C37.9915 105 39.025 104.31 40.1624 103.839C41.2999 103.368 42.519 103.125 43.7501 103.125C44.9812 103.125 46.2003 103.368 47.3378 103.839C48.4752 104.31 49.5087 105 50.3792 105.871C51.2498 106.741 51.9403 107.775 52.4115 108.912C52.8826 110.05 53.1251 111.269 53.1251 112.5C53.1251 114.986 52.1374 117.371 50.3792 119.129C48.6211 120.887 46.2365 121.875 43.7501 121.875C41.2637 121.875 38.8791 120.887 37.121 119.129C35.3628 117.371 34.3751 114.986 34.3751 112.5V112.5ZM96.8751 112.5C96.8751 110.014 97.8628 107.629 99.621 105.871C101.379 104.113 103.764 103.125 106.25 103.125C108.736 103.125 111.121 104.113 112.879 105.871C114.637 107.629 115.625 110.014 115.625 112.5C115.625 114.986 114.637 117.371 112.879 119.129C111.121 120.887 108.736 121.875 106.25 121.875C103.764 121.875 101.379 120.887 99.621 119.129C97.8628 117.371 96.8751 114.986 96.8751 112.5Z" fill="black"/>
        </svg>
        <h1 class="text-xl font-medium">Quality</h1>

      </div>
      <div>
        <svg width="50" height="50" viewBox="0 0 150 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M107.812 58.125C105 57.1875 102.187 56.25 100.312 56.25H75V46.875H103.125C103.125 41.25 99.375 37.5 93.75 37.5H56.25C56.25 43.125 60 46.875 65.625 46.875V56.25C60.9375 56.25 56.25 54.375 54.375 50.625L44.0625 33.75C41.25 30 37.5 28.125 33.75 28.125H28.125V21.5625C28.125 18.75 27.1875 16.875 26.25 14.0625L23.4375 7.5C20.625 2.8125 15 0 9.375 0H0L46.875 65.625C50.625 71.25 57.1875 75 63.75 75H75V84.375H65.625V103.125H60C51.5625 103.125 43.125 106.875 37.5 112.5H28.125V121.875H131.25V112.5H121.875C116.25 106.875 107.813 103.125 99.375 103.125H93.75V84.375H84.375V75H99.375C101.25 75 104.063 75.9375 105.938 76.875L121.875 85.3125C130.312 90 140.625 90 149.062 85.3125H150L107.812 58.125V58.125Z" fill="black"/>
        </svg>
        <h1 class="text-xl font-medium"> Comfort</h1>

        </div>
      <div>
        <svg width="50" height="50" viewBox="0 0 200 161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M129.949 0L88.9487 26.3171L93.1045 28.5928L129.582 5.17833L191.453 40.2245L155.965 63.0035L157.693 63.9497V66.8372L185.49 48.9945L191.324 52.2994L157.693 73.8859V78.829L184.946 61.3358L191.324 64.9494L157.693 86.536V91.479L184.946 73.9859L191.324 77.5995L157.693 99.186V104.129L199.872 77.0547L189.403 71.1254L199.872 64.4055L189.403 58.4753L199.871 51.7555L189.947 46.1335L200 39.6801L129.949 0H129.949ZM143.049 18.8648C134.178 23.3158 122.362 24.0688 114.043 20.7129L97.7798 31.1518L151.289 60.4441L166.714 50.5436C160.638 45.7469 161.144 38.5897 167.954 32.9733L143.048 18.8648H143.049ZM87.9848 34.4424L58.1789 53.8781L115.359 86.7949L115.92 86.4365C116.974 85.7576 118.463 84.7962 120.239 83.6481C123.789 81.353 128.488 78.3099 133.173 75.274C139.92 70.9015 143.397 68.6456 146.63 66.5483L87.9848 34.4424ZM136.672 34.9357C136.672 34.9357 136.673 34.9357 136.673 34.9357C138.022 34.9439 139.258 35.233 140.181 35.7558C140.719 36.0601 141.135 36.4354 141.408 36.8604C141.68 37.2853 141.803 37.7516 141.769 38.2325C141.735 38.7134 141.545 39.1995 141.209 39.6632C140.874 40.1268 140.4 40.5588 139.814 40.9346C139.229 41.3103 138.544 41.6224 137.797 41.8531C137.051 42.0838 136.258 42.2285 135.464 42.279C134.671 42.3295 133.891 42.2848 133.171 42.1475C132.451 42.0101 131.803 41.7828 131.266 41.4785C130.181 40.864 129.611 39.9732 129.679 39.0022C129.748 38.0312 130.451 37.0594 131.633 36.3006C132.304 35.8696 133.106 35.523 133.979 35.2866C134.851 35.0503 135.772 34.9303 136.672 34.9357V34.9357ZM44.573 54.8019L0.128604 83.3289L10.0531 88.9508L0 95.4042L10.4688 101.334L0 108.054L10.4688 113.984L0 120.704L70.0514 160.384L112.345 133.236V128.294L70.4187 155.206L8.54776 120.159L14.5584 116.301L70.0514 147.734L112.345 120.586V115.644L70.4187 142.556L8.54776 107.509L14.5584 103.651L70.0514 135.084L112.345 107.937V102.995L70.4187 129.906L8.54776 94.8598L14.1431 91.2673L70.1809 123.009L112.345 95.9443V93.815L110.034 92.4851L70.5464 117.831L8.67721 82.7845L48.6331 57.1379L44.5726 54.8006L44.573 54.8019ZM53.2 59.769L33.416 72.4671C39.4921 77.263 38.9861 84.4201 32.1755 90.0374L57.0818 104.146C65.9521 99.6945 77.7668 98.9419 86.0861 102.297L105.467 89.8569L53.1992 59.7686L53.2 59.769ZM150.103 73.342C146.711 75.5418 143.72 77.4835 137.301 81.6435C132.988 84.4389 128.675 87.2321 124.36 90.023C122.582 91.1721 121.09 92.1355 120.026 92.8195C119.988 92.8448 119.973 92.8532 119.936 92.8772V129.107L150.104 108.831V73.342H150.103ZM65.355 80.7125C66.7037 80.7209 67.9401 81.0103 68.8632 81.5335C69.948 82.148 70.5188 83.0387 70.45 84.0098C70.3812 84.9808 69.6785 85.9526 68.4964 86.7114C67.3143 87.47 65.7498 87.9534 64.147 88.0555C62.5442 88.1575 61.0343 87.8697 59.9494 87.2553C58.8646 86.6408 58.2938 85.7501 58.3626 84.779C58.4314 83.808 59.1342 82.8362 60.3163 82.0774C60.9876 81.6465 61.7895 81.2999 62.662 81.0637C63.5345 80.8274 64.4551 80.7075 65.355 80.7129V80.7125Z" fill="black"/>
        </svg>
        <h1 class="text-xl font-medium">Good prices </h1>

      </div>
    </div>
  </div> -->

    <div class="flex flex-col w-full mt-10 sectionHeight maxWidth">
      <div class="flex flex-col">
        <h1>Our Core Focus</h1>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-20">
      <div>
        <h1>Men's Haircut</h1>
        <p>Full style and cut to suit your needs, done by our professionals.</p>
      </div>
      <div>
        <h1>Treatment</h1>
        <p>Get advice and treatment methods to keep your hair in that healthy state.</p>
      </div>
      <div>
        <h1>Beard Trim</h1>
        <p>Keeping your beard in full shape and style, keeeping as silk and precise as you like it.</p>
      </div>
      <div>
        <h1>Wash</h1>
        <p>Nouring your hair and sculp with a full wash and blow if need be.</p>
      </div>
      </div>
    </div>

    <div class="w-full h-full maxWidth">
      <h1>Our Gallery</h1>
      <div class="grid grid-cols-3 gap-4">
          <div class="bg-red-300">
            1
            <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt="" class="w-80">
          </div>

          <div class="bg-red-300">
            2
              <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt=""  class="w-80">
          </div>

          <div class="bg-red-300">
            3
              <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt="" class="w-80">
          </div>

          <div class="bg-red-300">
            4
              <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt="" class="w-80">
          </div>

          <div class="bg-red-300">
            5
              <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt="" class="w-80">
          </div>

          <div class="bg-red-300">
            6
              <img src="https://i.postimg.cc/DzKJ60Zw/image.png" alt="" class="w-80">
          </div>
      </div>

      
    </div>

</div>
 

  <!-- <img src="https://gentlemen-barberclubs.de/images/big/3.jpg" alt=""> -->
 
 
    <!-- <div class="spirit">
      <h1 class="energy d-flex justify-content-center" >THE ENERGY</h1>
      <div class="paragraph">
        <p>Here at The Urban Shave Barber Shop, we specialize in every barber specialty.
        We provide our customers with the best services possible.
        Our team of executives and well-informed barbers work to help you achieve your delighted look. 
        We flourish on good music, mindful conversations, and enhancing relations in our community.
        </p>   
      </div>
      <div class="border"></div>
    </div> -->
  <!-- <div class="container pt-5">
    <div class="row">
      <div class="col">
        <h2 >HOURS</h2>
        <h6>Tues-Saturday 9:00am-6:00pm</h6>
        <h6>Sat 9:00am-3:00p</h6>
        <h6>Closed Sun & Mon</h6>
      </div>
      <div class="col">
        <h2 >CONTACT US</h2>
        <h6>0761621649</h6>
      </div>
      <div class="col">
        <h2 >LOCATION</h2>
        <h6>18 Chukker Road, Kenwyn, Cape Town 7780</h6>
      </div>
    </div>
    </div>   -->
  
  

  

  
 
</template>

<script>
export default {
  
}
</script>


<style scoped>


.banner{
  height: 650px;
}

.bannerOverlay{
   height: 647px;
}

.sectionHeight{
  height: 500px;
}

/* 
.blink-hard {
  animation: pulse 4s infinite;
  
}

.blink{
  background: transparent;
}
@keyframes pulse {
  50% {
    opacity: 0;
  }
}

.container {
  display:grid;
  justify-content: center;

}
img{
    width: 100%;
    height:100vh;
    object-fit: cover;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    filter: brightness(0.5);
}

.border{
  display: inline-flex;
  justify-content:center;
  border: 1px solid;
  width: 300px
}
.center {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: transparent;
}

h1,h3{
  background: transparent;
}
.spirit {
  padding-top:50px;
}

.paragraph p{
    font-size:22px;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
    padding-top: 50px;
}

@media only screen and (max-width: 600px) {
 .row{
   display:flex;
   flex-direction: column;
   align-items: center;
   
 }
 .col{
   padding: 10px;
 }
 .paragraph p{
    font-size:22px;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
    padding-top: 50px;
}
} */

</style>
