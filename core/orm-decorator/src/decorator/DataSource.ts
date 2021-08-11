import assert from 'assert';
import { EggProtoImplClass } from '@eggjs/core-decorator';
import { ModelInfoUtil } from '../util/ModelInfoUtil';

export function DataSource(dataSource: string) {
  return function(clazz: EggProtoImplClass) {
    assert(ModelInfoUtil.getIsModel(clazz), `class ${clazz.name} has no Model decorator`);
    ModelInfoUtil.setDataSource(dataSource, clazz);
  };
}
