import Store from "@page/store";
import Popup from "@page/ui/components/Popup";
import Message from '@common/messages';
import '@page/message-answers';
import '@page/global-styles';

window.onunload = () => {
  const { tabId } = Store.get();
  Message.closingTab({ tabId });
};

Popup.asPopup({
  handle: ".topbar",
  left: 20,
  top: 20,
});
