import "./App.css";
import Footer from "./Footer";
import MyHeader from "./MyHeader";
import MyNav from "./MyNav";
import Left from "./Left";
import Right from "./Right";
function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyNav />

      <div class="container mt-5">
        <div class="row">
          <Left></Left>
          <Right></Right>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default App;
