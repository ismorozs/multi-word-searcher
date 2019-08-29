import { COLORS, FIND_SUGGESTION } from '../common/constants';
import State from './state';
import actions from './actions';

const ICONS_PATH = '/icons/context-menu/';
const SMALL_ICON_NAME = '-16.png';
const BIG_ICON_NAME = '-32.png';
const SMALL_REMOVE_ICON_NAME = 'remove-16.png';
const BIG_REMOVE_ICON_NAME = 'remove-32.png';

const CONTEXT_MENU = {
  MAIN: 'MAIN',
  FIND: 'F',
  REMOVE_SUBMENU: 'REMOVE_SUBMENU',
  REMOVE: 'R',
  REMOVE_SEPARATOR: 'REMOVE_SEPARATOR',
  REMOVE_ALL: 'X',
  REMOVE_ALL_SEPARATOR: 'REMOVE_ALL_SEPARATOR'
};

export function initContextMenu () {
  browser.menus.create({
    id: CONTEXT_MENU.MAIN,
    title: FIND_SUGGESTION,
    contexts: ["all"]
  });
  
  COLORS.forEach((color, i) => browser.menus.create({
    id: CONTEXT_MENU.FIND + i.toString(),
    parentId: CONTEXT_MENU.MAIN,
    title: '',
    icons: {
      16: ICONS_PATH + i + SMALL_ICON_NAME,
      32: ICONS_PATH + i + BIG_ICON_NAME,
    },
  }));  
}

export function onContextMenuClicked (info, tab) {
  switch (info.menuItemId[0]) {
    case CONTEXT_MENU.FIND:
      actions.openSearchGroup(tab, info.menuItemId[1]);
      return;

    case CONTEXT_MENU.REMOVE:
      actions.removeSearch(info.menuItemId[1]);
      return;

    case CONTEXT_MENU.REMOVE_ALL:
      actions.removeSearch(-1);
      return;
  }
}

export function updateContextMenu ({ tabId }) {
  const { remove, update, create } = browser.menus;
  const popupState = State.getTabState(tabId);
  
  if (!popupState) {
    actions.removeAllContextMenus({ tabId });
    return;
  }

  const searchesExist = areSearchesExist(popupState);

  let prepareContextMenu = Promise.resolve();

  if (searchesExist !== popupState.removeMenus || State.contextMenuShown() !== popupState.removeMenus) {
    prepareContextMenu = switchRemoveOptions(searchesExist);
    State.setContextMenuState(tabId, searchesExist);
    State.contextMenuShown(searchesExist);

    if (!searchesExist) {
      return;
    }
  }
  
  prepareContextMenu.then(() => {
    COLORS.forEach((c, i) => {
      const title = popupState.searches[i] || '';
      update( CONTEXT_MENU.FIND + i, { title } );
  
      remove(CONTEXT_MENU.REMOVE + i).then(() => {
        if (title) {
          create({
            id: CONTEXT_MENU.REMOVE + i,
            title,
            parentId: CONTEXT_MENU.REMOVE_SUBMENU,
            icons: {
              16: ICONS_PATH + i + SMALL_ICON_NAME,
              32: ICONS_PATH + i + BIG_ICON_NAME
            },
          }, () => {});
        }
      });
  
    });
  });
}

function areSearchesExist (popupState) {
  if (!popupState.searches.length) {
    return false;
  }

  return popupState.searches.some((el) => !!el);
}

function switchRemoveOptions (bool) {
  const { create } = browser.menus;

  if (bool) {
    create({ id: CONTEXT_MENU.REMOVE_SEPARATOR, parentId: CONTEXT_MENU.MAIN, type: 'separator', contexts: ['all'] });  
    create({
      id: CONTEXT_MENU.REMOVE_SUBMENU,
      title: 'Remove',
      parentId: CONTEXT_MENU.MAIN,
      contexts: ['all'],
      icons: { 16: ICONS_PATH + SMALL_REMOVE_ICON_NAME, 32: ICONS_PATH + BIG_REMOVE_ICON_NAME }
    });
    create({ id: CONTEXT_MENU.REMOVE_ALL, title: 'Remove all', parentId: CONTEXT_MENU.REMOVE_SUBMENU, contexts: ['all'] });
    create({ id: CONTEXT_MENU.REMOVE_ALL_SEPARATOR, parentId: CONTEXT_MENU.REMOVE_SUBMENU, type: 'separator', contexts: ['all'] });

    return Promise.resolve();
  }

  return resetContextMenu();
}

export function resetContextMenu () {
  const { remove } = browser.menus
  return new Promise ((res) => {
    remove(CONTEXT_MENU.REMOVE_ALL)
      .then(() => remove(CONTEXT_MENU.REMOVE_ALL_SEPARATOR)
        .then(() => remove(CONTEXT_MENU.REMOVE_SEPARATOR)
          .then(() => remove(CONTEXT_MENU.REMOVE_SUBMENU)
            .then(() => {

              COLORS.forEach((c, i) => {
                browser.menus.update(CONTEXT_MENU.FIND + i, { title: '' });
                browser.menus.remove(CONTEXT_MENU.REMOVE + i)
              });

              res();
            }))));
  });
}
