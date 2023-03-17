<template>
    <div
        class="bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff] col-start-2 col-end-12 rounded-me2 grid grid-cols-advantage py-3 md:grid-cols-xladvantage sm:col-span-full gap-4 md:gap-8">
        <div class="advantage__box">
            <svg class="advantage__icon">
                <use xlink:href="../img/sprite.svg#icon-clipboard"></use>
            </svg>
            <p class="advantage__par-big">250+</p>
            <p class="advantage__par-small">ميزات المتاجر</p>
        </div>

        <div class="advantage__box">
            <svg class="advantage__icon">
                <use xlink:href="../img/sprite.svg#icon-sphere"></use>
            </svg>
            <p class="advantage__par-big">5</p>
            <p class="advantage__par-small">الخدمات المكتبية</p>
        </div>

        <div class="advantage__box">
            <svg class="advantage__icon">
                <use xlink:href="../img/sprite.svg#icon-mobile"></use>
            </svg>
            <p class="advantage__par-big">25+</p>
            <p class="advantage__par-small">التطبيقات المدمجة</p>
        </div>

        <div class="advantage__box">
            <svg class="advantage__icon">
                <use xlink:href="../../assets/twitter.svg"></use>
            </svg>

            <!-- <span class="advantage__icon">
                <img src="/credit-card.svg" alt="">
            </span> -->
            <!-- <svg class="advantage__icon">
                <path d="M29 4h-26c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zM3 6h26c0.542 0 1 0.458 1 1v3h-28v-3c0-0.542 0.458-1 1-1zM29 26h-26c-0.542 0-1-0.458-1-1v-9h28v9c0 0.542-0.458 1-1 1zM4 20h2v4h-2zM8 20h2v4h-2zM12 20h2v4h-2z"></path>
            </svg> -->

            <!-- <img class="advantage__icon" src="/credit-card.svg" alt=""> -->
            <p class="advantage__par-big">% 0</p>
            <p class="advantage__par-small">العمولات</p>
        </div>
    </div>
</template>

<style scoped>
.advantage__box {
    @apply grid grid-cols-1 content-center justify-items-center grid-rows-advantage
}

.advantage__icon {
    @apply w-[6rem] h-[6rem] mb-8 fill-iconColor md:mb-4
}

.advantage__par-big {
    @apply text-fontColor font-bold text-num mb-4 lg:text-[3.5rem]
}

.advantage__par-small {
    @apply text-parColor text-2xl font-bold
}
</style>