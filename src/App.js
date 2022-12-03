import {Component} from 'react'
import LanguageContext from './context/LanguageContext'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'EN'} // once state is updated render method is called

  // step 3 is called here, updating the new selection of active language of the state is updated
  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state // step 4 new selection of active language
    return (
      // React context is provides two Properties here we use Provider to update the values
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changeLanguage, // step 5 finally updated the context using the Provider
        }}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider> // once provider updated the value all the 3 components will be re rendered within the provider
    )
  }
}

export default App
