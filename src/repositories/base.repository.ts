class BaseRepository {
  static model: any;

  static async findAll(options?: object) {
    return await this.model.findAll(options);
  }

  static async findByPk(pk: any, options?: object) {
    return await this.model.findByPk(pk, options);
  }

  static async findOne(options?: object) {
    return await this.model.findOne(options);
  }

  static async create(values: object, options?: object) {
    return await this.model.create(values, options);
  }

  static async update(values: object, options?: object) {
    return await this.model.update(values, options);
  }

  static async destroy(options?: object) {
    return await this.model.destroy(options);
  }

  static async sum(field: string, options?: object) {
    return await this.model.sum(field, options);
  }

  static async min(field: string, options?: object) {
    return await this.model.min(field, options);
  }

  static async max(field: string, options?: object) {
    return await this.model.max(field, options);
  }
}

export default BaseRepository;
