import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UseEffectHook from '../Components/UseEffectHook'
import Counter from '../Components/Counter'
import PageNotFound from '../Components/PageNotFound/PageNotFound'
import Bmi from '../Components/BMI/Bmi'
import Weather from '../Components/Weather/Weather'
const RoutesModule = () => {
  return <>
  {/* Routes ek wraper hai jiske andar Route aate hai */}
    <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='useeffect' element={<UseEffectHook />} />
        <Route path='bmi' element={<Bmi />} />
        <Route path='weather' element={<Weather />} />
        {/* wild card characters(mtlb ye niche wala) ye hum humesa routing ke end m hi add kare previous m nahi kyunki JS m upar se niche kaam karti hai; agar isse pehele add kar diya to usko lagega ki koi route exit hi nahi karta to fir wo har ek route ko as wild card character consider kar lega; toh instead of that hume usee aakhir m hi add krna chahiye taaki wo saare routes dhunde aur agar usey route na mile tab wo wild card character pe kude */}
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  </>
}

export default RoutesModule