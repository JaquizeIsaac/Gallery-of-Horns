/* eslint-disable react/prop-types */
// Get rid of everything in Container in line 12
// use .map to display HornedBeast from props.data(data.json)
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeast from "./HornedBeast";

function Gallery(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <Container>
        <Row>
          <Col>
            <HornedBeast displayasModal={props.displayModal} image_url={props.imageUrls[0]} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[1].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[2].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[3].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HornedBeast image_url={props.imageUrls[11].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[12].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[13].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[14].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HornedBeast image_url={props.imageUrls[15].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[16].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[17].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[18].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HornedBeast image_url={props.imageUrls[4].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[5].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[6].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[7].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HornedBeast image_url={props.imageUrls[8].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[9].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[10].image_url} />
          </Col>
          <Col>
            <HornedBeast image_url={props.imageUrls[11].image_url} />
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default Gallery;
