import en from '../translations/en.json'
import pl from '../translations/pl.json'

const translate = (id, language) => {
  let translations = {en: en, pl: pl}

  translations = translations[language] || null;

  id.split('.').map((el) => {
    translations = translations[el] || null;
  })

  return translations;
}

export default translate;