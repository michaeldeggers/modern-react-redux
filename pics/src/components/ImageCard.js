import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const { clientHeight: height } = this.imageRef.current;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;
    const { regular } = urls;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}`}}>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard;
