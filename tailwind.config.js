/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens:{
      sm:'800px',
      md:'970px',
      lg:'1024px',
      xl:'1280px'
    },
    colors:{
      baseColor:'#a10909',
      baseColor2:"#f8e8e8",
      baseColor3:"#640a0a",
      white:"white",
      black:"#111111",
      grey:"#3e3636",
      green:"green",
      yellow:"yellow",
      blue:"blue",
      red:"red"
    },
    boxShadow:{
      md:"0px 0px 5px -2px black",
      special:"0px 0px 3px -1px black",
    }
  },
  plugins: [],
}

