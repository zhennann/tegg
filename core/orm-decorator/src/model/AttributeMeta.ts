export class AttributeMeta {
  readonly propertyName: string;
  readonly attributeName: string;
  readonly allowNull: boolean;
  readonly autoIncrement: boolean;
  readonly primary: boolean;
  readonly unique: boolean;

  constructor(
    propertyName: string,
    attributeName: string,
    allowNull: boolean,
    autoIncrement: boolean,
    primary: boolean,
    unique: boolean) {
    this.propertyName = propertyName;
    this.attributeName = attributeName;
    this.allowNull = allowNull;
    this.autoIncrement = autoIncrement;
    this.primary = primary;
    this.unique = unique;
  }
}
