import React from 'react';
import '../CSS/Reply.css';
import { Row, Col} from 'antd';
import { useHistory } from 'react-router-dom';

function Question(location:any) {
    const history = useHistory();
    let state = location.history.location.state;
    const MessageStyle = {
        color:state.Right ? 'green' : 'red'
    }

    function Reply(){
        history.push("/question");
    }

    return (
        <div id="Reply">
            <Row className="rowReplyOne">
                <Col span={8} offset={9} className="columnReplyOne">
                    <div>
                        <h1 className="replyQuizGame">
                            QUIZ GAME
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row className="rowReplyTwo">
                <Col span={16} offset={4}>
                    <div className="card">
                        <div style={MessageStyle} className="Reply">
                            {state.message}
                        </div>
                        <div className="buttonReply">
                            <button onClick={Reply} className="button">
                                Jogar Novamente
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row  align="bottom" justify="end" className="rowQuestionThree">
                <h3 className="footer">
                    Developed by: Matheus Lima
                </h3>
            </Row>
        </div>
    );
}

export default Question;
