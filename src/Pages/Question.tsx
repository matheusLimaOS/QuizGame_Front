import React, {useEffect, useState} from 'react';
import '../CSS/Question.css';
import { Row, Col, Form, Radio, message} from 'antd';
import api from "../Utils/Axios";
import { useHistory } from 'react-router-dom';

const error = (message1:string) => {
    message.error(message1, 4);
};

interface Ans{
    Answers:any,
    status:Boolean
}

function Question() {
    const [Answer,setAnswer] = useState(0);
    const [Question,setQuestion] = useState('');
    const [Answers,setAnswers] = useState<Ans>();
    const history = useHistory();
    let [ID_Question,setID_Question] = useState(0);
    function onChange(key:number){
        console.log(key);
        setAnswer(key);
    }
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '20px',
        margin: '0 0 1.5rem 0',
    };

    useEffect(()=>{
        api.get("/randomQuestion").then(res=>{
            setID_Question(res.data.Question[0].ID);
            setQuestion(res.data.Question[0].QUESTION);
            setAnswers(res.data.Answers);
        }).catch(e=>{
            console.log(e);
        })
    },[]);
    function Reply(){
        if(Answer !==0 && ID_Question !== 0){
            api.post("/verifyAnswer",{ID:ID_Question,SelectedAnswer:Answer}).then(res=>{
                history.push("/reply",res.data);
            }).catch(e=>{
                error("Erro interno do sistema!");
                console.log(e);
            })
        }
        else{
            error("Por favor selecione uma alternativa!");
        }
    }

    return (
        <div id="Question">
            <Row className="rowQuestionOne">
                <Col span={8} offset={9} className="columnOne">
                    <div>
                        <h1 className="questionQuizGame">
                            QUIZ GAME
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row className="rowQuestionTwo">
                <Col span={16} offset={4}>
                    <div className="card">
                        <Form>
                            <div className="divQuestion">
                                <h3 className="h3Question">
                                    QUESTÃO:
                                </h3>
                            </div>
                            <div className="divQuestion">
                                <p className="pQuestion">
                                    {Question}
                                </p>
                            </div>
                            <div className="Radio">
                                <Radio.Group onChange={(e)=>{onChange(e.target.value)}} value={Answer}>
                                    {Answers?.Answers.map((Answer:any) => {
                                        return(
                                                <Radio style={radioStyle} key={Answer.ID} value={Answer.ID}>{Answer.ANSWER}</Radio>
                                        )
                                    })}
                                </Radio.Group>
                            </div>
                            <div className="buttonQuestion">
                                <button onClick={Reply} className="button">
                                    RESPONDER
                                </button>
                            </div>
                        </Form>
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
