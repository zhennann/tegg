import { EggPrototype } from '@eggjs/tegg-metadata';

export class ModelProtoManager {
  private readonly protos: Set<EggPrototype> = new Set();

  addProto(proto: EggPrototype) {
    this.protos.add(proto);
  }
}
