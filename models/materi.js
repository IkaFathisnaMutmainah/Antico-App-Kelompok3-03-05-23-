module.exports = (sequelize, Sequelize) => {
  const Materi = sequelize.define("materi", {
    judulMateri: {
      type: Sequelize.STRING,
    },
    deskripsiMateri: {
      type: Sequelize.STRING,
    },
    materiId: {
      type: Sequelize.INTEGER,
    },
  });
  return Materi;
};
