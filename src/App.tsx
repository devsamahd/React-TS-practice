import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from './components/List'

function App() {

  return (
    <div className="App">
      <Heading title="Hello world" />
      <Section>
        Samahd is a boss 
      </Section>
      <Counter />
      <List items={["Coffes", "Coke", "Soda", "Code"]} render={(item: string)=> <span>{item}</span>
      } />
    </div>
  )
}

export default App
