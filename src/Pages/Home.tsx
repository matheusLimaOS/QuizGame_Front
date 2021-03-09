import React from 'react';
import '../CSS/Home.css';
import { Row, Col} from 'antd';
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div className="Home">
            <Row className="rowTwo">
                <Col>
                    <div>
                        <h1 className="quizGame">
                            QUIZ GAME
                        </h1>
                    </div>
                    <div className="startGame">
                        <Link to='/question'>
                            <button className="btn">
                                INICIAR JOGO
                            </button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row  align="bottom" justify="end" className="rowThree">
                <h3 className="footer">
                    Developed by: Matheus Lima
                </h3>
            </Row>
        </div>
    );
}

export default Home;
