import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

const kec = document.getElementById('kec');

class PortalsLearn extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div');
    }

    componentDidMount() {
        kec.appendChild(this.el);
    }

    componentWillUnmount() {
        kec.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}


const PortalsParent = () => {
    const [clicks, setClicks] = useState(0);

    const cleak = (e) => {
        console.log(e)
        setClicks(clicks + 1)};

    return (
        <div onClick={cleak}>
            <div>{clicks}</div>
            <PortalsLearn>
                <div className={'look-at-this-dude'}>
                    {/* should be in div because I was clicking on textNode and onClick was not firing*/}
                    heh
                </div>
            </PortalsLearn>
        </div>
    );
};

export default PortalsParent;
