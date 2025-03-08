import Navbar from "./components/Navbar"
import { Routes,Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
// import { useAuthStore } from "../store/useAuthStore"
import { useAuthStore } from "./store/useAuthStore"
import {useThemeStore } from "./store/useThemeStore"
import { useEffect } from "react"
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"
// import{bodyParser} from "body-parser"
const App = () => {
 
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore()
   const{theme}= useThemeStore()

console.log({onlineUsers})

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({authUser});
  
if(isCheckingAuth && !authUser) return(
<div className="flex items-center justift-center h-screen">
<Loader className = "size-10 animate-spin"/>
</div>
)

  return (
    <div data-theme={theme}>
  
   <Navbar/>

   <Routes>
    <Route path="/" element={ authUser ? <HomePage/> : <Navigate to ="/login"/>}/>
    <Route path="/signup" element={ !authUser ? <SignUpPage/> :<Navigate to ="/login"/>}  />
    <Route path="/login" element={!authUser ?<LoginPage/> : <Navigate to ="/login"/> }/>
    <Route path="/settings" element={  <SettingsPage/>  }/>
    <Route path="/profile" element={  authUser ?<ProfilePage/>  : <Navigate to ="/login"/>}/>

   </Routes>
   <Toaster/>
</div>
  )
}

export default App

// daisy ui is plugin fro tailwind css that provides a set of pre designed ui components

// axios is a poular javascript library used for maing thr ehttp request in web applications commonly used with rReact and Node Js