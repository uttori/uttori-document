class Document {
  constructor() {
    this.content = '';
    this.createDate = null;
    this.customData = {};
    this.excerpt = '';
    this.html = '';
    this.language = '';
    this.slug = '';
    this.tags = [];
    this.title = '';
    this.updateDate = null;
  }
}

module.exports = Document;
