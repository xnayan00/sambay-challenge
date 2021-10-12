import Header from './components/header'
import TabBar from './components/tabBar'
import ProductsList from './components/productsList'
import ProductsView from './components/productsView'
import './css/main.css'

import image01 from './assets/product01.jpg'
import image02 from './assets/product02.jpg'
import image03 from './assets/product03.jpg'
import image04 from './assets/product04.jpg'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  const products = ([
    {
        'id': 1,
        'name': 'Caneca Personalizada',
        'img': `${image01}`,
        'price': '7,50',
        'state': 'Novo',
        'details': {
            'category': 'Category 01',
            'weight': '18',
            'size': '2x6',
            'material': 'Algum material',
            'createdBy': 'Alguma marca'
        },
        'description': 'Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Suspendisse sed nisi lacus sed viverra tellus. Velit euismod in pellentesque massa. Pulvinar sapien et ligula ullamcorper malesuada proin. Platea dictumst quisque sagittis purus sit. Consequat interdum varius sit amet mattis vulputate. Velit sed ullamcorper morbi tincidunt ornare. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis.'
    },
    {
        'id': 2,
        'name': 'Canecas de chá',
        'img': `${image02}`,
        'price': '8,25',
        'state': 'Novo',
        'details': {
            'category': 'Category 01',
            'weight': '18',
            'size': '2x6',
            'material': 'Algum material',
            'createdBy': 'Alguma marca'
        },
        'description': 'Quis commodo odio aenean sed adipiscing. Accumsan lacus vel facilisis volutpat est velit. Nisi est sit amet facilisis magna etiam tempor. Massa eget egestas purus viverra accumsan.'
    },
    {
        'id': 3,
        'name': 'Caneca Azul',
        'img': `${image03}`,
        'price': '5,00',
        'state': 'Novo',
        'details': {
            'category': 'Category 01',
            'weight': '18',
            'size': '2x6',
            'material': 'Algum material',
            'createdBy': 'Alguma marca'
        },
        'description': 'Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Malesuada fames ac turpis egestas maecenas.'
    },
    {
        'id': 4,
        'name': 'Chaveirinho',
        'img': `${image04}`,
        'price': '7,00',
        'state': 'Novo',
        'details': {
            'category': 'Category 01',
            'weight': '18',
            'size': '2x6',
            'material': 'Algum material',
            'createdBy': 'Alguma marca'
        },
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
    },
  ])
  return (
    <Router>
      <div className="App">
        <Header />
        <TabBar />
          <Switch>
            <Route exact path="/">
              <ProductsList products={products}/>
            </Route>
            <Route path="/:id">
              <ProductsView products={products}/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
