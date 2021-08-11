import assert from 'assert';
import { EggProtoImplClass } from '@eggjs/core-decorator';
import { ModelInfoUtil } from '../util/ModelInfoUtil';

export interface IndexOptions {
  unique?: boolean;
  primary?: boolean;
  name?: string;
}

export function Index(fields: string[], params?: IndexOptions) {
  return function(clazz: EggProtoImplClass) {
    assert(ModelInfoUtil.getIsModel(clazz), `class ${clazz.name} has no Model decorator`);
    ModelInfoUtil.addModelIndex(fields, params, clazz);
  };
}
