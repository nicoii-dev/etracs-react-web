import React from 'react';
import {
    Card,
    Row,
    Col,
  } from "react-bootstrap";

import { EventOutlined, DateRangeOutlined, ReceiptOutlined, DateRange, AccountBoxOutlined } from '@mui/icons-material';

const HeaderData = () => {

    return (
        <Row>
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <AccountBoxOutlined style={{fontSize:70, color:'#CD5C5C'}} />
                            </Col>
                            <Col xs="7" >
                            <div className="numbers" style={{textAlign:'end'}}>
                                <p className="card-category"><em>Number of user</em></p>
                                <Card.Title as="h4" style={{fontSize:30}}><strong>150</strong></Card.Title>
                            </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                    <hr></hr>
                        <small className="text-muted"><EventOutlined /> As of today</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <ReceiptOutlined style={{fontSize:70, color:'#6B8E23'}} />
                            </Col>
                            <Col xs="7" >
                            <div className="numbers" style={{textAlign:'end'}}>
                                <p className="card-category"><em>Total paid</em></p>
                                <Card.Title as="h4" style={{fontSize:30}}><strong>100</strong></Card.Title>
                            </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                    <hr></hr>
                        <small className="text-muted"><DateRangeOutlined /> Last week</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <AccountBoxOutlined style={{fontSize:70, color:'#20B2AA'}} />
                            </Col>
                            <Col xs="7" >
                            <div className="numbers" style={{textAlign:'end'}}>
                                <p className="card-category"><em>Total paid</em></p>
                                <Card.Title as="h4" style={{fontSize:30}}><strong>100</strong></Card.Title>
                            </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                    <hr></hr>
                        <small className="text-muted"><DateRangeOutlined /> Last week</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="3" sm="6">
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                            <Col xs="5">
                                <AccountBoxOutlined style={{fontSize:70, color:'#9370DB'}} />
                            </Col>
                            <Col xs="7" >
                            <div className="numbers" style={{textAlign:'end'}}>
                                <p className="card-category"><em>Number of user</em></p>
                                <Card.Title as="h4" style={{fontSize:30}}><strong>150</strong></Card.Title>
                            </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                    <hr></hr>
                        <small className="text-muted"><EventOutlined /> As of today</small>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default HeaderData;