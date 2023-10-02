import { Sequelize } from 'sequelize-typescript';
import { Cat } from 'src/modules/cats-module/cats.entity';
import { Users } from 'src/modules/users/users.entity';
const Models: any = [Cat, Users];

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'vardhan2000',
        database: 'contactsDb',
      });

      sequelize.addModels(Models);
      await sequelize.sync();
      return sequelize;
    },
  },
];
