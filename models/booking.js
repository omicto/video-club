module.exports = (sequelize, type) =>{

    const Booking = sequelize.define('booking', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
      date: {type:'TIMESTAMP',defaultValue: type.literal('CURRENT_TIMESTAMP')}
    });
  
  return Booking;
  
};