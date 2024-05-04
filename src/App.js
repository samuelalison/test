import * as React from 'react'
import './App.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home';


// const theme = extendTheme();



function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}
export default App;
