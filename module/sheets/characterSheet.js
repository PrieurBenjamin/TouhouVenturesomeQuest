export default class characterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/touhouvq/templates/sheets/character-sheet.html",
      classes: ["touhouvq", "sheet", "character"]
    });
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.touhouvq;
    data.weapons = data.items.filter(function (item) { return item.type == "weapon"});
    return data;
  }

  activateListeners(html) {
    html.find(".item-delete").click(this._onItemDelete.bind(this));
  }

  _onItemDelete(event) {
    event.preventDefault();
    let element = event.currentTarget;
    let itemId = element.closest(".item").dataset.itemId;
    return this.actor.deleteOwnedItem(itemId);
  }
}
