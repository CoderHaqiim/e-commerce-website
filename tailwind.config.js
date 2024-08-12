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
    borderRadius:{
      small:'10px',
      medium:'15px',
      large:'20px'
    },
    colors:{
      baseColor:'#111111',
      baseColor2:"#f5e8cd",
      baseColor3:"#640a0a",
      accent:'#eb8911',
      accent2:'',
      accent3:'#ebd7d4',
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
      special:"0px 0px 5px -3px black",
    }
  },
  plugins: [],
}

