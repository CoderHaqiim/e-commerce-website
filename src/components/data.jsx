import React from 'react';
import iphone from "../assets/allitems/iphone.jpeg"
import tecno from "../assets/allitems/tecno.jpg"
import samsung from "../assets/allitems/samsung.jpeg"
import redmi from "../assets/allitems/redmi.jpeg"
import semolina from "../assets/allitems/semolina.jpeg"
import rice from "../assets/allitems/rice.jpeg"
import spread from "../assets/allitems/spread.jpeg"
import chivita from "../assets/allitems/chivita.jpeg"
import dell from "../assets/allitems/dell.jpeg"
import hp from "../assets/allitems/hp.jpeg"
import macbook from "../assets/allitems/macbook.jpeg"
import lenovo from "../assets/allitems/lenovo.jpeg"
import chanel from "../assets/allitems/chanel.jpg"
import boadicea from "../assets/allitems/boadicea.jpg"
import fridge from "../assets/allitems/fridge.jpg"
import iron from "../assets/allitems/iron.jpg"
import kettle from "../assets/allitems/kettle.jpg"
import menssuit from "../assets/allitems/menssuit.jpg"
import nikeairforce from "../assets/allitems/nikeairforce.jpg"
import suavage from "../assets/allitems/suavage.jpg"
import wmachine from "../assets/allitems/wmachine.jpg"
import blouse from "../assets/allitems/blouse.jpg"
import christiandior from "../assets/allitems/blouse.jpg"
import airjordan from "../assets/allitems/airjordan.jpg"



const allItems = [
    [   
        {
            title:'Tecno Pova Neo',
            image:tecno,
            price:350000,
            text:'a',
            brand:"Tecno",
            id:1,
            discount:true,
            off:"50%",
            type:"Phones"
        },
        {
            title:'Iphone 13 pro max',
            image: iphone,
            price:650000,
            text:'a',
            brand:"Apple",
            id:2,
            discount:false,
            type:"Phones"
        },
        {
            title:'Samsung Galaxy s20 Ultra',
            image:samsung,
            price:560000,
            text:'a',
            brand:"Samsung",
            id:3,
            discount:false,
            type:"Phones"
        },
        {
            title:'Redmi 9c',
            image:redmi,
            price:50000,
            text:'a',
            brand:"Xaiomi",
            id:4,
            discount:false,
            type:"Phones"

        }
    ],
    [   
        {
            title:"Mama's Choice Parboiled Rice",
            image:rice,
            price:37000,
            text:'a',
            brand:'Good mama',
            id:6,
            discount:true,
            off:"40%",
            type:"Groceries"

        },
        {
            title:'Goldenpenny Semolina',
            image:semolina,
            price:10000,
            text:'a',
            brand:"Golden penny",
            id:5,
            discount:false,
            type:"Groceries"

        },
        {
            title:"Blueband Spread",
            image:spread,
            price:500,
            text:'a',
            brand:"Blue band",
            id:7,
            discount:false,
            type:"Groceries"

        },
        {
            title:"Chivita",
            image:chivita,
            price:500,
            text:'a',
            brand:"Chi",
            id:8,
            discount:false,
            type:"Groceries"

        }
    ],
    [
        {
            title:'Hp Elitebook',
            image:hp,
            price:800000,
            text:'a',
            brand:'Hp',
            id:9,
            discount:true,
            off:"60%",
            type:"Laptops"
        },
        {
            title:'Dell',
            image:dell,
            price:750000,
            text:'a',
            brand:'Dell',
            id:10,
            discount:false,
            type:"Laptops"
        },
        {
            title:'Macbook',
            image:macbook,
            price:1500000,
            text:'a',
            brand:'Apple',
            id:11,
            discount:false,
            type:"Laptops"
        },
        {
            title:'Lenovo',
            image:lenovo,
            price:780000,
            text:'a',
            brand:'Lenovo',
            id:12,
            discount:false,
            type:"Laptops"
        }
    ],
    [
        {
            title:'Nike Air Jordan',
            image:airjordan,
            price:50000,
            text:'a',
            brand:'Nike',
            id:13,
            discount:false,
            type:"Fashion"
        },
        {
            title:"Nike Air force",
            image:nikeairforce,
            price:45000,
            text:'a',
            brand:'Nike',
            id:14,
            discount:false,
            type:"Fashion"
        },
        {
            title:"Blouse",
            image:blouse,
            price:30000,
            text:'a',
            brand:'Adidas',
            id:15,
            discount:false,
            type:"Fashion"
        },
        {
            title:"Men's suit",
            image:menssuit,
            price:65000,
            text:'a',
            brand:'New Balance',
            id:16,
            discount:false,
            type:"Fashion"
        }
    ],
    [
        {
            title:"Chanel",
            image:chanel,
            price:250000,
            text:'a',
            brand:'Moussif',
            id:17,
            discount:false,
            type:"Perfumes"
        },
        {
            title:'Christian dior',
            image:christiandior,
            price:11200,
            text:'a',
            brand:'Malizia',
            id:18,
            discount:false,
            type:"Perfumes"
        },
        {
            title:'Suavage',
            image:suavage,
            price:12500,
            text:'a',
            brand:'Gucci',
            id:19,
            discount:false,
            type:"Perfumes"
        },
        {
            title:'Boadicea',
            image:boadicea,
            price:98000,
            text:'a',
            brand:'Nivia',
            id:20,
            discount:false,
            type:"Perfumes"
        }
    ],
    [
        {
            title:"Electric Kettle",
            image:kettle,
            price:15000,
            text:'a',
            brand:'Moussif',
            id:21,
            discount:false,
            type:"Home Appliances"
        },
        {
            title:'Electric iron',
            image: iron,
            price:12800,
            text:'a',
            brand:'Malizia',
            id:22,
            discount:false,
            type:"Home Appliances"
        },
        {
            title:'Washing machine',
            image:wmachine,
            price:125000,
            text:'a',
            brand:'Gucci',
            id:23,
            discount:false,
            type:"Home Appliances"
        },
        {
            title:'Fridge',
            image:fridge,
            price:540000,
            text:'a',
            brand:'Nivia',
            id:24,
            discount:false,
            type:"Home Appliances"
        }
    ]
]
   

export {allItems}