/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      box: {'max': '500px'},
      
      vvsm: {'max': '300px'},

      vsm: {'max': '372px'},

      msm: {'max': '563px'},

      sm: {'max': '600px'},

      lsm: {'max': '638px'},
      
      md: {'max': '700px'},

      lmd: {'max': '750px'},
      
      xlmd: {'max': '840px'} ,
     
      lg: {'max': '900px'},

      xl: {'max': '1150px'},
      

    },
    extend: {
      clipPath: {
        mypolygon: 'polygon(28% 0, 72% 0, 100% 20%, 100% 80%, 72% 100%, 28% 100%, 0% 80%, 0% 20%)',
      },
      colors: {
        mainColor: '#1ba6f1',
        iconColor: '#31a9dc',
        blueColor: '#73c8ed',
        fontColor: '#00b4d8',
        footerColor: '#1D2E73',
        footerliColor: '#1ba9e6',
        parColor: '#5e5873',
        whiteColor: '#ffffff',
        backColor: '#F7FBFF',
        goldColor: '#eee52a',
        from: '#acb6e5',
        to: '#86fde8'
      },
      lineHeight: {
        '10': '3.2rem',
        '11': '4.5rem',
        '12': '6rem',
      },
      fontSize: {
        pxl: '1.7rem',
        plan: '2.5rem',
        num: '4rem',
        mexl: '3rem',
        
      },
      gridTemplateColumns: {
        'features': 'repeat(auto-fit, minmax(18.7rem, .5fr))',
        'md-features': 'repeat(auto-fit, minmax(15.7rem, .5fr))',
        'feature': '1fr',
        'advantage': 'repeat(auto-fit, minmax(10rem, 1fr))',
        'xladvantage': '1fr',
        'plans': 'repeat(auto-fit, minmax(24rem, 1fr))',
        'mplans' : '1fr', 
        'footer': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'mfooter' : '1fr',
        'plan': '1fr',
        'mplan': 'repeat(1, 1fr)',
        'first-and-last-cols' : '.5fr repeat(4, 1fr) .5fr',
        'sm-first-and-last-cols' : '.2fr repeat(4, 1fr) .2fr',
        'product': '1fr'
      },
      gridTemplateRows: {
        'feature': '1fr 1fr',
        'sales': '10rem 10rem max-content',
        'plans': 'repeat(auto-fit, minmax(min-content, .5fr))',
        'plan': 'repeat(3, minmax(13rem, 1fr))',
        'contact' : 'min-content',
        'footer': 'min-content',
        'advantage': 'repeat(auto-fit, 1fr)',
        'product': '.25fr 1fr'
      },
      borderRadius: {
        'me': '2.5rem',
        'me1': '2.75rem',
         
        'me2': '4rem',
      },
      keyframes: {
        moveInLeft: {
          '0%' : { 
            opacity: '0',
            transform: 'translateX(-5rem)'
           },
          '80%' : {
            transform: 'translateX(1rem)' 
          },      
          '100%' : {
          opacity: '1',
          transform: 'translate(0)'
          }
        },
        moveInRight: {
          '0%' : {
              opacity: '0',
              transform: 'translateX(5rem)'
          },
          '80%' : {
              transform: 'translateX(-1rem)'
          },
          '100%' : {
              opacity: '1',
              transform: 'translate(0)'
          }
        },
        moveInBottom : {
          '0%' : {
              opacity: '0',
              transform: 'translateY(3rem)'
          },
          '100%' : {
              opacity: '1',
              transform: 'translate(0)'
          }
        },
        animateBox : {
          '13%' : {
              transform: 'rotateX(20deg) rotateY(0deg)'
          },
          '20%' : {
              transform: 'rotateX(60deg) rotateY(-25deg)'
          },
          '35%' : {
              transform: 'rotateX(-80deg) rotateY(5deg);'
          },
      
          '50%' : {
              transform: 'rotateX(15deg) rotateY(80deg);'
          },
      
          '65%' : {
              transform: 'rotateX(10deg) rotateY(-90deg);'
          },
      
          '80%' : {
              transform: 'rotateX(13deg) rotateY(-180deg);'
          },
          
          '97%' : {
              transform: 'rotateX(-280deg) rotateY(-5deg);'
          },

          '100%' : {
              transform: 'rotateX(-280deg) rotateY(-5deg);'
          }
        },
        rotate : {
          '0%' : {
              transform: 'perspective(1000px) rotateY(0deg);'
          },
          '100%' : {
              transform: 'perspective(1000px) rotateY(360deg);'
          }
        }
      },
      animation: {
        moveInLeft: 'moveInLeft 1s ease-out',
        moveInRight: 'moveInRight 1s ease-out',
        moveInBottom: 'moveInBottom .5s ease-out .5s',
        animateBox: 'animateBox 10s infinite',
        animateHoverBox: 'animateBox 25s infinite',
        rotate: 'rotate 35s linear infinite',
        slowRotate: 'rotate 45s linear infinite'
      }
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}
