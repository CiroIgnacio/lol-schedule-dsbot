const logger = require('./utils/logger');

const  bot = require('./src/bot/bot');

(async () => {
  try {
    logger.info('Obteniendo datos...')
    

    bot.login();
    bot.commandsHandler();
  } catch (e) {
    
    if(e.isAxiosError) {
      logger.error(`Error proceso: ${e}. URL: ${e.response.config.baseURL}/${e.response.config.url}- Method: ${e.response.config.method} - Status: ${e.response.status} (${e.response.statusText}) - Stack: ${e.stack}`)
    } else {
        logger.error(`Error proceso: ${e}`);
      }
    
  } 
})()



