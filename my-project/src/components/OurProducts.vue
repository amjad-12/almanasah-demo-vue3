<template>
     <div class="col-start-2 col-end-12 md:col-span-full grid grid-cols-first-and-last-cols grid-rows-6 bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff]">
        <h1
            class="hover:skew-x-[-15deg] hover:skew-y-[-1deg] hover:scale-110 transition-all duration-[.2s] row-start-1 row-end-2 col-start-3 col-end-5 justify-self-center self-end text-3xl font-bold text-mainColor">
            عملاؤنا</h1>
        <p
            class="row-start-2 row-end-3 col-start-3 col-end-5 lg:col-start-2 lg:col-end-6 justify-self-center self-center text-6xl vsm:text-5xl text-fontColor font-bold">
            فيلا فانيلا</p>

        <div class="col-start-3 col-end-5 row-start-3 row-end-7 lg:row-end-6 lg:h-full lg:col-start-2 lg:col-end-6 lg:justify-self-center z-1">
            <img class="  h-[90%] justify-self-center drop-shadow-[0_0_13px_rgba(0,0,0,0.2)] rounded-me2"
                src="/sweet3.jpg" alt="">
        </div>

        <button class="btn_arrow btn_arrow--right col-start-2 col-end-3 row-start-3 row-end-4 lg:row-start-6 lg:row-end-7 lg:self-center justify-self-start self-start">
            <svg class="icon__arrow">
                <use xlink:href="../img/sprite.svg#icon-arrow-long-right"></use>
            </svg>
        </button>

        <button class="btn_arrow btn_arrow--left col-start-5 col-end-6 row-start-3 row-end-4 lg:row-start-6 lg:row-end-7 lg:self-center justify-self-end self-start">
            <svg class="icon__arrow">
                <use xlink:href="../img/sprite.svg#icon-arrow-long-left"></use>
            </svg>
        </button>
    </div>

</template>

<style scoped lang="scss">

.btn_arrow {
    @apply text-2xl font-bold border rounded-full p-3 bg-mainColor border-mainColor h-[1.5rem] w-[6rem] flex justify-center items-center;

    &--right:hover {
        @apply translate-x-1 transition-all duration-[.2s]
    }

    &--left:hover {
        @apply -translate-x-1 transition-all duration-[.2s]
    }
  }

</style>