import { Fragment } from "react";
import { Description, Logos, } from '../components/index';

const VariantListNoTitle = (props) => (
    <Fragment>
        <Description
            description={props.primary.description}
        />
        <Logos list={props.items}/>
    </Fragment>
);

export default VariantListNoTitle;