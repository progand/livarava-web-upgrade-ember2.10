import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import RSVP from 'rsvp';

const forbidden = 'script, style, iframe, frame, meta, link, head';

function parse(content, selector = 'body', without = '') {
  let $html,
    result;

  $html = Ember.$(content).not(forbidden);
  if (without) {
    $html = $html.not(without);
    $html.filter(without).remove();
    $html.find(without).remove();
  }
  if (selector) {
    $html = $html.find(selector);
  }
  result =  $html.html();
  return result;
}

export default function getArticle(data = {}, selector = '', without = '') {
  if (ENV.environment === 'development') {
    data.key = 'Q0eQWbEUJRerVFqEURGxz8pO8F2yc2sMO-Z1qUu0'; // Add an access token param.
  }
  return new RSVP.Promise((resolve, reject) => Ember.$.ajax({
      url: `${ENV.api.host}/api/v2/neuroner.article`,
      data,
      crossDomain: true
    })
    .done(data => {
      try{
        const result = parse(data, selector, without);
        return resolve(result);
      } catch(e){
        reject(e);
      }
    })
    .fail(error => reject(error)));
}
