//sequelize, type

module.exports = (sequelize, type) =>{

  const Actor = sequelize.define('actor', {
    id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: type.STRING, notNull:true},
    last_name: type.STRING
  });

return Actor;

};
