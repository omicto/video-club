module.exports = (sequelize, type) => {
    const Copy = sequelize.define('copy', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
      number: type.INTEGER,
      format: type.ENUM('DVD','BLU-RAY','VHS'),
      status: type.ENUM('ON-SHELF', 'LOAN')
    });
  
    return Copy;
  };
  