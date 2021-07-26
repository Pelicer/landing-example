import React from 'react';
import Loading from '../assets/icons/modal/loading.svg';
import Warning from '../assets/icons/modal/warning.svg';
import Check from '../assets/icons/modal/check.svg';
import Close from '../assets/icons/modal/close.svg';


export default class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        if (this.state.dialogData.set) {
            let img = null;
            switch (this.state.dialogData.mode) {
                case "success":
                    img = Check;
                    break;
                case "warning":
                    img = Warning;
                    break;
                case "error":
                    img = Close;
                    break;
                case "loading":
                    img = Loading;
                    break;
                default:
                    img = null;
            }
            let btn = [];
            if (this.state.dialogData.button.set) {
                let b = {};
                b.innerText = this.props.dialogData.button.text;
                b.onclick = this.props.dialogData.button.action;
                btn.push(b);
            }
            return (
                <div className="sunshine-dialog">
                    <div className={this.state.dialogData.mode}>
                        <img alt="" src={img} />
                    </div>
                    <p>{this.state.dialogData.title}</p>
                    <p>{this.state.dialogData.text}</p>
                    {btn.map((b) => {
                        return <button className={this.state.dialogData.mode} onClick={b.onclick}>{b.innerText}</button>
                    }
                    )}
                </div>
            );
        } else {
            return (
                null
            )
        }

    }

}