import { Fragment } from "react"
import { Title, Description, Logos, } from '../components/index';

const VariantDefault = (props) => (
    <Fragment>
        <Title text={props.primary.title}/>
        <Description 
            description={props.primary.description}
        />
        <Logos list={props.items}/>
    </Fragment>
);

export default VariantDefault;