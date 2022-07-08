import { FC, memo } from 'react';

import classes from './GruposCrearGrupo.module.css';
import { Polygon2Icon } from './Polygon2Icon';

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
    rectangle7?: string;
    crearGrupo?: string;
    rectangle8?: string;
    cancelar?: string;
    crearGrupo2?: string;
    line16?: string;
    dweuihd3?: string;
    codigoDelGrupo?: string;
    line17?: string;
    grupoBienChivoDeLaMejorONGDelM?: string;
    descripcionDelGrupo?: string;
    line18?: string;
    grupoX?: string;
    nombreDelGrupo?: string;
    polygon2?: string;
  };
}
export const GruposCrearGrupo: FC<Props> = memo(function GruposCrearGrupo(props = {}) {
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
      <div className={`${classes.rectangle7} ${props.classes?.rectangle7 || ''}`}></div>
      <div className={`${classes.crearGrupo} ${props.classes?.crearGrupo || ''}`}>Crear grupo</div>
      <div className={`${classes.rectangle8} ${props.classes?.rectangle8 || ''}`}></div>
      <div className={`${classes.cancelar} ${props.classes?.cancelar || ''}`}>Cancelar</div>
      <div className={`${classes.crearGrupo2} ${props.classes?.crearGrupo2 || ''}`}>Crear grupo</div>
      <div className={`${classes.line16} ${props.classes?.line16 || ''}`}></div>
      <div className={`${classes.dweuihd3} ${props.classes?.dweuihd3 || ''}`}>dweuihd3</div>
      <div className={`${classes.codigoDelGrupo} ${props.classes?.codigoDelGrupo || ''}`}>Código del grupo</div>
      <div className={`${classes.line17} ${props.classes?.line17 || ''}`}></div>
      <div
        className={`${classes.grupoBienChivoDeLaMejorONGDelM} ${props.classes?.grupoBienChivoDeLaMejorONGDelM || ''}`}
      >
        Grupo bien chivo de la mejor ONG del mundo
      </div>
      <div className={`${classes.descripcionDelGrupo} ${props.classes?.descripcionDelGrupo || ''}`}>
        Descripción del grupo
      </div>
      <div className={`${classes.line18} ${props.classes?.line18 || ''}`}></div>
      <div className={`${classes.grupoX} ${props.classes?.grupoX || ''}`}>Grupo X</div>
      <div className={`${classes.nombreDelGrupo} ${props.classes?.nombreDelGrupo || ''}`}>Nombre del grupo</div>
      <Polygon2Icon className={`${classes.polygon2} ${props.classes?.polygon2 || ''}`} />
    </div>
  );
});
