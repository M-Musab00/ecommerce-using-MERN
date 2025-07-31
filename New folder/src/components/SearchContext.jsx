import { createContext, useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export const SearchToggle = ({children}) => {  

        const [showSearch, setShowSearch] = useState(false);
      

  return (
    <SearchContext.Provider value={{showSearch,setShowSearch}}>
        {children}
    </SearchContext.Provider>
  );
}
