
// import { SliceFactory } from "../../lib/RMT_Common_Components/commonComponents/Containers";
import { SliceFactory } from "../../components/Containers"
import { VariantDefault, VariantNoDescription, VariantNoTitle } from './variants/';

const LogoList = ({ slice }) => {
  
  const { variation } = slice;  

  const typeOfComponents = {
    ['default']: VariantDefault,
    ['logoListNoDescription']: VariantNoDescription,
    ['logoListNoTitle']: VariantNoTitle,
  };

  const TypeOfVariants = typeOfComponents[variation];

  return ( <TypeOfVariants {...slice}/> )
};
const style={style:{
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center'
}}

export default SliceFactory(LogoList, {sliceContainerProps:{...style}});