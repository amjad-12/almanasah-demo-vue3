<template>
    <div
        class="col-start-1 col-end-4 lg:col-span-full bg-transparent row-start-1 row-end-6 lg:row-start-4 lg:row-end-7 grid grid-cols-6 grid-rows-contact gap-y-4 justify-items-center items-center">
        <input placeholder="الاسم"
            class="contact__input self-end py-3 pr-7 row-start-2 row-end-3 col-span-full w-[70%] lg:w-[95%] h-[3.5rem]"
            type="text">
        <div class="row-start-3 row-end-4 self-center col-span-full w-[73%] lg:w-[95%] flex">
            <input placeholder="الموبايل" class="contact__input text-end py-3 pl-7  w-[80%] h-[3.5rem]" type="text">
            <span
                class="row-start-3 row-end-4 bg-mainColor rounded-3xl text-pxl font-bold mr-2 w-[20%] h-[3.5rem] pt-5 text-center text-whiteColor">963
                +</span>
        </div>
        <input placeholder="البريد الإلكتروني"
            class="contact__input self-start py-3 pr-7 row-start-4 row-end-5 col-span-full w-[70%] lg:w-[95%] h-[3.5rem]"
            type="text">
        <input placeholder="اترك تعليق"
            class="contact__input  self-start pr-7 row-start-5 row-end-6 col-span-full w-[70%] lg:w-[95%] sm:-mt-[2rem] mb-[5rem] h-full"
            type="text">
        <a class="btn_full self-start col-span-full row-start-6 row-end-7 w-[70%] lg:w-[95%] sm:-mb-[2rem] rounded-3xl "
            href="#">ارسل
            الطلب</a>
    </div>
</template>

<style scoped>
.contact__input {
    @apply focus:border-4 transition-all duration-75 rounded-3xl bg-backColor text-2xl text-gray-400 font-bold outline-none
}
</style>