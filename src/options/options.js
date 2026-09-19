import Settings from './components/Settings';
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
