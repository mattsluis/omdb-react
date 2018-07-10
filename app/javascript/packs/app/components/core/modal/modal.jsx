import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

import MdClose from 'react-icons/lib/md/close';

import Style from './style.scss';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderHeader() {
        const { header } = this.props;

        return(
            <header className={Style.modalHeader}>
                <div className={Style.titleBox}>
                    {header.title && <div className={Style.modalTitle}>{header.title}</div>}
                </div>

                <div className={Style.closeBox}>
                    {header.onClose && <div onClick={header.onClose}><MdClose className={Style.close}/></div>}
                </div>
            </header>
        )
    }

    renderBody() {
        const { body } = this.props;

        return (
            <div className={Style.modalBody}>
                {body.elem && <span>{body.elem}</span>}
            </div>
        )
    }

    renderFooter() {
        const { buttonLeft, buttonRight } = this.props.footer;

        return (
            <footer className={Style.modalFooter}>
                    {buttonLeft && <Button
                                        classNames="modalLeft"
                                        {...buttonLeft}/>}
                    {buttonRight && <Button
                                        classNames="modalRight"
                                        {...buttonRight}/>}
            </footer>
        )
    }

    render() {
        const { header, body, footer } = this.props;

            return (
                <div className={Style.modalBg}>
                    <div className={Style.modalBox}>
                        {header && this.renderHeader()}
                        {body && this.renderBody()}
                        {footer && this.renderFooter()}
                    </div>
                </div>
            )
    }
}

Modal.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        onClose: PropTypes.func,
    }),
    body: PropTypes.shape({
        elem: PropTypes.element,
    }),
    footer: PropTypes.shape({
         buttonLeft: PropTypes.shape({
             buttonText: PropTypes.string,
             onClick: PropTypes.func,
             classNames: PropTypes.string,
         }),
         buttonRight: PropTypes.shape({
             buttonText: PropTypes.string,
             onClick: PropTypes.func,
             classNames: PropTypes.string,
         }),
     }),
};
