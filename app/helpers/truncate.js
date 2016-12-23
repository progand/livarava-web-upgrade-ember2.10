import Ember from 'ember';
import _ from 'lodash';

/**
 * Truncates text using lodash function 'truncate'.
 * Optionally provides additional transformation.
 * @param text (string): string to truncate.
 * @param length (number): maximum string length
 * @param omission (string): string to indicate text is omitted
 * @param separator (RegExp|string): separator pattern to truncate to
 * @param striptags (boolean): flag to remove all html tags
 * @returns {string}
 */
export function truncate([text=''], {length=100, omission='...', separator=' ', striptags=false}) {
  let result = text;
  if(striptags){
    result = result.replace(/(<([^>]+)>)/ig,"");
  }

  return _.truncate(result, {
    length: length,
    omission: omission,
    separator: separator
  });
}

export default Ember.Helper.helper(truncate);
