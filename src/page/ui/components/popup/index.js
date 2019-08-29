import Couli from 'couli';
import styles from './styles';
import Store from '../../../store';

const INITIAL_POPUP_POSITION = { top: 20, left: 'auto', right: 20 };

Couli.define('popup', 
  `<div>
    <div x-b="topbar">
      <ul x-lb="searches">
        <li x-b="string">
      </ul>
      <div x-b="closeButton"></div>
    </div>
    <controls x-state-name="controls"></controls>
  </div>`, {

  open: {
    hooks: {
      update: (el, value, ci) => {
        if (value) {
          ci.down('controls').down('searchStrings').get(0).markup('string').focus();
        }
      }
    }
  },

  searches: {
    listItem: {
      state: {
        color: {},
        idx: {},
        string: {
          attrs: ($) => ({ title: $.string }),
          style: ($) => ({ backgroundColor: 'rgba(' +  $.color + ', 0.5)', }),
          html: () => '',
          events: {
            click: (e, el, ci) => Store.moveThroughSearch({ searchId: ci.get('idx') }, true),
            contextmenu: (e, el, ci) => {
              e.preventDefault();
              Store.removeSearch({ all: e.shiftKey, idx: ci.get('idx') }).then(() =>
                ci.down('controls').down('searchStrings').get(0).markup('string').focus()
              );
            },
          }
        }
      }
    }
  },

  topbar: {
    events: {
      mousedown: (e, el, ci) => {
        const popupEl = ci.markup();
        
        const shiftX = e.clientX - popupEl.getBoundingClientRect().left;
        const shiftY = e.clientY - popupEl.getBoundingClientRect().top;

        function onMouseMove(e) {
          requestAnimationFrame(() => {
            popupEl.style.left = e.clientX - shiftX + 'px';
            popupEl.style.top = e.clientY - shiftY + 'px';
          });
        }

        function onMouseUp (e) {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          el.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mouseup', onMouseUp);
        el.addEventListener('mouseup', onMouseUp);

        document.addEventListener('mousemove', onMouseMove);
      },

      dragstart: () => false
    }
  },

  closeButton: {
    events: {
      click: () => Store.closePopup()
    }
  },

  '': {
    style: ($) => {
      const styles = { display: $.open ? 'block' : 'none' };

      if ($.open) {
        Object.assign(styles, INITIAL_POPUP_POSITION);
      }

      return styles;
    },

    hooks: {
      mount: (el, data, ci) => {
        ci.set({ open: true });

        Store.addListener((store) => {
          const popupData = store.getPopupData();

          if (ci.get('open') && popupData.open) {
            delete popupData.open;
          }

          ci.set(popupData);
        });
      }
    }
  }
}, styles({ INITIAL_POPUP_POSITION }));
