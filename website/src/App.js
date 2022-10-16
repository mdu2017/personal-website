import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

const styles = {
  backgroundStyle: {
    backgroundColor: '#cff8fc',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',  // This is used to hide the scrollbar at the bottom
  },
  breakStyle: {
    flexBasis: '100%',
    height: 0,
  }
}

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


