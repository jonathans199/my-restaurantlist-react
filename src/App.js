import { useState , createContext} from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom'; // allows routing other components inside of him // Routes is kind of like switch statement 
import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage'
import Login from './components/Login'
import './App.css';

const { Header , Content } = Layout;

export const UserContext = createContext(null)  // any components  inside here need to be exported

function App() {
  const [ user , setUser] = useState(); // initialize user as state variable and undifined ()
  return (
    // two super suite to wrap the components
    <BrowserRouter> 
    <UserContext.Provider value={{user, setUser}}>

      <Layout className='layout'>
        <Header>
          <Menubar user={user}/>
        </Header>
        <Content>
          <Routes>
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
            <Route path='/random' element={<h1>Random</h1>} />
            <Route path='/add' 
            element={
              !user // if user is falsy then show the login page
            ? <Login  />  //  if user is true show add restaurant
            : <h1>Add Restaurant</h1>    // the user is login and can add restaurant
            } />
            {/* <Route path='/login' element={!user ?<Login /> : <h1>Add Restaurant</h1>} /> */}
            <Route path='/' element={<RestaurantList />} />
          </Routes>
        </Content>
      </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
