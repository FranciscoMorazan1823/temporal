import { FC, memo } from 'react';

import classes from './Encuestas.module.css';
import { Rectangle9Icon } from './Rectangle9Icon';
import { Rectangle19Icon } from './Rectangle19Icon';

interface Props {
  className?: string;
  classes?: {
    rectangle841?: string;
    terminosYPoliticasTerminosYCon?: string;
    companiaHomeSobreNosotros?: string;
    contacto50377777777PollusGmail?: string;
    line4?: string;
    copyright2022PollusAllRightRes?: string;
    logoRoundedWhite2?: string;
    empresasONG?: string;
    line9?: string;
    logoWhite2?: string;
    _23650935016006771701282?: string;
    rectangle9?: string;
    rectangle18?: string;
    encuestaSobreAbasteciminetoDel?: string;
    _2362022ColoniaAlejandriaUsulut?: string;
    ultimaActualizacion?: string;
    rectangle19?: string;
    rectangle20?: string;
    encuestaSobreAbasteciminetoDel2?: string;
    _2362022ColoniaAlejandriaUsulut2?: string;
    ultimaActualizacion2?: string;
  };
}
export const Encuestas: FC<Props> = memo(function Encuestas(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.rectangle841} ${props.classes?.rectangle841 || ''}`}></div>
      <div
        className={`${classes.terminosYPoliticasTerminosYCon} ${props.classes?.terminosYPoliticasTerminosYCon || ''}`}
      >
        <span className={classes.labelWrapper}>
          <span className={classes.label}>
            Términos y Políticas
            <br />
          </span>
          <span className={classes.label2}>
            <br />
          </span>
          <span className={classes.label3}>
            Términos y condiciones
            <br />
          </span>
          <span className={classes.label4}>
            <br />
            Política de privacidad
          </span>
        </span>
      </div>
      <div className={`${classes.companiaHomeSobreNosotros} ${props.classes?.companiaHomeSobreNosotros || ''}`}>
        <span className={classes.labelWrapper2}>
          <span className={classes.label5}>
            Compañía
            <br />
          </span>
          <span className={classes.label6}>
            <br />
          </span>
          <span className={classes.label7}>
            Home
            <br />
          </span>
          <span className={classes.label8}>
            <br />
            Sobre nosotros
          </span>
        </span>
      </div>
      <div
        className={`${classes.contacto50377777777PollusGmail} ${props.classes?.contacto50377777777PollusGmail || ''}`}
      >
        <span className={classes.labelWrapper3}>
          <span className={classes.label9}>
            Contacto
            <br />
          </span>
          <span className={classes.label10}>
            <br />
          </span>
          <span className={classes.label11}>
            +503 7777-7777
            <br />
            <br />
            pollus@gmail.com
          </span>
        </span>
      </div>
      <div className={`${classes.line4} ${props.classes?.line4 || ''}`}></div>
      <div
        className={`${classes.copyright2022PollusAllRightRes} ${props.classes?.copyright2022PollusAllRightRes || ''}`}
      >
        Copyright @ 2022 Pollus. All Right Reserved
      </div>
      <div className={`${classes.logoRoundedWhite2} ${props.classes?.logoRoundedWhite2 || ''}`}></div>
      <div className={`${classes.empresasONG} ${props.classes?.empresasONG || ''}`}>Empresas &amp; ONG</div>
      <div className={`${classes.line9} ${props.classes?.line9 || ''}`}></div>
      <div className={`${classes.logoWhite2} ${props.classes?.logoWhite2 || ''}`}></div>
      <div className={`${classes._23650935016006771701282} ${props.classes?._23650935016006771701282 || ''}`}></div>
      <Rectangle9Icon className={`${classes.rectangle9} ${props.classes?.rectangle9 || ''}`} />
      <div className={`${classes.rectangle18} ${props.classes?.rectangle18 || ''}`}></div>
      <div
        className={`${classes.encuestaSobreAbasteciminetoDel} ${props.classes?.encuestaSobreAbasteciminetoDel || ''}`}
      >
        Encuesta sobre abastecimineto del agua
      </div>
      <div
        className={`${classes._2362022ColoniaAlejandriaUsulut} ${props.classes?._2362022ColoniaAlejandriaUsulut || ''}`}
      >
        23/06/2022
        <br />
        Colonia Alejandria, Usulután
      </div>
      <div className={`${classes.ultimaActualizacion} ${props.classes?.ultimaActualizacion || ''}`}>
        Ultima actualización:
      </div>
      <Rectangle19Icon className={`${classes.rectangle19} ${props.classes?.rectangle19 || ''}`} />
      <div className={`${classes.rectangle20} ${props.classes?.rectangle20 || ''}`}></div>
      <div
        className={`${classes.encuestaSobreAbasteciminetoDel2} ${props.classes?.encuestaSobreAbasteciminetoDel2 || ''}`}
      >
        Encuesta sobre abastecimineto del agua
      </div>
      <div
        className={`${classes._2362022ColoniaAlejandriaUsulut2} ${
          props.classes?._2362022ColoniaAlejandriaUsulut2 || ''
        }`}
      >
        23/06/2022
        <br />
        Colonia Alejandria, Usulután
      </div>
      <div className={`${classes.ultimaActualizacion2} ${props.classes?.ultimaActualizacion2 || ''}`}>
        Ultima actualización:
      </div>
    </div>
  );
});
