/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-bottom': {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'swing-in-top-fwd': {
          '0%': {
            transform: 'rotateX(-100deg)',
            transformOrigin: 'top',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            transformOrigin: 'top',
            opacity: '1',
          },
        },
        'shadow-drop-center': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          },
          '100%': {
            boxShadow: '0 0 15px 0px rgba(0, 0, 0, 0.35)',
          },
        },
        'shadowdim-drop-center': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          },
          '100%': {
            boxShadow: '0 0 5px 0px rgba(0, 0, 0, 0.35)',
          },
        },
        'kenburns-top': {
          '0%': {
            transform: 'scale(1) translateY(0)',
            transformOrigin: '50% 16%',
          },
          '100%': {
            transform: 'scale(1.25) translateY(-15px)',
            transformOrigin: 'top',
          },
        },
        
      },
      animation: {
        'slide-bottom': 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'swing-in-top-fwd': 'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
        'shadow-drop-center': 'shadow-drop-center 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'shadowdim-drop-center': 'shadowdim-drop-center 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'kenburns-top': 'kenburns-top 5s ease-out both',
      },
    },
  },
  plugins: [],
}

