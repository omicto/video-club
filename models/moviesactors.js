module.exports = (sequelize, type) => {
  const MoviesActors = sequelize.define('moviesActors', {
    id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
    movieId: type.INTEGER,
    actorId: type.INTEGER
  });

  return MoviesActors;
};
