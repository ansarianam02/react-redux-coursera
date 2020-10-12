import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDish({dish}){
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

function RenderComments({comments}){
  if(comments && comments.length > 0){  
    return comments.map( c => {
      return (<div>           
      <div> {c.comment} </div> 
      <div> -- {c.author} , <span>Date : {c.date}
      {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
      </span></div></div>)
    })
  } else {
    return (<div>No Comments !!</div>)
  }
}

const Dishdetail = (props) =>{ 
  return (<div>
              <div className="row">
                            <div  className="col-12 col-md-5 m-1"> 
                              <RenderDish dish={props.dish} />                              
                            </div>
                            <div className="col-12 col-md-5 m-1">                            
                               <div className="row">
                               <h4>Comment :-</h4>                                
                               <RenderComments comments={props.dish ? props.dish.comments : []}/>
                                </div>
                            </div>
                          </div>
            </div>)
}

export default Dishdetail; 