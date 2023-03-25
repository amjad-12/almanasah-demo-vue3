<template>
    <div class="navigation sticky invisible lg:visible  z-50">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list font-semibold text-mainColor text-5xl">
                <li class="navigation__item"><a href="#" class="navigation__link--logo"><img class="w-[20rem] -mt-[8rem]"
                            src="/logo-almanasah-3.png" alt=""></a></li>
                <li class="navigation__item"><a href="#features" class="navigation__link"><span>2</span> الميزات</a></li>
                <li class="navigation__item"><a href="#customers" class="navigation__link"><span>3</span> عملاؤنا</a></li>
                <li class="navigation__item"><a href="#prices" class="navigation__link"><span>4</span> الأسعار</a></li>
                <li class="navigation__item"><a href="#contact-us" class="navigation__link"><span>5</span> اتصل بنا</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link "><span>6</span> تسجيل الدخول</a></li>

            </ul>
        </nav>

    </div>
</template>

<style scoped lang="scss">
.navigation {
    @media screen and (min-width: 900px) {
        transition: all 0s;
    }

    &__checkbox {
        display: none;
    }

    &__button {
        background-color: rgb(255, 255, 255);
        height: 7rem;
        width: 7rem;
        position: fixed;
        top: 1.5rem;
        right: 1rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(#6e86f3, .3);
        text-align: center;
        cursor: pointer;
    }

    &__background {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        background-image: linear-gradient(to right, #c7e6ff, #ebf6ff);
        z-index: 1000;
        transition: transform .8s cubic-bezier(.86, 0, 0.07, 1);
    }

    @media screen and (min-width: 900px) {
        &__background {
            transition: transform 0s cubic-bezier(.86, 0, 0.07, 1);
        }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    }

    @media screen and (min-width: 900px) {
        &__nav {
            transition: all 0s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 1rem;
    }

    &__link {

        &:link,
        &:visited {
            display: inline-block;

            padding: 1rem 2rem;
            color: #00b4d8;
            text-decoration: none;
            background-color: transparent;
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }



        }

        &:hover,
        &:active {
            background-position: 100%;
            // color: $color-primary;
            color: #55acdb;
            transform: translateX(1rem);
            background-color: white;
        }

    }

    @media screen and (min-width: 900px) {
        &__link {

            &:link,
            &:visited {
                transition: all 0s
            }
        }
    }

    &__link--logo {

        &:link,
        &:visited {
            display: inline-block;

            padding: 1rem 2rem;
            color: #00b4d8;
            text-decoration: none;
            background-color: transparent;
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }

        }

        &:hover,
        &:active {
            background-position: 100%;
            color: #55acdb;
            transform: scale(1.1);
        }

    }

    @media screen and (min-width: 900px) {
        &__link--logo {

            &:link,
            &:visited {
                transition: all 0s
            }
        }
    }

    // Functonality
    &__checkbox:checked~&__background {
        transform: scale(80);
    }



    &__checkbox:checked~&__nav {
        opacity: 1;
        width: 100%;
    }

    //ICON
    &__icon {
        position: relative;
        margin-top: 3.5rem;

        &,
        &::before,
        &::after {
            width: 3rem;
            height: 2px;
            background-color: #00b4d8;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before {
            top: -.8rem;

        }

        &::after {
            top: .8rem;
        }
    }

    &__button:hover &__icon::before {
        top: -1rem;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked+&__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked+&__button &__icon::before {
        top: 0;
        transform: rotate(45deg);
    }

    &__checkbox:checked+&__button &__icon::after {
        top: 0;
        transform: rotate(-45deg);
    }
}
</style>