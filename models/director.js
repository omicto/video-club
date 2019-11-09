//sequelize, type

module.exports = (sequelize, type) =>{

    const Director = sequelize.define('director', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
      name: {type: type.STRING, notNull:true},
      last_name: type.STRING
    });
  
  return Director;
  
  };
  