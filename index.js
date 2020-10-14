class Document {
  constructor() {
    this.content = '';
    this.createDate = undefined;
    this.customData = {};
    this.excerpt = '';
    this.html = '';
    this.language = '';
    this.slug = '';
    this.tags = [];
    this.title = '';
    this.updateDate = undefined;
  }
}

module.exports = Document;
