import * as React from 'react';

import { useKeyDown } from 'hooks/use-keydown';
import { useLocalStorage } from 'hooks/use-localstorage';

import { GridOverlay } from './GridOverlay';
import { GsapTools } from './GsapTools';

const LOCAL_STORAGE_KEY_VISIBLE = '_uenoDevtoolsVisible';

export const Devtools = () => {
  const [isVisible, setVisible] = useLocalStorage(LOCAL_STORAGE_KEY_VISIBLE, false);
  const keys = useKeyDown();

  React.useEffect(() => {
    if (keys.includes(84)) {
      setVisible(!isVisible);
    }
  }, [keys]);

  return (
    <>
      <GridOverlay button={isVisible} columns={18} />
      <GsapTools button={isVisible} />
    </>
  );
};
