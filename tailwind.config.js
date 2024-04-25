/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fw':"url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'whterimage':"url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=800')",
        'logo':"url('https://w7.pngwing.com/pngs/993/679/png-transparent-iphone-4s-ios-7-computer-icons-weather-weather-logo-thumbnail.png')"
      }
    },
  },
  plugins: [],
}