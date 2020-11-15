import React from "react";
import styles from "./styles";
import { withStyles } from "arwes";

import { Row, Col, Words } from "arwes";

const Component = (props) => {
    return (
        <Row>
            <Col s={12} m={8} l={6} offset={["m2", "l"]}>
                <Words>من محمد حسین نعمتی هستم</Words>
            </Col>
        </Row>
    );
};

export default withStyles(styles)(Component);
