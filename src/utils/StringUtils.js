const StringUtils = {
  parseResultInString: (resultObject) => {
    let resultString = '';

    Object.keys(resultObject).forEach(key => {
      resultString += `[ ${key} | ${resultObject[key].join(' | ')} ]\n`;
    });

    return resultString;
  }
}

export default StringUtils;