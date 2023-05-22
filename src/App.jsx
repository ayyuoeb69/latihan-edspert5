import './App.css';

const App = () => {

  const buah = ['anggur', 'apel', 'jeruk', 'melon'];

  const pelanggan = [
    {
      'name': 'Joko',
      'age': '24',
      'isActive': false
    },
    {
      'name': 'Harun',
      'age': '34',
      'isActive': true
    },
    {
      'name': 'Nana',
      'age': '14',
      'isActive': true
    },
  ]

  const handleClick = () => {
    for(let i = 0; i<buah.length; i++){
      console.log(buah[i]);
    }
  }

  return (
    <div className=''>
      <h2>Halo</h2>
      {
        pelanggan.map((item, key) => {
          return(
            <div style={{border: '1px solid black', padding: '10px', backgroundColor: item.isActive ? 'green' : 'red' }}>
              <h1>{item.name}</h1>
              <h2>{item.age}</h2>
            </div>
          )
        })
      }
      <button onClick={handleClick}>Klik</button>
    </div>
  )
}

export default App;
