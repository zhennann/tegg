import { EggProtoImplClass } from '@eggjs/core-decorator';
import { ModelMeta } from '../model/ModelMeta';
import { ModelInfoUtil } from '../util/ModelInfoUtil';
import { NameUtil } from '../util/NameUtil';
import { IndexMetaBuilder } from './IndexMetaBuilder';
import { AttributeMetaBuilder } from './AttributeMetaBuilder';

export class ModelMetaBuilder {
  private readonly clazz: EggProtoImplClass;

  constructor(clazz: EggProtoImplClass) {
    this.clazz = clazz;
  }

  build(): ModelMeta {
    const dataSource = ModelInfoUtil.getDataSource(this.clazz);
    const tableName = ModelInfoUtil.getTableName(this.clazz) || NameUtil.getTableName(this.clazz.name);
    const attributeMetaBuilder = new AttributeMetaBuilder(this.clazz);
    const attributes = attributeMetaBuilder.build();
    const indexMetaBuilder = new IndexMetaBuilder(this.clazz, attributes);
    const indices = indexMetaBuilder.build();
    return new ModelMeta(dataSource, tableName, attributes, indices);
  }
}
