import { Fragment } from "react";
import { Title, Logos, } from '../components/index';

const VariantNoDescription = (props) => {
    
    return(
        <Fragment>
            <Title text={props.primary.title}/>
            <Logos list={props.items}/>
        </Fragment>
)};

export default VariantNoDescription;