<template>
     <div id="customers" class="col-start-2 overflow-hidden col-end-12 md:col-span-full  grid grid-cols-6  grid-rows-animateProducts">
        <h1 class="six-px col-start-3 col-end-5 row-start-1 row-end-3 self-center lg:self-end justify-self-center     hover:skew-x-[-15deg] hover:skew-y-[-1deg] hover:scale-110 transition-all duration-[.2s] text-7xl font-bold text-mainColor">عملاؤنا</h1>
        <div class=" col-start-2 col-end-6 row-start-3 row-end-7 slider self-center justify-self-center">
            <span class="card" style="--i:1;">
                <h1 class="card__title">ميلك شيك</h1>
                <img class="card__image" src="/slide-1.jpg" alt="">
            </span>
            <span class="card" style="--i:2;">
                <h1 class="card__title">كوكيز</h1>
                <img class="card__image" src="/slide-2.jpg" alt="">
            </span>
            <span class="card" style="--i:3;">
                <h1 class="card__title">آيس كريم</h1>
                <img class="card__image" src="/slide-3.jpg" alt="">
            </span>
            <span class="card" style="--i:4;">
                <h1 class="card__title">كعك محلى</h1>
                <img class="card__image" src="/slide-4.jpg" alt="">
            </span>
            <span class="card" style="--i:5;">
                <h1 class="card__title">جيلاتين</h1>
                <img class="card__image" src="/slide-5.jpg" alt="">
            </span>
            <span class="card" style="--i:6;">
                <h1 class="card__title">حلوى</h1>
                <img class="card__image" src="/slide-6.jpg" alt="">
            </span>
            <span class="card" style="--i:7;">
                <h1 class="card__title">آيس كريم</h1>
                <img class="card__image" src="/slide-7.jpg" alt="">
            </span>
            <span class="card" style="--i:8;">
                <h1 class="card__title">فيلا فانيلا</h1>
                <img class="card__image" src="/slide-8.jpg" alt="">
            </span>
        </div>
     </div>
</template>

<style lang="scss">
.card {
    @apply overflow-hidden rounded-2xl bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff] grid grid-cols-product grid-rows-product;

    &__title {
        @apply self-center justify-self-center row-start-1 row-end-2 text-4xl  text-fontColor font-bold;
    }

    &__image {
        @apply row-start-2 row-end-3;
    }
}

.slider {
    @apply animate-rotate relative w-[24rem] h-[27rem];
    transform-style: preserve-3d;
}

@media screen and (max-width: 900px) {
    .slider {
        @apply w-[20rem] h-[23rem]
    }
}

// @media screen and (max-width: 600px) {
//     .six-px {
//         @apply self-center
//     }
// }



.slider span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i)*45deg)) translateZ(32.5rem);
    backface-visibility: hidden;
}



@media screen and (max-width: 900px) {
    .slider span {
        transform: rotateY(calc(var(--i)*45deg)) translateZ(28rem);
    }
}

.slider span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 2s;
    backface-visibility: hidden;
}

.slider span:hover img {
    transform: translateY(-3rem) scale(1.4);
}
</style>