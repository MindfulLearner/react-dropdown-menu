import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import menuData from './data';
import { MenuItem } from './data';

function App() {
  const [menuScelto, setMenuScelto] = useState<MenuItem | null>(null);  
  const [sottoMenuScelto, setSottoMenuScelto] = useState<MenuItem | null>(null);

  const gestisciMenuClick = (menu: MenuItem) => {
    setMenuScelto(menu);
    setSottoMenuScelto(null);
  };

  const gestisciSottoMenuClick = (sottoMenu: MenuItem) => {
    setSottoMenuScelto(sottoMenu);
  };

  const gestisciSottoSottoMenuClick = (sottoMenu: MenuItem) => {
    setSottoMenuScelto(sottoMenu);
    console.log(sottoMenu);
  };

  return (
    <div className="App bg-red-500">
    <div className="bg-blue-500">
      {/* i do 3 layer of data clickable example first data click then appear a second and then third */}
      {menuData.map((item) => (
        <div key={item.title}>
          <button onClick={() => gestisciMenuClick(item)}>{item.label}</button>
          {menuScelto === item && (
            <div className="bg-red-50">
              {item.subMenu.map((subItem) => (
                <div key={subItem.title}>
                  <button onClick={() => gestisciSottoSottoMenuClick(subItem)}>{subItem.label}</button>
                  {sottoMenuScelto === subItem && (
                    <div className="bg-red-50">
                      {subItem.subMenu.map((subSubItem) => (
                        <button onClick={() => gestisciSottoSottoMenuClick(subSubItem)} key={subSubItem.title}>{subSubItem.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {sottoMenuScelto === menuScelto?.subMenu.find(sub => sub.title === sottoMenuScelto?.title) && (
            <div className="bg-red-50">
            </div>
          )}
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
