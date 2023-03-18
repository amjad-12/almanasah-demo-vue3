/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      vvsm: {'max': '300px'},

      vsm: {'max': '372px'},

      msm: {'max': '563px'},

      sm: {'max': '600px'},

      md: {'max': '700px'},

      lg: {'max': '900px'},

      xl: {'max': '1150px'},
      

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
        'feature': '16rem',
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
      },
      gridTemplateRows: {
        'feature': 'repeat(2, 6.5rem)',
        'sales': '10rem 10rem max-content',
        'plans': 'repeat(auto-fit, minmax(min-content, .5fr))',
        'plan': 'repeat(3, minmax(13rem, 1fr))',
        'contact' : 'min-content',
        'footer': 'min-content',
        'advantage': 'repeat(auto-fit, 1fr)'
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
        }
      },
      animation: {
        moveInLeft: 'moveInLeft 1s ease-out',
        moveInRight: 'moveInRight 1s ease-out',
        moveInBottom: 'moveInBottom .5s ease-out .5s'
      }
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
  ],
}
