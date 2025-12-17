import { updateInitiative } from './combat';

export function chatEventHandler(): void {
  $(document)
    .find('#chat')
    .on('click', '.initiative-tracker-add', _onAddToInitiativeTracker);
}

function _onAddToInitiativeTracker(event: JQuery.ClickEvent): void {
  event.stopPropagation();
  event.preventDefault();

  console.log('7th Sea 2E | Add to initiative tracker');
  const dataset = event.currentTarget.dataset;

  updateInitiative(dataset.actor, dataset.raise);
}
