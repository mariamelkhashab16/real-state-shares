const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');  

class PaymentPlan extends Model {
  static associate(models) {
    // define association here
    PaymentPlan.belongsTo(models.Project, {
      foreignKey: 'project_id',
    });
  }
}

PaymentPlan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    down_payment: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    num_years: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize, 
    modelName: 'PaymentPlan', 
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    validate: {
      onlyOnePrimaryPaymentPlan() {
        if (this.is_primary) {
          return PaymentPlan.count({
            where: {
              project_id: this.project_id,
              is_primary: true,
              id: { [sequelize.Op.ne]: this.id },  // Exclude the current instance (if updating)
            }
          }).then(count => {
            if (count > 0) {
              throw new Error('A project can only have one primary payment plan');
            }
          });
        }
      }
    }
  }
);

module.exports = PaymentPlan;
