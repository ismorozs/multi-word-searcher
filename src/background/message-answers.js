import Message from '@common/messages';
import {
  closingPopup,
  closingTab,
  addSearchToContextMenu,
} from "./actions";

Message.closingTab(({ tabId }) => closingTab({ tabId }));
Message.closingPopup(({ tabId }) => closingPopup({ tabId }));

Message.addSearchToContextMenu(({ tabId, idx, string }) =>
  addSearchToContextMenu({ tabId, idx, string }),
);

