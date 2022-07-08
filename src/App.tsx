import { FC, memo } from 'react';

import classes from './App.module.css';
import { PerfilMenuDelUsuario } from './components/PerfilMenuDelUsuario/PerfilMenuDelUsuario';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <PerfilMenuDelUsuario />
    </div>
  );
});
