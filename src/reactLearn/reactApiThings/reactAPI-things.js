import React, {
    useState,
    useContext,
    memo,
    isValidElement,
    Children,
    Component
} from 'react';
import { Context } from '../contextLearn/store'

const Ditya = memo(({shtoto}) => {
    return (
        <div>
            {shtoto}
        </div>
    )
});

const Nehhehe = (props) => {
    return (
        Children.only(props.children)
    )
};

class ComponentAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 2
        }
    }

    static getDerivedStateFromProps (props, state) {
        console.log(props, state);
        return {
            number: state.number ** props.exp
        }
    }

    render() {

        return (
            <div>
                {this.state.number}
            </div>
        )
    }
}

const ReactApiThings = () => {

    const store = useContext(Context);
    const some = [1];
    // console.log(isValidElement(<Ditya />));
    console.log(store);
    return (
        <div>
            <span onClick={() => {store.setSome(store.some + 1)}} >2</span>
            <ComponentAPI exp={store.some}/>
        </div>
    );
};

export default ReactApiThings;