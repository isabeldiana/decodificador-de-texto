const textarea = document.getElementById("textInput");

const encrypText = () => {
  let encryptedPhrase = '';
  let text = textarea.value;
  const replacement = {
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  if (/^[a-z]+$/.test(text)) {
    for (i = 0; i < text.length; i++) {
      let char = text[i];
      if (replacement[char]) {
        encryptedPhrase += replacement[char]
      } else {
        encryptedPhrase += char;
      }
    }
  } else {
    const contentFooterP = document.querySelector('.content-input-footer-p');

  }

  const result = document.getElementById('result-content');
  result.textContent = encryptedPhrase;
  if (/^[a-z]+$/.test(text)) {
    const contentResultHidden = document.querySelector('.content__result-section-hidden');
    contentResultHidden.style.display = 'flex';

    const contentResult = document.querySelector('.content__result-section');
    contentResult.style.display = 'none';
  }
  return encryptedPhrase;

}


const decryptText = () => {
  let phrasesDecrypted = '';
  let text = textarea.value;
  const replacement = {
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  for (let [key, value] of Object.entries(replacement)) {
    text = text.split(key).join(value);
  }
  phrasesDecrypted = text;

  const result = document.getElementById('result-content');
  result.textContent = phrasesDecrypted;

  if (/^[a-z]+$/.test(text)) {
    const contentResultHidden = document.querySelector('.content__result-section-hidden');
    contentResultHidden.style.display = 'flex';

    const contentResult = document.querySelector('.content__result-section');
    contentResult.style.display = 'none';
  }
  return phrasesDecrypted;
}


const copyText = () => {
  let textCopy = document.getElementById('result-content').innerText;
  navigator.clipboard.writeText(textCopy)
}