import React from "react";
import LanguageSelect from "./LanguageSelect";
import Youtube from "./Youtube";
import Count from "./Count";
import { LOCALES, WEDDINGDATE, DATEOPTIONS } from "../common/constants";
import { enStrings } from "../lang/language";
import JibramAndDasom from "../images/JibramAndDasom.png";

// Images

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locale: LOCALES.EN, strings: enStrings };
  }

  selectLanguage = ({ locale, strings }) => {
    this.setState({ locale: locale, strings: strings });
  };

  render() {
    const weddingDateTime = new Date(WEDDINGDATE);
    const STRINGS = this.state.strings;

    return (
      <div className="App">
        <LanguageSelect selectLanguage={this.selectLanguage} />
        <img
          className="JibramAndDasom"
          src={JibramAndDasom}
          alt="Jibram and Dasom Portrait"
        />
        <div className="title">{STRINGS.TITLE}</div>
        <div className="subtitle">
          {weddingDateTime.toLocaleString(this.state.locale, DATEOPTIONS)}
        </div>
        <Count STRINGS={STRINGS} date={weddingDateTime} />
        <Youtube STRINGS={STRINGS} />
      </div>
    );
  }
}

export default App;
