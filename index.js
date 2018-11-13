// Represents a single document in the system
class Document {
  constructor() {
    this.title = '';
    this.slug = '';
    this.content = '';
    this.html = '';
    this.updateDate = null;
    this.createDate = null;
    this.tags = [];
    this.customData = {};
  }
}

module.exports = Document;
