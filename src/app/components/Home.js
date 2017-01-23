// import React from "react";

// export class Home extends React.Component{
// 		constructor(props){
// 			super();
// 			this.state={
// 				salary:props.initialSalary,
// 				status:0,
// 				homeLink:props.initialLinkName
// 			};
// 			setTimeout( () => {
// 				this.setState({
// 					status:this.state.status +5
// 				});
// 			},3000);
// 		}

// 		makeRich(){
// 			this.setState({
// 				salary:this.state.salary + 5000
// 			});
		
// 		}
// 		makePoor(){
// 			this.setState({
// 				salary:this.state.salary - 10000
// 			});
// 		}
// 		onChangeit(){
// 			this.props.changeLink(this.state.homeLink);
// 		}
// 		onHandleChange(event){
// 			this.setState({
// 				homeLink:event.target.value
// 			});
// 		}
// 	render(){
		

// 		return(
			
// 				<div>
					
// 					<p>In a new component..!!</p>
// 					<p>Your name is: {this.props.name}</p>
// 					<p>Your name is: {this.props.age}</p>
// 					<p>Your Salary: {this.state.salary}</p>
// 					<p>status:{this.state.status}</p>
// 					<p>From user object->name:{this.props.user.name}</p>
// 					<p>From user object->Age:{this.props.user.age}</p>
// 					<h4>Hobbies:</h4>
// 					<ul>
// 						{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
// 					</ul>
				
// 					{this.props.children}
// 					<hr/>
// 					<button onClick={() => this.makeRich()} className="btn btn-primary">Make me rich..!!</button>
// 					<button onClick={() => this.makePoor()} className="btn btn-danger">Make me poor..!!</button>
// 					<hr/>
// 					<button onClick={this.props.greet} className="btn btn-info">Click me for alert</button>
// 					<hr/>
// 					<input type="text" value={this.state.homeLink}
// 						 onChange={(event) => this.onHandleChange(event)}/>
// 					<button onClick={this.onChangeit.bind(this)} className="btn btn-info">Change header</button>
// 				</div>
// 			);
// 	}
// }

// Home.propTypes={
// 	name:React.PropTypes.string,
// 	age:React.PropTypes.number,
// 	user:React.PropTypes.object

// };