module.exports = (sequelize, DataTypes) => {
  const cursos = sequelize.define(
    "cursos",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      coordinator: DataType.TEXT,
      name: DataTypes.TEXT,
      start_date: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
    },
    {
      undersore: true,
      paranoid: true,
      timestamps: false,
    },
  );

  return cursos;
};
