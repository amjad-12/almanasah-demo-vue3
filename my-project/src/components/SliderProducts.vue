<template>
    <div class="slider col-start-2 col-end-12  md:col-span-full  grid grid-cols-first-and-last-cols grid-rows-6 relative">

        <h1
            class="hover:skew-x-[-15deg] hover:skew-y-[-1deg] hover:scale-110 transition-all duration-[.2s] row-start-1 row-end-2 lsm:row-end-3 col-start-3 col-end-5 justify-self-center self-center lg:self-start text-3xl font-bold text-mainColor">
           عملاؤنا</h1>
        <p
            class="row-start-1 row-end-2 lsm:row-end-3 col-start-3 col-end-5 lg:col-start-2 lg:col-end-6 justify-self-center self-end lg:self-center text-6xl vsm:text-5xl text-fontColor font-bold">
            {{ products[counter].title }}</p>
        <div class="myContainer overflow-visible relative col-span-full  row-start-2 row-end-7 grid grid-cols-6 grid-rows-6 -z-40">
            
            <div class="previous lg:justify-self-end justify-self-start self-center col-start-5 col-end-7 row-start-2 row-end-6 -z-50 relative">
                <img class="md:ml-[4.5rem] w-[24rem] h-[41rem] lg:w-[22rem] lg:h-[34rem]  "
                    :src="products[counter+1].source" alt="">
                <svg class="hover:left-[5rem] w-[7rem] h-[7rem] z-80 overflow-visible row-start-4 row-end-5 absolute top-[40%]  left-[-2rem] z-8888" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </div>
            
            
            <img class="current w-[32rem] h-[47rem] lsm:w-[23rem] lsm:h-[38rem]   self-center justify-self-center col-start-3 col-end-5 lg:col-start-1 lg:col-end-7 row-span-full z-50"
            :src="products[counter].source" alt="">


            <div class="next lg:justify-self-start justify-self-end self-center col-start-1 col-end-3 row-start-2 row-end-6 -z-50">
                <img class="md:mr-[4.5rem] w-[24rem] h-[41rem] lg:w-[22rem] lg:h-[34rem]  "
                :src="products[counter-1].source" alt="">
                <svg class="w-[7rem] h-[7rem] z-80 overflow-visible row-start-4 row-end-5 absolute top-[40%]  right-[-2rem] z-8888" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>

                <!-- <span @click="toNext()" class="overflow-visible row-start-4 row-end-5 absolute top-[40%]  right-[-4.5rem] z-8888">
                    <svg class="kl  w-[7rem] h-[7rem] z-80" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>circle-right</title>
                        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                        <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
                    </svg>
                </span> -->
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
             {title: 'فيلا فانيلا', source: '/slide-1.jpg'},     
             {title: 'حلويات', source: '/slide-5.jpg'},     
             {title: 'هوت شوكليت', source: '/slide-6.jpg'}     
            ],
            counter: 1
        }
    },
    methods: {
        toNext() {
            this.counter += 1
        },
        toPrevious() {
            this.counter -= 1
        }
    },
    watch: {
        counter(value) {
            if (value === 3) {
                this.counter = 1
            }

            else if (value <= 0) {
                this.counter = 1
            }
        }
    }
}
</script>

<style scoped>
.kl {
    @apply fill-[#73cdf3]
}

.myContainer {
    transform-style: preserve-3d;
    perspective: 1000px;
}

.previous {
    transform: rotateY(27deg) translateZ(-4rem);
    /* width: 24rem;
    height: 41rem; */
    /* padding-bottom: 10rem; */
}

@media screen and (max-width: 840px) {
    .previous {
        transform: rotateY(18deg) translateZ(-26rem);
    }
}

@media screen and (max-width: 750px) {
    .previous {
        transform: rotateY(15deg) translateZ(-75rem);
    }
}

@media screen and (max-width: 638px) {
    .previous {
        transform: rotateY(13deg) translateZ(-89rem);
    }
}

@media screen and (max-width: 550px) {
    .previous {
        transform: rotateY(10.5deg) translateZ(-180rem);
    }
}



@media screen and (max-width: 550px) {
    .current {
        height: 32rem;
        transform: translateZ(7rem);
        scale: 1.05;
    }
}



.next {
    transform: rotateY(-27deg) translateZ(-4rem);
}


@media screen and (max-width: 840px) {
    .next {
        transform: rotateY(-18deg) translateZ(-26rem);
    }
}

@media screen and (max-width: 750px) {
    .next {
        transform: rotateY(-15deg) translateZ(-75rem);
    }
}

@media screen and (max-width: 638px) {
    .next {
        transform: rotateY(-13deg) translateZ(-89rem);
    }
}

@media screen and (max-width: 550px) {
    .next {
        transform: rotateY(-10.5deg) translateZ(-180rem);
    }
}</style>