import LanguageContext from '../../context/LanguageContext'

import './index.css'

const langOptions = [
  {id: 1, value: 'EN', language: 'English'},
  {id: 2, value: 'HI', language: 'हिंदी'},
  {id: 3, value: 'TE', language: 'తెలుగు'},
]

const Header = () => (
  <LanguageContext.Consumer>
    {value => {
      const {activeLanguage, changeLanguage} = value
      // step 2
      const onChangeLanguage = event => {
        changeLanguage(event.target.value) // step 3 change method is called in app Component
      }

      return (
        <nav className="nav-header">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
            alt="website logo"
          />
          <select
            className="language-dropdown" // step 1  first we select the drop down list
            value={activeLanguage}
            onChange={onChangeLanguage} // step 2 onChange method is called
          >
            {langOptions.map(eachOption => (
              <option key={eachOption.id} value={eachOption.value}>
                {eachOption.language}
              </option>
            ))}
          </select>
        </nav>
      )
    }}
  </LanguageContext.Consumer>
)

export default Header
