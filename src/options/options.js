import Settings from './components/Settings';
import Warning from './components/Warning';
import Message from '@common/messages';
import State from '@background/state';

Message.removeRecentSearch(({ string }) => State.removeRecentSearch(string));
Message.addFavoriteSearch(({ string }) =>
  State.addFavoriteSearch(string),
);
Message.removeFavoriteSearch(({ string }) =>
  State.removeFavoriteSearch(string),
);
Message.setColors(({ colors }) => State.set({ colors }));

Settings({}, document.body);

if (State.get().showWarning) {
  Warning.asPopup({ closeButton: '.button' });
}