import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

// Set main page to be scrollable, and teal background
const styles = {
  backgroundStyle: {
    backgroundColor: '#cff8fc', // This is sky blue
    height: '250vh',
  }
}

// The main page. Should have a header, content(projects, experience), footer
const App = () => {
  return (
    <div style={styles.backgroundStyle}>

      <Header author="About Mark Du"/>

      <Content/>

      <Footer/>
    </div>
  );
}

export default App;


