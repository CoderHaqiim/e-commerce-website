import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { myitems } from './components/data2'
import { allItems } from './components/data'
import { register } from 'swiper/element/bundle'
import AddToPage from './components/AddToPage'
import { useState,useEffect,useRef} from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from './components/Cart'
register();


function App() {

  const user = {
    username:'',
    usercart:[]
  }
  const btnId = 1

  const [phones,groceries,laptops,fashion,perfumes,appliances] = allItems
  const [deductAmount,setDeductAmount] = useState(false)
  const [removeId,setRemoveId] = useState(null)
  const [product,setProduct] = useState({})
  const [name,setName] = useState('')
  const [hidden,setHidden] = useState(true)
  const [hideButton,setHideButton] = useState(false)
  const [allAmount,setAllamount] = useState([0])
  const[total,setTotal]= useState(0)
  const [price,setPrice] = useState('')
  const [image,setImage] = useState({})
  const [itemId, setItemId] = useState({})
  const firstlist = [phones[0],groceries[0],laptops[0],fashion[0],perfumes[0],appliances[0]]
  const [all,setAll]= useState(true)
  const [clear,setClear] = useState(false)
  const [list,setList] = useState(firstlist)
  const [cart, setCart] = useState([])
  const [cartItems,setCartItems] = useState(0)
  const [username,setUsername] = useState("Haqiim")
  const rendered = useRef(true)
  const productSelected = useRef(true)
  const changedcart = useRef(true)
  const prevCart = useRef(cartItems)

  useEffect(()=>{
    if(rendered.current) !rendered
    {
      allItems.map((items)=>items.map((item)=> item.id === itemId && setProduct(item)))
    }
  },[itemId])

  useEffect(()=>{
    if(productSelected.current) !productSelected
      {
        setImage(product.image)
        setName(product.title)
        setPrice(product.price)
        console.log(product.image)
        console.log(` product: ${product.id}`)
      }
  },[product])

  useEffect(()=>{
    if(changedcart.current) !changedcart
    {
      setCartItems(cart.length)
      console.log(cartItems)
      console.log(prevCart.current)

          const calc = allAmount.reduce((a,b)=>a+b)
          console.log(calc)
          setTotal(calc)
    }
  },[cart])

  

  const addtocart = () =>{
      addedmessage()
    //setHideButton(true)
      setCart([...cart,product])
      setRemoveId(product.id)
      setAllamount([...allAmount,product.price])
  }

  const useItemId = (id) =>{
    setItemId(id)
  }

  const filteritems = (id) =>{
    switch(id){
      case "phone" : {setList(phones),setAll(false)} break;
      case "groceries" : {setList(groceries),setAll(false)} break;
      case "laptop" : {setList(laptops),setAll(false)} break;
      case "fashion" : {setList(fashion),setAll(false)} break;
      case "perfume" : {setList(perfumes),setAll(false)} break;
      case "appliances" : {setList(appliances),setAll(false)} break;
      default : {setList(firstlist),setAll(true)}
    }
  }

  const addedmessage = () =>{
    setHidden(false)
    setTimeout(()=>{
      setHidden(true)
    },2000)
  }

  const removeItem = (item) =>{
     let filteredcart = cart.filter((product,index)=>{

      const deduct = () => {
        console.log(`allamount:${allAmount}`)
        console.log(`price:${product.price}`)
        const filteredAmount = allAmount.filter((item,index)=>{
          return item !== product.price || allAmount.indexOf(item) !== index
        })
        setAllamount(filteredAmount)
      }

      index === item && deduct()
      return index !== item
    })
    setCart(filteredcart)
  }

  return(
    <div className="w-full h-auto bg-baseColor2 max-w-[1400px]">
      <Navbar username = {username} cartItems={cartItems}/>
      <Routes>
        <>
          <Route path='/' element={<Home display={list} filteritems={filteritems} allitems={list} all={all} clear={clear} useItemId={useItemId} itemId={itemId}/>}/>
          <Route path='/addtocart' element={<AddToPage hideButton={hideButton}itemId={itemId} hidden={hidden} allItems={allItems} image={image} name={name} price={price} addtocart={addtocart}/>}/>
          <Route path = '/shoppingcart' element={<Cart removeId={removeId} removeItem={removeItem} cartItems={cartItems} cart={cart} total={total}/>}/>
        </> 
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
