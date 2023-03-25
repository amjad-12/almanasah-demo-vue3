<template>
    <header class="sticky border-b-[0.5px] lg:hidden bg-whiteColor top-0 col-span-full row-start-1 row-end-2 grid z-50 ">
        <div class=" grid grid-flow-col justify-around self-center">
            <a class="h-16 w-56 " href="/"><img src="/logo-almanasah-3.png" alt=""></a>
            <ul class="grid grid-flow-col gap-16 items-center nav-header font-semibold text-mainColor text-2xl">
                <li class="text-[#466bf3]"><a href="#home">الرئيسية</a></li>
                <li><a href="#features">الميزات</a></li>
                <li><a href="#customers">عملاؤنا</a></li>
                <li><a href="#prices">الأسعار</a></li>
                <li><a href="#contact-us">اتصل بنا</a></li>
                <li><a class="btn_outline" href="/">تسجيل الدخول</a></li>
            </ul>
        </div>
    </header>
</template>

<style scoped lang="scss">
.nav-header li:hover {
    @apply text-[#466bf3]
}

.lp {
    color: #3a3afe;
}
</style>