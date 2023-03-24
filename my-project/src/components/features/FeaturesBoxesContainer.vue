<template>
    <div  class="grid grid-cols-first-and-last-cols grid-rows-6 col-start-6 col-end-12 lg:col-start-1 lg:col-end-13 ">
        <div
            class="row-start-1 row-end-5 lg:row-start-1 lg:row-end-7  lg:mb-8 col-start-1 col-end-7 grid grid-cols-features xl:grid-cols-md-features justify-items-start sm:justify-items-center sm:justify-center items-end gap-3 bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff] rounded-me md:col-start-1 md:col-end-7 lg:col-start-2 lg:col-end-6">
            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="../img/sprite.svg#icon-link"></use>
                </svg>
                <p class="text__feature">روابط لوسائل تواصلك الاجتماعية</p>
            </div>

            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="../img/sprite.svg#icon-truck"></use>
                </svg>
                <p class="text__feature">خدمات توصيل</p>
            </div>


            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="../img/sprite.svg#icon-history"></use>
                </svg>
                <p class="text__feature">جاهز للتسليم خلال 24 ساعة</p>
            </div>


            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="./sprite.svg#icon-credit-card"></use>
                </svg>
                <p class="text__feature">دفع إلكتروني</p>
            </div>


            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="../img/sprite.svg#icon-bullhorn"></use>
                </svg>
                <p class="text__feature">حملات تسويقية</p>
            </div>


            <div class="box__feature">
                <svg class="icon__feature">
                    <use xlink:href="../img/sprite.svg#icon-paste"></use>
                </svg>
                <p class="text__feature">تقارير مخصصة</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .box__feature {
    @apply grid grid-cols-feature grid-rows-feature justify-items-center items-center hover:inner-border-4  hover:inner-border-[#8cd2fd]  scale-110 duration-150 transition-all hover:rounded-3xl
}

.icon__feature {
    @apply w-[5.3rem] h-[5.3rem] fill-mainColor row-start-1 row-end-2
}

.text__feature {
    @apply text-2xl font-bold text-fontColor
} */
.box__feature {
    @apply grid grid-cols-feature grid-rows-feature justify-items-center items-center hover:inner-border-4 inner-border-[#8cd2fd] hover:scale-110 duration-150 transition-all hover:rounded-3xl
}

.icon__feature {
    @apply w-[5.3rem] h-[5.3rem] fill-mainColor row-start-1 row-end-2
}

.text__feature {
    @apply text-2xl font-bold text-fontColor
}
</style>