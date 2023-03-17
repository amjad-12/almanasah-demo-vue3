<script>
import ContactForm from './ContactForm.vue'
import ContactImage from './ContactImage.vue'

export default {
    components: {
        ContactForm: ContactForm,
        ContactImage: ContactImage
    }
}
</script>

<template>
    <div class="bg-gradient-to-r from-[#c7e6ff] to-[#ebf6ff]  col-span-full grid grid-cols-first-and-last-cols msm:grid-cols-sm-first-and-last-cols grid-rows-6">
        <div class="col-start-2 col-end-6 bg-whiteColor rounded-3xl  my-11 row-start-1 row-end-7 grid grid-cols-6 grid-rows-6 ">
            <ContactForm></ContactForm>
            <ContactImage></ContactImage>
        </div>
    </div>
</template>