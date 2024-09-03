import "./styles.css";
import ShowDogImages from './DogImages'

export default function App() {
  return (
    <div className="App">
      <h1>High Order Component Example</h1>
      <h2>This is a simple example of an HOC design pattern.</h2>
      <p>For more info see <a href="https://www.patterns.dev/react/hoc-pattern">Patterns.dev</a></p>
      <ShowDogImages />
    </div>
  );
}
