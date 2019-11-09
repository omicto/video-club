const Sequelize = require('sequelize');
const log4js = require('log4js');
const logger = log4js.getLogger();

const actorModel = require('./models/actor');
const genreModel = require('./models/genre');
const movieModel = require('./models/movie');
const moviesActorsModel = require('./models/moviesactors');
const copyModel = require('./models/copy');
const bookingModel = require('./models/booking');
const memberModel = require('./models/member');
const directorModel = require('./models/director');
logger.level = 'debug';


const sequelize = new Sequelize('video-club', 'root','secret', {
  host:'localhost',
  dialect:'mysql'
});

const Actor = actorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const MoviesActors = moviesActorsModel(sequelize, Sequelize);
const Copy = copyModel(sequelize, Sequelize);
const Booking = bookingModel(sequelize,Sequelize);
const Member = memberModel(sequelize,Sequelize);
const Director = directorModel(sequelize, Sequelize);

 
Genre.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Genre, {as: 'genre'});

Director.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Director, {as: 'director'});

MoviesActors.belongsTo(Movie, {foreignKey: 'movieId'});
MoviesActors.belongsTo(Actor, {foreignKey: 'actorId'});

Movie.belongsToMany(Actor, {
  through: 'moviesActors',
  foreignKey: 'actorId',
  as: 'actors'
});

Actor.belongsToMany(Movie, {
  through: 'moviesActors',
  foreignKey: 'movieId',
  as: 'movies'
});

Movie.hasMany(Copy, {as: 'copies'});
Copy.belongsTo(Movie, {as: 'movie'});

Copy.hasMany(Booking,{as : 'bookings'});
Booking.belongsTo(Copy,{foreignKey: 'copy_id'})
Member.hasMany(Booking,{as : 'bookings'});
Booking.belongsTo(Member, {foreignKey:'member_id'});

sequelize.sync({
  force: true
}).then(()=>{
  logger.info("Database created !!!!");
});

module.exports = {
  Actor, Genre, Movie, Copy, Booking, Member, Director,MoviesActors
};
