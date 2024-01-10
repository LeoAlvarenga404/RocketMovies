import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { MyFilms } from '../pages/MyFilms';
import { Profile } from '../pages/Profile'
import { New } from '../pages/New';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/details" element={<Details/>}/>
      <Route path="/" element={<MyFilms/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/new" element={<New/>}/>
    </Routes>
  )
}