import React, { useState } from "react";
import {Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import SurveyComponent from "./components/survey";
import defaultSurveyConfig from "./config/survey";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar color = "primary" dark expand="md">
                <Container>
                    <NavbarBrand>Automotive Sales Customer Survey</NavbarBrand>
                    <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
                    <Collapse>
                         <Nav className="me-auto" navbar></Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                 <Card className="mt-1">
                    <CardBody>
                        <SurveyComponent 
                            css={defaultSurveyConfig.defaultSurveyCSS}
                            data={defaultSurveyConfig.defaultSurveyDATA}
                            json={defaultSurveyConfig.defaultSurveyJSON}
                            onComplete={(survey: any) => {
                                console.log(survey.data)

                                /** save to a database */
                                /** Add to a spreadsheet, etc... */ 
                            }}
                        />
                    </CardBody>
                 </Card>
            </Container>
        </>

    )
}

export default Application;