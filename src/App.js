import UserProfile  from './components/UserProfile';
import './App.css';

let UserDetails = [{
  uniqueKey:1,
  imageUrl:"https://img.freepik.com/premium-photo/cost-living-still-life_23-2151577313.jpg?w=360",
  userName:"Ravi",
  role:"developer"
},
{
  uniqueKey:2,
  imageUrl:"https://img.freepik.com/premium-photo/cost-living-still-life_23-2151577313.jpg?w=360",
  userName:"Ram",
  role:"developer"
},
{
  uniqueKey:3,
  imageUrl:"https://img.freepik.com/premium-photo/cost-living-still-life_23-2151577313.jpg?w=360",
  userName:"Rajaesh",
  role:"developer"
},
{
  uniqueKey:4,
  imageUrl:"https://img.freepik.com/premium-photo/cost-living-still-life_23-2151577313.jpg?w=360",
  userName:"Karthik",
  role:"developer"
}]
function App() {
  return (
    <div className="App">
      {UserDetails.map((eachItem) =>(<UserProfile userDetails={eachItem} key={eachItem.uniqueKey}/>))}
    </div>
  );
}

export default App;
