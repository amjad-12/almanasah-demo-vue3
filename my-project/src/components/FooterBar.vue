<template>
  <footer class="footer footer--dark footer col-span-full">
      <div class="footer__sections">
        <div class="footer__brand grid">
          <img class="footer__logo" src="/logo-almanasah-2.png" alt="" />
          <p class="footer__copyright">جميع الحقوق محفوظه © المنصه 2023-2024</p>
        </div>
      </div>
    </footer>
</template>

<style scoped lang="scss"> 

 // Footer
 .footer {
   @apply grid justify-items-center items-center;

   &__brand {
     @apply mt-[2rem] text-center justify-self-center self-center border-t-[0.1rem];

     img {
      @apply w-56 justify-self-center
     }

   }

   &__copyright {
     @apply text-[1.8rem] text-white opacity-60 mt-10;
   }
   
   &--dark {
     @apply bg-mainColor text-white;
    }
    .footer__logo {
      @apply mt-8
    }

 }


 </style>