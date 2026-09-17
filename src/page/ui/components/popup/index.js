import create from 'simple-els/min';
import Store from '@page/store';

import SearchTab from '../SearchTab';
import Controls from '../Controls';

import styles from './styles.css';

export default create(
  (_) => `<div @container>
    <div .topbar>
      <ul .tabs>
        ${_(SearchTab, (searches) => searches)}
      </ul>
      <div @close></div>
    </div>
    ${_(Controls)}
  </div>`,
  {
    open: false,
    searches: [],
    container_style: (open) => ({ display: open ? "block" : "none" }),
    close_click: () => Store.closePopup(),
    onChange: (changes, { set }) => {
      if (changes > 0) {
        set(Store.getPopupData());

        Store.onChange(["searches", "popupOpen"], () => {
          set(Store.getPopupData());
        });
      }
    },
  },
  styles.toString(),
);