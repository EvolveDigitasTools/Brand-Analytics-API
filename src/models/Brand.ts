import { Model, Table, Column, DataType, HasMany, AllowNull, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import Product from './Product';


@Table({
    tableName: 'brands',
    timestamps: false,
})
export default class Brand extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    name!: string;

    @HasMany(() => Product, { foreignKey: 'brandId', as: 'products' })
    products!: Product[];
}
