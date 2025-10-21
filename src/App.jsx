import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  
  return (
    <div className='principal'>
      <Navbar />
      <ItemListContainer itemList="Bienvenido al Ecommerce" />
    </div>
  )
}

export default App
