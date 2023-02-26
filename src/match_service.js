const logger = require("../utils/logger");

const matchFilter = (obj) => {    
    const d1 = new Date(Date.parse(obj.startTime)).getTime();
    const d2 = new Date(Date.now()).getTime() + 3 * 3600000 * 24;
    if ((obj.state === 'unstarted' || obj.state === 'inProgress') && obj.type == 'match' && d1 < d2)
        return true
    
    return false

}



const hourTransform = (obj) => {
    const rawDate = Date.parse(obj.startTime);
    const transDate = new Date(rawDate);
    obj.startTime = transDate.toLocaleString();
}

const getFullData = (obj) => {
    const league = obj.league.name
    const time = obj.startTime;
    const teams = [];
    obj.match.teams.forEach(e => { teams.push(e);});

    return `Liga: ${league} - Fecha: ${time} - ${teams[0].name} vs ${teams[1].name}\n`;
   
}

module.exports = {matchFilter, hourTransform, getFullData};