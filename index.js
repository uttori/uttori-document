/**
 * Uttori Document
 *
 * @property {string} [content=''] - Document Data
 * @property {string} [slug=''] - Document URL Identifier
 * @property {string} [title=''] -  - Document Name
 * @property {string} [excerpt=''] - Preview of the content
 * @property {string} [html=''] - Rendered HTML version of the content
 * @property {string} [language=''] - Language of the document
 * @property {string[]} [tags=[]] - Collection of tags to describe the document
 * @property {object} [customData={}] - Any custom data
 * @property {Date} [createDate] - Date & Time Created
 * @property {Date} [updateDate] - Date & Time Last Updated, should default to the createDate
 * @class
 */
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
