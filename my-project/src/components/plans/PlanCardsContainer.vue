<template>
    <div class="row-start-3 row-end-4 col-start-1 col-end-7 gap-14 mb-28 grid grid-cols-plans msm:grid-cols-mplans">

        <div>
            <div class="plan__box plan__box--front">
                <svg class="plan__icon fill-iconColor">
                    <use xlink:href="../img/sprite.svg#icon-qrcode"></use>
                </svg>
                <h1 class="plan__name">كيو آر منيو</h1>
                <div class="self-start">
                    <p class="plan__price-start">تبدأ من</p>
                    <span class="plan__price-number">25</span>
                    <span class="plan__price-currency">د.ك / سنة</span>
                </div>
            </div>
        </div>

        <div>
            <div class="plan__box plan__box--front ">
                <svg class="plan__icon fill-mainColor">
                    <use xlink:href="../img/sprite.svg#icon-inbox"></use>
                </svg>
                <h1 class="plan__name">بيسيك</h1>
                <div class="self-start">
                    <p class="plan__price-start">تبدأ من</p>
                    <span class="plan__price-number">250</span>
                    <span class="plan__price-currency">د.ك / سنة</span>
                </div>
            </div>
        </div>

        <div>
            <div class="plan__box plan__box--front">
                <svg class="plan__icon fill-goldColor">
                    <use xlink:href="../img/sprite.svg#icon-star"></use>
                </svg>
                <h1 class="plan__name">بريميوم</h1>
                <div class="self-start">
                    <p class="plan__price-start">تبدأ من</p>
                    <span class="plan__price-number">350</span>
                    <span class="plan__price-currency">د.ك / سنة</span>
                </div>
            </div>
        </div>

        <div>
            <div class="plan__box plan__box--front ">
                <svg class="plan__icon fill-blueColor">
                    <use xlink:href="../img/sprite.svg#icon-mobile"></use>
                </svg>
                <h1 class="plan__name">تطبيق الموبايل</h1>
                <div class="self-start">
                    <p class="plan__price-start">تبدأ من</p>
                    <span class="plan__price-number">450</span>
                    <span class="plan__price-currency">د.ك / سنة</span>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.plan__box {
    @apply h-full w-full rounded-3xl transition-all duration-[.2s] scale-105;

    &:hover {
            transform: scale(1.07);
    }
}

.plan__box--front {
    @apply bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff] grid grid-cols-plan grid-rows-plan justify-items-center -translate-y-2 transition-all duration-300;
    

}

.plan__icon {
    @apply w-[6rem] h-[6rem] self-end
}

.plan__name {
    @apply font-bold text-plan text-mainColor self-center
}

.plan__price-start {
    @apply text-3xl text-parColor font-medium mb-4
}

.plan__price-number {
    @apply text-3xl text-mainColor font-semibold
}

.plan__price-currency {
    @apply text-2xl text-mainColor font-semibold
}
</style>