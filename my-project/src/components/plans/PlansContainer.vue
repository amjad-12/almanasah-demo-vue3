<script>
import PlanCardsContainer from './PlanCardsContainer.vue'

export default {
    components: {
        PlanCardsContainer: PlanCardsContainer
    }
}
</script>

<template>
    <div id="prices" class="col-start-2 col-end-12 grid grid-cols-6 grid-rows-sales">
        <h1
            class="hover:skew-x-[-15deg] hover:skew-y-[-1deg] hover:scale-110  transition-all duration-[.2s] col-start-1 col-end-7 row-start-1 row-end-2 justify-self-center self-end text-6xl text-fontColor font-bold">
            نشاط البيع</h1>

        <div class="col-start-3 col-end-5 row-start-2 row-end-3 flex self-end justify-self-center mb-8">
            <button
                class="text-2xl font-bold border rounded-me2 p-3 bg-mainColor hover:bg-fontColor    border-mainColor text-whiteColor h-10 w-64 msm:w-[60%] flex justify-center items-center justify-self-end">سنوي</button>
            <button
                class="p-3 h-10 w-64 msm:w-[60%] bg-whiteColor text-2xl font-bold border rounded-me2 border-slate-100 hover:text-whiteColor hover:bg-mainColor text-mainColor ">شهري</button>
        </div>
        <PlanCardsContainer></PlanCardsContainer>
    </div>
</template>