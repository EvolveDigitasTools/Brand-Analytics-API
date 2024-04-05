import { AllowNull, AutoIncrement, Column, CreatedAt, DataType, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import Brand from "./Brand";

@Table({
    tableName: 'products',
    timestamps: true
})
export default class Product extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING
    })
    name!: string;

    @Column(DataType.DECIMAL(10, 2))
    mrp!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    skuId!: string;

    @ForeignKey(() => Brand)
    @Column({
        type: DataType.INTEGER
    })
    brandId!: number;

    @CreatedAt
    createdAt?: Date;

    @UpdatedAt
    updatedAt?: Date;
}
