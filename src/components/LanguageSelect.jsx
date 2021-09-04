import React from "react";
import { LOCALES } from "../common/constants";
import { enStrings, esStrings, krStrings } from "../lang/language.js";
import USA from "../images/us.png";
import KOREA from "../images/korea.png";
import MEXICO from "../images/mexico.png";

class LanguageSelect extends React.Component {
  getLocaleStrings = (locale) => {
    let strings;
    switch (locale) {
      case LOCALES.EN:
        strings = enStrings;
        break;
      case LOCALES.ES:
        strings = esStrings;
        break;
      case LOCALES.KR:
        strings = krStrings;
        break;
      default:
        strings = enStrings;
    }
    return { locale, strings };
  };

  render() {
    return (
      <div className="flags">
        <img
          className="flag"
          src={USA}
          alt="English - American Flag"
          onClick={() =>
            this.props.selectLanguage(this.getLocaleStrings(LOCALES.EN))
          }
        ></img>
        <img
          className="flag"
          src={MEXICO}
          alt="Spanish - Mexican Flag"
          onClick={() =>
            this.props.selectLanguage(this.getLocaleStrings(LOCALES.ES))
          }
        ></img>
        <img
          className="flag"
          src={KOREA}
          alt="Korean - Korean Flag"
          onClick={() =>
            this.props.selectLanguage(this.getLocaleStrings(LOCALES.KR))
          }
        ></img>
      </div>
    );
  }
}

export default LanguageSelect;
