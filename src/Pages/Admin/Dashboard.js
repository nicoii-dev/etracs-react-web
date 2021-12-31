import React from 'react';
import {
    Card,
    Row,
    Col,
  } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import HeaderData from '../../components/dashboard/HeaderData';
import BarChart from '../../components/dashboard/BarChart';
import SplineChart from '../../components/dashboard/SplineChart';
import PieChart from '../../components/dashboard/PieChart';
import NewlyAddedUserTable from '../../components/dashboard/NewlyAddedUserTable';

const Dashboard = () => {
    return (
        <Container fluid style={{marginTop:30}}>
            <HeaderData />
            <Row style={{marginTop:20}}>
                <Col lg="12" sm="6">
                    <Row>
                        <Col lg="8" sm="2">
                            <Card className="card-stats">
                                <Card.Body>
                                    <BarChart />
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col lg="4" sm="2">
                            <Card className="card-stats">
                                <Card.Body>
                                    <PieChart />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg="12" sm="6" style={{marginTop:20}}>
                    <Row>
                        <Col lg="6" sm="2">
                            <Card className="card-stats">
                                <SplineChart />
                            </Card>
                        </Col>
                        <Col lg="6" sm="2">
                            <Card className="card-stats">
                                <NewlyAddedUserTable />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
           
        </Container>
    )
};

export default Dashboard;