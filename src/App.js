import UserProfile from './components/UserProfile'

import './App.css'

const UserDetalisList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Reactjs',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'python',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://nypost.com/wp-content/uploads/sites/2/2020/12/yael-most-beautiful-video.jpg?quality=75&strip=all&w=1200',
    name: 'Devon Lane',
    role: 'AI',
  },
]

const App = () => (
  <div className="container">
    <h1>listItem</h1>
    <ul>
      {UserDetalisList.map(eachItem => (
        <UserProfile UserDetalis={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
