import './App.css'
import Card from './components/Card'
import CARDS from './components/DataCards'

function App() {

  return (
    <div className="App">
      {CARDS.map((card) =>
        <Card
          {...card}
          key={card.id}
        >
          <p className="card-text">{card.text}</p>
        </Card>
      )}
    </div>
  );
}

export default App
