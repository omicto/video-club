module.exports = (sequelize, type) =>{
    const Member = sequelize.define('member', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
      name: {type: type.STRING, notNull:true},
      last_name : type.STRING,
      address: {type: type.STRING, notNull:true},
      phone: {type: type.STRING(10), notNull:true},
      status: {type: type.BOOLEAN, notNull:true}
    })
    return Member;
};