'use strict'

// HW20

const array = [
  { name: 'asdSad', color: 'Blue' },
  { name: 'gghfgh', color: 'red' },
  { name: 'hgfhfgh', color: 'white', contentType: [{ name: 'wewew', color: 'red' }] },
  [{ name: 'wewew', color: 'bLue' }]
]

/**
 * Filters collection from array
 * @param {array} array
 * @param {string} keyWords
 * @param {boolean} all
 * @param {string} ...fields
 * @returns {array}
 */
function filterCollection (array, keyWords, all, ...fields) {
  function filter(element) {
    function checkKeywords(elem) {
      for (const field of fields) {
        const fieldNames = field.split('.');
        let value = element;
    
        for (const fieldName of fieldNames) {
          if (value === undefined) {
            return false;
          }
    
          value = value[fieldName];
    
          if (Array.isArray(value)) {
            for (const item of value) {
              if (item.name.toLowerCase().includes(elem.toLowerCase())) {
                return true;
              }
            }
            return false;
          } else if (typeof value === 'object' && value !== null) {
            value = Object.values(value);
          }
        }
    
        if (value.toLowerCase().includes(elem.toLowerCase())) {
          return true;
        }
      }
    
      return false;
    }
    if (all === true) {
      if (keyWords.split(' ').every(checkKeywords)) {
        return element
      }
      
    }
    else {
      if (keyWords.split(' ').some(checkKeywords)) {
        return element
      }
  }}
  return array.flat().filter((filter));
}

console.log(filterCollection (array, 'Asdsad blue', true, 'color', 'name', 'contentType.color'));
