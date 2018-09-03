var Log = require('log')
  , log = new Log('info');

log.debug('preparing email');
log.info('sending email');
log.error('failed to send email');