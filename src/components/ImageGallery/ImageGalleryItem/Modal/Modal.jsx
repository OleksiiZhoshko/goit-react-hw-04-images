import { Component } from 'react';

export class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.onCloseByEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.onCloseByEscape)
    }

    onCloseByEscape = e => {
        if(e.code === 'Escape') {
        this.props.onClose()
    }
}

    render() {
        const { largeImg, onClose } = this.props;
    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
};

export default Modal;
