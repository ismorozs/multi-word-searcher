import Store from './store';
import Message from '@common/messages';

Message.saveTabId(({ tabId }) => Store.set({ tabId }));

Message.popupState(({ open }) => Store.setPopupState(open));

Message.openSearchGroup(({ idx, searchString }) => {
  Store.setCurrentSearch(idx);
  if (searchString) {
    Store.updateCurrentSearch(searchString);
    Store.startSearch();
  }
});

Message.removeSearch(({ idx }) => {
  if (idx === -1) {
    Store.removeSearch({ all: true });
    return;
  }
  Store.removeSearch({ idx, fromBackground: true })
});