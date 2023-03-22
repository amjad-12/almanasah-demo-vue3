<script setup>
import { ref } from 'vue';

const isExpandedB = ref(false)
const isExpandedC = ref(false)
const isExpandedD = ref(false)
function Toggler(char) {
    if (char === 'B') {
        isExpandedB.value = !isExpandedB.value
    }
    if (char === 'C') {
        isExpandedC.value = !isExpandedC.value
    }
    if (char === 'D') {
        isExpandedD.value = !isExpandedD.value
    }
}
</script>

<template>
  <footer class="my-block my-block--dark footer col-span-full">
      <div class="grid footer__sections ">
        <section class="collapsible collapsible__expanded footer__section">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">منتجاتنا</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler">
              <img src="/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">متاجر إلكترونيه</a></li>
              <li><a href="#">تطبيقات إلكترونيه</a></li>
              <li><a href="#">تسويق وزيادة مبيعات</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedB ? 'collapsible collapsible__expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">الشركه</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler('B')">
              <img src="/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">من نحن</a></li>
              <li><a href="#">الشركاء</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedC ? 'collapsible collapsible__expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">الدعم</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler('C')">
              <img src="/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">إتصل بنا</a></li>
              <li><a href="#">الوظائف</a></li>
              <li><a href="#">الأسئله الشائعه</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedD ? 'collapsible collapsible__expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">تجدنا على </h2>
            <span class="icon icon--white collapsible__chevron " @click="Toggler('D')">
              <img src="/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">إنستاغرام</a></li>
              <li><a href="#">فايسبوك</a></li>
              <li><a href="#">تويتر</a></li>
            </ul>
          </div>
        </section>
        <div class="footer__brand grid">
          <img src="/logo-almanasah-2.png" alt="" />
          <p class="footer__copyright">جميع الحقوق محفوظه © المنصه 2023-2024</p>
        </div>
      </div>
    </footer>
</template>

<style scoped lang="scss"> 
// .footer-container {
//    @apply max-w-[1140px] my-0 mx-auto;
//  }

 .list {
   @apply pl-0;
 }

 // Footer
 .footer {
   @apply pt-[10rem];

   a {
     @apply transition-all duration-[.2s] text-white text-3xl font-medium;

     &:hover {
       @apply text-[#283a9d9e];
     }
   }

   &__section {
     @apply p-[1rem] border-b-[1px] border-solid border-[mainColor];

     .list {
       @apply m-0;
     }
   }

   &__heading {
     @apply font-semibold text-5xl;
   }

   &__brand {
     @apply mt-[3rem] text-center;

     img {
      @apply w-56 justify-self-center
     }

   }

   &__copyright {
     @apply text-4xl text-white opacity-60 mt-5;
   }
 }

 .collapsible {

   &__header {
     @apply flex justify-between mb-8 ;
   }

   &__heading {
     @apply mt-0 text-5xl ;
   }

   &__chevron {
     @apply -rotate-90 transition-transform duration-[0.3s];
   }

   &__content {
     @apply max-h-0 overflow-hidden opacity-0 transition-all duration-[0.3s] ;
   }

   &__expanded {
   .collapsible__chevron {
     @apply rotate-0;
   }

  }

   &__expanded {
   .collapsible__content {
     @apply max-h-full opacity-100;

    }
  }
 }

//  .collapsible--expanded

 .my-block {
   @apply py-20 px-32 vvsm:py-0 vvsm:px-0;

   &__header {
     @apply text-center mb-16;
   }

   &__heading {
     @apply mt-0;
   }

   &--dark {
     @apply bg-mainColor text-white;

     h1,
     h2,
     h3 {
       @apply text-[#0051bb]
     }
   }
 }

 .icon {
   @apply w-[4rem] h-[4rem];

   &--white {
     @apply fill-white;
   }
 }
 

 @media screen and (min-width: 768px) {
  .footer {
    font-size: 1.9rem;
  }
  .footer__sections {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .footer .collapsible__chevron {
    display: none;
  }
  .footer .collapsible__content {
    opacity: 1;
    max-height: 100%;
  }
  .footer__brand {
    // order: -1;
    margin-top: 1rem;
  }
  .footer__copyright {
    margin: 2rem;
    font-size: 2rem;
  }
  .footer__section {
    border: 0;
  }
  .footer__heading {
    font-size: 2rem;
    
  }
}

 </style>