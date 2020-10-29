import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../header';
import RandomChar from '../randomChar';
import { CharacterPage, HousesPage, BooksPage, BookDetails, HomePage } from '../pages';

function App() {
    const [stateRandom, setRandom] = useState(true);

    const onToogle = () => {
        setRandom(prev => !prev)
    }

    return (
        <Router>
            <div className='App'>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            <RandomChar stateRandom={stateRandom} />
                            <button className="btn-toggle"
                                onClick={(onToogle)}>
                                Random character
                            </button>
                        </Col>
                    </Row>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/characters/' component={CharacterPage} />
                    <Route path='/houses/' component={HousesPage} />
                    <Route path='/books/' exact component={BooksPage} />
                    <Route path='/books/:id' render={
                        ({ match }) => {
                            const { id } = match.params;
                            return <BookDetails idBook={id} />
                        }

                    } />
                </Container>
            </div>
        </Router>
    );
};
export default App;
